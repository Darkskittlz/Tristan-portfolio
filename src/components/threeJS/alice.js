import React, { useEffect, useRef, Suspense, useMemo } from "react";
import { useGLTF, useAnimations, useTexture, Center } from '@react-three/drei'
import { Canvas, extend, useThree, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import img from '../../assets/images/wave.jpeg';
import moonTexture from '../../assets/moonTextureSmall.png';
import styled from "styled-components"
import { Water } from 'three-stdlib';

extend({ Water })


const GridContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 600px;
  margin-top: 15px;
`

const CenterContainer = styled.div`
    width: 90%;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
`


const CameraController = () => {
  const { camera, gl } = useThree();


  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);
      controls.minDistance = 3;
      controls.maxDistance = 50;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};



export function Ocean() {
  const ref = useRef()
  const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, '/waternormals.jpeg')
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding
    }),
    [waterNormals]
  )
  useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
}




function Scene() {
  const texture = useLoader(THREE.TextureLoader, img)
  const colorMap = useLoader(TextureLoader, moonTexture)
  const ref = useRef();
  const ref2 = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.01
    ref2.current.rotation.y += 0.001
    ref2.current.rotation.x += 0.001
  })

  return (
    <>
      <mesh
        rotation={[+Math.PI / 2, 0, 0]}
        ref={ref2}
        scale={2.0}
        position={[0, 5, 0]}
      >
        <CameraController />
        <ambientLight />
        <boxGeometry attach="geometry" args={[3, 3, 3]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      <mesh
        ref={ref}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1}
        position={[4.9, 8, 5]}
      >
        <CameraController />
        <sphereGeometry attach="geometry" args={[1, 62, 55]} />
        <meshStandardMaterial attach="material" map={colorMap} />
      </mesh>
      <Ocean />
    </>
  )
}


function Portrait() {

  return (
    <GridContainer>
      <CenterContainer>
        <Canvas camera={{ position: [0, 8, 30], fov: 35, near: 1, far: 20000 }} style={{ zIndex: 999, borderRadius: 20 }}>
          <React.Suspense fallback={<></>}>
            <Scene />
          </React.Suspense>
        </Canvas>
      </CenterContainer>
    </GridContainer>
  );
};

export default Portrait;
