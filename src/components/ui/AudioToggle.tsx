import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const AudioToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const droneNodesRef = useRef<{ osc1: OscillatorNode; osc2: OscillatorNode; gain: GainNode } | null>(null);

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
  };

  const startDrone = () => {
    initAudio();
    if (!audioCtxRef.current) return;

    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    const ctx = audioCtxRef.current;
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0.001, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.025, ctx.currentTime + 2); // Soft subtle volume

    // Low-pass filter for a deep space ambient feel
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, ctx.currentTime);

    // Two detuned sine oscillators for zero-g harmonic depth
    const osc1 = ctx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(110, ctx.currentTime); // A2

    const osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(164.81, ctx.currentTime); // E3 harmonic

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc1.start();
    osc2.start();

    droneNodesRef.current = { osc1, osc2, gain: gainNode };
  };

  const stopDrone = () => {
    if (droneNodesRef.current && audioCtxRef.current) {
      const { osc1, osc2, gain } = droneNodesRef.current;
      const ctx = audioCtxRef.current;
      gain.gain.setValueAtTime(gain.gain.value, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1);
      setTimeout(() => {
        try {
          osc1.stop();
          osc2.stop();
          osc1.disconnect();
          osc2.disconnect();
        } catch (e) {
          // ignore
        }
        droneNodesRef.current = null;
      }, 1000);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopDrone();
      setIsPlaying(false);
    } else {
      startDrone();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      if (droneNodesRef.current) {
        stopDrone();
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={toggleSound}
        className={`group relative flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-mono backdrop-blur-xl transition-all duration-300 ${
          isPlaying
            ? 'border-sky-400/60 bg-sky-950/40 text-sky-300 shadow-ice-sm'
            : 'border-zinc-800 bg-[#121214]/80 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
        }`}
        title={isPlaying ? 'Mute Anti-Gravity Ambience' : 'Play Zero-G Soundscape'}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-sky-400 animate-pulse" />
            <div className="flex items-center gap-0.5 h-3">
              <span className="w-0.5 h-2 bg-sky-400 rounded-full animate-[bounce_1s_infinite_100ms]" />
              <span className="w-0.5 h-3.5 bg-sky-400 rounded-full animate-[bounce_1s_infinite_300ms]" />
              <span className="w-0.5 h-1.5 bg-sky-400 rounded-full animate-[bounce_1s_infinite_200ms]" />
            </div>
            <span className="hidden sm:inline">Zero-G Sound: ON</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300" />
            <span className="hidden sm:inline">Ambience</span>
          </>
        )}
      </button>
    </div>
  );
};
