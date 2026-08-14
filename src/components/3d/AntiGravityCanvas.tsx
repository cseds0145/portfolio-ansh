import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const AntiGravityCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.0018);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0x0ea5e9, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x38bdf8, 2, 200);
    pointLight1.position.set(40, 50, 40);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x0284c7, 1.5, 180);
    pointLight2.position.set(-40, -30, 20);
    scene.add(pointLight2);

    // --- 1. Interactive Particle Field (Zero-G Ice Blue & Diamond Dust) ---
    const particleCount = 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const initialPositions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color('#38bdf8'); // Ice blue
    const color2 = new THREE.Color('#e0f2fe'); // Light ice
    const color3 = new THREE.Color('#0284c7'); // Deep blue

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 0.5) * 180;
      const z = (Math.random() - 0.5) * 150;

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      initialPositions[i3] = x;
      initialPositions[i3 + 1] = y;
      initialPositions[i3 + 2] = z;

      scales[i] = Math.random() * 2.2 + 0.5;

      const choice = Math.random();
      const mixedColor = choice > 0.6 ? color1 : choice > 0.3 ? color2 : color3;
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom Particle Canvas Texture (Glow Sphere)
    const getParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(56, 189, 248, 0.8)');
        gradient.addColorStop(0.6, 'rgba(14, 165, 233, 0.2)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: 2.2,
      map: getParticleTexture(),
      transparent: true,
      opacity: 0.85,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // --- 2. Floating Low-Poly Geometric Wireframes (Zero-G Debris) ---
    const floatingGeometries: THREE.Mesh[] = [];
    const shapes = [
      new THREE.IcosahedronGeometry(3.5, 0),
      new THREE.OctahedronGeometry(2.8, 0),
      new THREE.TorusGeometry(3.2, 0.8, 8, 16),
      new THREE.TetrahedronGeometry(3, 0),
      new THREE.IcosahedronGeometry(2, 0),
    ];

    const wireframeMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
      roughness: 0.2,
      metalness: 0.8,
    });

    const positionsGeo = [
      { x: -55, y: 30, z: -15 },
      { x: 60, y: -25, z: -25 },
      { x: -45, y: -35, z: -10 },
      { x: 50, y: 35, z: -20 },
      { x: -10, y: 48, z: -30 },
      { x: 25, y: -50, z: -15 },
    ];

    positionsGeo.forEach((pos, idx) => {
      const geo = shapes[idx % shapes.length];
      const mesh = new THREE.Mesh(geo, wireframeMat.clone());
      mesh.position.set(pos.x, pos.y, pos.z);
      (mesh as any).userData = {
        rotX: (Math.random() - 0.5) * 0.015,
        rotY: (Math.random() - 0.5) * 0.015,
        rotZ: (Math.random() - 0.5) * 0.015,
        floatSpeed: 0.001 + Math.random() * 0.002,
        initialY: pos.y,
        seed: Math.random() * 100,
      };
      scene.add(mesh);
      floatingGeometries.push(mesh);
    });

    // --- Mouse Tracking & Zero-Gravity Physics ---
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = -(event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // --- Animation Loop ---
    let clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Parallax scene shift
      camera.position.x = mouseX * 8;
      camera.position.y = mouseY * 6;
      camera.lookAt(0, 0, 0);

      // Particle physics & floating sine-wave
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        // Zero gravity subtle upward/swirl drift
        posArray[i3 + 1] = initialPositions[i3 + 1] + Math.sin(elapsedTime * 0.8 + initialPositions[i3] * 0.05) * 4;
        posArray[i3] = initialPositions[i3] + Math.cos(elapsedTime * 0.5 + initialPositions[i3 + 1] * 0.04) * 3;

        // Subtle mouse repulsion
        const dx = posArray[i3] - mouseX * 50;
        const dy = posArray[i3 + 1] - mouseY * 40;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 25) {
          const force = (25 - dist) / 25;
          posArray[i3] += (dx / dist) * force * 1.5;
          posArray[i3 + 1] += (dy / dist) * force * 1.5;
        }
      }
      posAttr.needsUpdate = true;

      // Rotate particle cloud gently
      particles.rotation.y = elapsedTime * 0.03;

      // Animate floating low-poly meshes
      floatingGeometries.forEach((mesh) => {
        const { rotX, rotY, rotZ, floatSpeed, initialY, seed } = (mesh as any).userData;
        mesh.rotation.x += rotX;
        mesh.rotation.y += rotY;
        mesh.rotation.z += rotZ;
        mesh.position.y = initialY + Math.sin(elapsedTime * 1.2 + seed) * 3.5;
      });

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
