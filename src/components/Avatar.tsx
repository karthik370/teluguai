import ErrorBoundary from './ErrorBoundary';
import { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import './Avatar.css';

// Avatar personality types
export type AvatarPersonality = 'girl' | 'boy';

// Animation states for Grok Ani-style realism
interface AnimationState {
  isBlinking: boolean;
  eyeDirection: { x: number; y: number };
  mouthOpenness: number; // 0-1 for lip sync
  headTilt: number;
  emotionalState: 'neutral' | 'happy' | 'thinking' | 'listening' | 'speaking';
  breathingPhase: number;
  isIdle: boolean;
  isSpeaking: boolean;
}

// Phoneme to mouth shape mapping for Telugu (will be used for advanced lip sync)
// const TELUGU_VISEME_MAP: Record<string, number> = {
//   'silence': 0,
//   'a': 0.8,
//   'i': 0.3,
//   'u': 0.6,
//   'e': 0.5,
//   'o': 0.7,
//   'k': 0.2,
//   'g': 0.2,
//   'ch': 0.4,
//   'j': 0.4,
//   't': 0.2,
//   'd': 0.2,
//   'p': 0.1,
//   'b': 0.1,
//   'm': 0.1,
//   'n': 0.3,
//   'r': 0.4,
//   'l': 0.4,
//   's': 0.3,
//   'h': 0.6
// };

interface AvatarProps {
  personality: AvatarPersonality;
  isListening: boolean;
  isSpeaking: boolean;
  audioUrl?: string | null;
  emotionalContext?: string;
}

// 3D Avatar Model Component
const AvatarModel = ({ 
  personality, 
  animationState
}: { 
  personality: AvatarPersonality;
  animationState: AnimationState;
}) => {
  const meshRef = useRef<THREE.Group>(null!);
  const modelPath = personality === 'girl' 
      ? '/models/indian_girl/scene.gltf'
      : '/models/indian_boy/scene.gltf';

  // Load the 3D model. Suspense will handle the loading state.
  const { scene } = useGLTF(modelPath);

  // Animation loop for Grok-style realism
  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();
    
    // Breathing animation
    const breathingOffset = Math.sin(time * 0.8) * 0.02;
    meshRef.current.position.y = breathingOffset;
    
    // Head tilt based on emotional state
    meshRef.current.rotation.z = animationState.headTilt * (Math.PI / 180);
    
    // Subtle idle movements
    if (animationState.isIdle) {
      meshRef.current.rotation.y = Math.sin(time * 0.3) * 0.05;
    }
    
    // Eye direction (if model supports it)
    // This would require accessing specific bones/blend shapes
    
    // Apply mouth openness for lip sync
    // This would require accessing facial blend shapes
    // Example: model.morphTargetInfluences[mouthOpenIndex] = animationState.mouthOpenness;
  });

  return <primitive object={scene} ref={meshRef} scale={0.5} />;
};

// Fallback placeholder when models aren't loaded
const PlaceholderAvatar = ({ personality, animationState }: { 
  personality: AvatarPersonality;
  animationState: AnimationState;
}) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Rotation based on personality
    meshRef.current.rotation.y = time * (personality === 'girl' ? 0.5 : -0.3);
    
    // Breathing
    meshRef.current.position.y = Math.sin(time * 0.8) * 0.1;
    
    // Scale based on speaking
    const scale = animationState.isSpeaking ? 1.1 : 1.0;
    meshRef.current.scale.setScalar(scale + Math.sin(time * 2) * 0.02);
  });

  const color = personality === 'girl' ? '#ff69b4' : '#4169e1';
  
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

