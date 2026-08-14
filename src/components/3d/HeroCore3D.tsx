import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroCore3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 380;
    const height = mount.clientHeight || 380;

    // --- Scene & Camera ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x38bdf8, 5, 50);
    pointLight.position.set(5, 8, 8);
    scene.add(pointLight);

    const blueLight = new THREE.PointLight(0x0ea5e9, 3, 30);
    blueLight.position.set(-8, -6, -4);
    scene.add(blueLight);

    // --- Core Master Group ---
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Inner Glowing Crystal Octahedron
    const crystalGeo = new THREE.OctahedronGeometry(3.6, 0);
    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.4,
      roughness: 0.1,
      metalness: 0.2,
      transmission: 0.7,
      thickness: 1.2,
      transparent: true,
      opacity: 0.9,
      wireframe: false,
    });
    const crystal = new THREE.Mesh(crystalGeo, crystalMat);
    coreGroup.add(crystal);

    // 2. Wireframe Exo-Skeleton (Icosahedron)
    const exoGeo = new THREE.IcosahedronGeometry(4.8, 1);
    const exoMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const exo = new THREE.Mesh(exoGeo, exoMat);
    coreGroup.add(exo);

    // 3. Orbital Ring 1
    const ring1Geo = new THREE.TorusGeometry(6.2, 0.05, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x7dd3fc,
      transparent: true,
      opacity: 0.7,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    coreGroup.add(ring1);

    // 4. Orbital Ring 2 (Tilted Opposite)
    const ring2Geo = new THREE.TorusGeometry(6.8, 0.04, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.5,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 4;
    coreGroup.add(ring2);

    // 5. Orbiting Quantum Nodes
    const nodesCount = 18;
    const nodesGroup = new THREE.Group();
    const nodeGeo = new THREE.SphereGeometry(0.18, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < nodesCount; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      const angle = (i / nodesCount) * Math.PI * 2;
      const radius = 6.2;
      node.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
      ring1.add(node);
    }
    coreGroup.add(nodesGroup);

    // --- Interactive Mouse Dynamics ---
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let isHovered = false;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotX = y * 1.5;
      targetRotY = x * 1.5;
    };

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => {
      isHovered = false;
      targetRotX = 0;
      targetRotY = 0;
    };

    mount.addEventListener('mousemove', handlePointerMove);
    mount.addEventListener('mouseenter', handleMouseEnter);
    mount.addEventListener('mouseleave', handleMouseLeave);

    // Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(mount);

    // --- Animation Loop ---
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth hover rotation interpolation
      mouseX += (targetRotX - mouseX) * 0.08;
      mouseY += (targetRotY - mouseY) * 0.08;

      coreGroup.rotation.x = mouseX + Math.sin(elapsed * 0.8) * 0.1;
      coreGroup.rotation.y = mouseY + elapsed * (isHovered ? 0.8 : 0.4);

      // Counter-rotating components
      crystal.rotation.x += delta * 0.5;
      crystal.rotation.y += delta * 0.7;

      exo.rotation.x -= delta * 0.3;
      exo.rotation.z += delta * 0.4;

      ring1.rotation.z += delta * 0.6;
      ring2.rotation.z -= delta * 0.5;

      // Zero gravity floating bounce
      coreGroup.position.y = Math.sin(elapsed * 1.5) * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mount.removeEventListener('mousemove', handlePointerMove);
      mount.removeEventListener('mouseenter', handleMouseEnter);
      mount.removeEventListener('mouseleave', handleMouseLeave);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      crystalGeo.dispose();
      crystalMat.dispose();
      exoGeo.dispose();
      exoMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-[340px] sm:h-[420px] md:h-[460px]">
      {/* Subtle Glow Backdrop */}
      <div className="absolute w-64 h-64 bg-sky-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing z-10 flex items-center justify-center"
        title="Anti-Gravity Core (Interactive 3D)"
      />
      {/* Zero-G Core Label */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-zinc-900/80 border border-sky-500/30 text-[11px] font-mono text-sky-400/90 tracking-widest uppercase backdrop-blur-md pointer-events-none flex items-center gap-1.5 shadow-ice-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
        Zero-G Quantum Core • 60 FPS
      </div>
    </div>
  );
};
