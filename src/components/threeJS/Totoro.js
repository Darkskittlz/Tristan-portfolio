import React, { Suspense, useRef } from 'react'
import { useGLTF, OrbitControls, OrthographicCamera } from '@react-three/drei'
import { Canvas, useFrame } from "react-three-fiber"
import styled from "styled-components"

const GridContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`



function TotoroModel({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/glb/totoro.glb')

  return (
    <group 
      ref={group} 
      {...props} 
      dispose={null}
      position={[0,-12,0]}
    >
      <mesh geometry={nodes.Body.geometry} material={materials.skin} position={[0, 12.5, 0]} scale={7.42}>
        <mesh geometry={nodes.Arms.geometry} material={materials.skin} position={[0.89, -0.2, -0.12]} rotation={[0, 0, 0.19]} scale={0.34}>
          <mesh geometry={nodes.Claws_arms.geometry} material={materials.claws} position={[-0.04, -2.46, -0.48]} rotation={[0.05, 0.25, 0.06]} scale={0.28} />
        </mesh>
        <mesh geometry={nodes.Belly.geometry} material={materials.belly}>
          <mesh geometry={nodes.Marks_belly.geometry} material={materials.skin} position={[0, -0.11, 0.88]} rotation={[-0.52, 0, 0]} scale={[0.11, 0.04, 0.01]} />
          <mesh geometry={nodes.Marks_belly001.geometry} material={materials.skin} position={[0.43, -0.3, 0.86]} rotation={[-0.42, 0.43, 0.18]} scale={[0.11, 0.04, 0.01]} />
        </mesh>
        <mesh geometry={nodes.Ears.geometry} material={materials.skin} position={[0.44, 0.93, 0]} rotation={[0, 0, -0.27]} scale={0.05} />
        <group position={[0.46, 0.32, 0.78]} rotation={[-0.24, 0.63, -0.11]} scale={[0.11, 0.11, 0.05]}>
          <mesh geometry={nodes.Sphere.geometry} material={materials['eyes | sclera']} />
          <mesh geometry={nodes.Sphere_1.geometry} material={materials['eyes | pupil']} />
        </group>
        <mesh geometry={nodes.Feet.geometry} material={materials.skin} position={[0.26, -1.5, -0.12]} rotation={[0, -1.19, 1.63]} scale={[0.24, 0.18, 0.24]}>
          <mesh geometry={nodes.Claws_feet.geometry} material={materials.claws} position={[-0.72, -2.4, -0.04]} rotation={[0.12, 0.19, -0.22]} scale={[0.36, 0.58, 0.32]} />
        </mesh>
        <mesh geometry={nodes.Leaf_hat.geometry} material={materials['leaf | body']} position={[0, 0.92, 0]} scale={0.41}>
          <mesh geometry={nodes.Stalk.geometry} material={materials['leaf | stalk']} position={[0.01, 0.41, -1.3]} rotation={[0.08, 0, 0]} scale={[0.15, 0.08, 0.59]} />
        </mesh>
        <mesh geometry={nodes.Nose.geometry} material={materials.nose} position={[0, 0.38, 0.8]} rotation={[1.01, 0, 0]} scale={[0.13, 0.12, 0.09]} />
        <mesh geometry={nodes.Tail.geometry} material={materials.skin} position={[0, -1.34, -0.86]} scale={[0.31, 0.31, 0.4]} />
        <mesh geometry={nodes.Whiskers.geometry} material={materials.whiskers} position={[0.42, 0.2, 0.4]} rotation={[0, 0.35, -0.05]} scale={0.04} />
      </mesh>
    </group>
  )
}
useGLTF.preload('/gltf/totoro.gltf')



export default function Totoro() {

  return (
    <GridContainer>
      <Canvas style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgb(255,255,255, 0.1)",
          borderRadius: "10px",
          margin:"10px",
          height: "38vh",
          width: "50vh",
          zIndex: "1"
        }}
        camera={{
          fov: 75, 
          near: 3, 
          position: [15,4,20]
          // far: 3
        }}
        >

      {/* <OrthographicCamera
        makeDefault
        zoom={8}
        top={195}
        left={200}
        right={-200}
        near={1}
        far={2000}
        position={[50, 50, 200]}
      /> */}

        <ambientLight intensity={1} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
          <Suspense fallback={null}>
            <TotoroModel />
          </Suspense>
          <OrbitControls />
      </Canvas>
    </GridContainer>
  )
}