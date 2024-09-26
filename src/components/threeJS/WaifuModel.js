import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three-stdlib';
import * as THREE from 'three';
import { deflateSync, inflateSync } from 'fflate';

const calculateStorageSize = () => {
  let total = 0;
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      total += (localStorage[key].length || 0);
    }
  }
  console.log(`Current storage size: ${total} bytes`);
};


const testCompression = (jsonData) => {
  try {
    const encodedData = new TextEncoder().encode(jsonData);
    const compressedData = deflateSync(encodedData);
    const binaryString = String.fromCharCode(...compressedData);
    const base64Data = btoa(binaryString);
    console.log(`Compressed data size: ${base64Data.length} bytes`);
    return base64Data;
  } catch (error) {
    console.error('Error during compression:', error);
  }
};

// Example usage
const jsonData = JSON.stringify({ example: "data" });
testCompression(jsonData);

function LoginModel({ mouse }) {
  const { scene } = useGLTF('/gltf/catGirl/scene.gltf');
  const [model, setModel] = useState(null);
  const gltfUrl = '/catGirl/scene.gltf';


  useEffect(() => {
    if (scene) {
      scene.scale.set(5, 5, 5);
      scene.position.set(0, -4, 0);
      const rotationInRadians = (20 * Math.PI) / 180;
      scene.rotation.set(2, rotationInRadians, 0);
      setModel(scene);
    }
  }, [scene]); // Depend on scene being loaded

  useFrame(() => {
    if (model) {
      // Control the rotation around the Y-axis (left and right movement)
      scene.rotation.y = mouse.x * Math.PI / 4; // Limit the rotation range to be more controlled

      // Control the rotation around the X-axis (up and down movement, straight back-and-forth)
      const maxTilt = Math.PI / 36; // Limit the tilt
      scene.rotation.x = Math.max(-maxTilt, Math.min(mouse.y * maxTilt, maxTilt));
    }
  });

  return model ? <primitive object={scene} /> : null;
}

const CatGirlComponent = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    setMouse({ x, y });
  };

  const handleTouchMove = (event) => {
    const touch = event.touches[0]; // Single touch for simplicity
    const x = (touch.clientX / window.innerWidth) * 2 - 1;
    const y = -(touch.clientY / window.innerHeight) * 2 + 1;
    setMouse({ x, y });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="h-80">
      <Canvas style={{ width: '375px', height: '330px', marginBottom: "5px" }} camera={{ position: [0, 0, -4.8], fov: 40 }}>
        <directionalLight
          position={[-2.8, 5, -5]}
          intensity={0.6}
          color="#ffffff"
        />
        <ambientLight intensity={0.4} color="#ffd1b3" />
        <pointLight position={[-2.8, 2, -3]} intensity={0.2} color="#ffcc99" />
        <pointLight position={[2, 2, -2]} intensity={0.1} color="#ffffff" />
        <LoginModel mouse={mouse} />
      </Canvas>
    </div>
  );
};

export default CatGirlComponent;