// Main Avatar Component
const Avatar = ({ 
  personality, 
  isListening, 
  isSpeaking, 
  audioUrl, 
  emotionalContext 
}: AvatarProps) => {
  const [animationState, setAnimationState] = useState<AnimationState>({
    isBlinking: false,
    eyeDirection: { x: 0, y: 0 },
    mouthOpenness: 0,
    headTilt: 0,
    emotionalState: 'neutral',
    breathingPhase: 0,
    isIdle: true,
    isSpeaking: false
  });
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  // Update emotional state based on context
  useEffect(() => {
    if (!emotionalContext) return;
    
    let newEmotion: AnimationState['emotionalState'] = 'neutral';
    
    if (emotionalContext.includes('happy') || emotionalContext.includes('joy')) {
      newEmotion = 'happy';
    } else if (emotionalContext.includes('think') || emotionalContext.includes('?')) {
      newEmotion = 'thinking';
    }
    
    setAnimationState(prev => ({ ...prev, emotionalState: newEmotion }));
  }, [emotionalContext]);

  // Handle speaking state changes
  useEffect(() => {
    setAnimationState(prev => ({
      ...prev,
      emotionalState: isSpeaking ? 'speaking' : (isListening ? 'listening' : 'neutral'),
      isIdle: !isSpeaking && !isListening,
      isSpeaking: isSpeaking
    }));
  }, [isSpeaking, isListening]);

  // Lip sync animation when speaking
  useEffect(() => {
    if (!isSpeaking || !audioUrl) {
      setAnimationState(prev => ({ ...prev, mouthOpenness: 0 }));
      return;
    }

    // Create audio element for analysis
    const audio = new Audio(audioUrl);
    audioRef.current = audio;
    
    // Simple lip sync simulation
    // In a real implementation, you'd analyze the audio frequency
    const startLipSync = () => {
      const animate = () => {
        if (!isSpeaking) return;
        
        // Simulate mouth movement based on audio
        const intensity = 0.3 + Math.random() * 0.7;
        setAnimationState(prev => ({ ...prev, mouthOpenness: intensity }));
        
        animationFrameRef.current = requestAnimationFrame(animate);
      };
      
      animate();
    };
    
    audio.addEventListener('play', startLipSync);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      audio.removeEventListener('play', startLipSync);
    };
  }, [isSpeaking, audioUrl]);

  // Blinking animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setAnimationState(prev => ({ ...prev, isBlinking: true }));
      setTimeout(() => {
        setAnimationState(prev => ({ ...prev, isBlinking: false }));
      }, 150);
    }, 2000 + Math.random() * 3000);

    return () => clearInterval(blinkInterval);
  }, []);

  // Eye movement
  useEffect(() => {
    const eyeInterval = setInterval(() => {
      const x = (Math.random() - 0.5) * 0.3;
      const y = (Math.random() - 0.5) * 0.2;
      setAnimationState(prev => ({ ...prev, eyeDirection: { x, y } }));
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(eyeInterval);
  }, []);

  return (
    <div className="avatar-canvas-container">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Lighting setup for realistic rendering */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.8} 
          castShadow 
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-5, 5, 5]} intensity={0.3} />
        <spotLight 
          position={[0, 10, 0]} 
          angle={0.3} 
          penumbra={1} 
          intensity={0.5}
          castShadow
        />
        
        {/* Avatar Model or Placeholder */}
        <ErrorBoundary>
          <Suspense fallback={<PlaceholderAvatar personality={personality} animationState={animationState} />}>
            <AvatarModel 
              personality={personality} 
              animationState={animationState} 
            />
          </Suspense>
        </ErrorBoundary>
        
        {/* Optional: Remove OrbitControls for production */}
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
      
      {/* Emotional overlay effects */}
      {animationState.emotionalState === 'happy' && (
        <div className="emotion-overlay happy-glow" />
      )}
      {animationState.emotionalState === 'thinking' && (
        <div className="emotion-overlay thinking-pulse" />
      )}
      
      {/* Personality indicator */}
      <div className={`personality-indicator ${personality}`}>
        {personality === 'girl' ? '👧' : '👦'}
      </div>
    </div>
  );
};

export default Avatar;
