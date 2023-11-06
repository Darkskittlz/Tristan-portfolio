import React, { useEffect, useRef } from "react";
import styled, { keyframes } from 'styled-components';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";
import "../Styles/App.css";
import GithubIcon from "../assets/images/logos/github.png";
import WebIcon from "../assets/images/logos/website.jpg";
import {
	Link,
	Heading,
} from '@chakra-ui/react'


const GalaxyComponent = () => {
  // Ref for the canvas
  const canvasRef = useRef();
   
  // Debug
  const gui = new GUI();
  
  // Scene
  const scene = new THREE.Scene();
  
  // Galaxy
  const parameters = {}
  parameters.count = 1000000
  parameters.size = 0.01
  parameters.radius = 5
  parameters.branches = 3
  parameters.spin = 1
  parameters.randomness = 0.2
  parameters.randomnessPower = 3
  parameters.insideColor = '#ff6030'
  parameters.outsideColor = '#1b3984'

  let geometry = null
  let material = null
  let points = null

  const generateGalaxy = () => {
    // Destroy Old Galaxy
    if(points !== null){
      geometry.dispose()
      material.dispose()
      scene.remove(points)
    }
    
    geometry = new THREE.BufferGeometry()
    
    const positions = new Float32Array(parameters.count * 3)
    const colors = new Float32Array(parameters.count * 3)
    
    const colorInside = new THREE.Color(parameters.insideColor)
    const colorOutside = new THREE.Color(parameters.outsideColor)
     
    for (let i = 0; i < parameters.count; i++) {
      const i3 = i * 3
      const radius = Math.random() * parameters.radius
      positions[i3    ] = radius
      positions[i3 + 1] = 0
      positions[i3 + 2] = 0
    }
    
    //Straight Line
    for(let i = 0; i < parameters.count; i++) {
      const i3 = i * 3
      const radius = Math.random() * parameters.radius
      positions[i3    ] = radius
      positions[i3 + 1] = 0
      positions[i3 + 2] = 0
    }
    
    
    //Branches  
    for(let i = 0; i < parameters.count; i++){
        const i3 = i * 3
        const radius = Math.random() * parameters.radius
        const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2
     
        positions[i3    ] = Math.cos(branchAngle) * radius
        positions[i3 + 1] = 0
        positions[i3 + 2] = Math.sin(branchAngle) * radius
    }
    
    //Spin
    for(let i = 0; i < parameters.count; i++){
        const i3 = i * 3
    
        const radius = Math.random() * parameters.radius
        const spinAngle = radius * parameters.spin
        const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2
     
        positions[i3    ] = Math.cos(branchAngle + spinAngle) * radius
        positions[i3 + 1] = 0
        positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius
    }
     
    //Combined Code to Generate Randomness + Mixed Colors
    for(let i = 0; i < parameters.count; i++){
      const i3 = i * 3
      
      const radius = Math.random() * parameters.radius
      
      const spinAngle = radius * parameters.spin
      const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2
      
      const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness * radius
      const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness * radius
      const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness * radius
       
      positions[i3    ] = Math.cos(branchAngle + spinAngle) * radius + randomX
      positions[i3 + 1] = randomY
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ
      
      //Colors
      const mixedColor = colorInside.clone()
      mixedColor.lerp(colorOutside, radius / parameters.radius)
      
      colors[i3    ] = mixedColor.r
      colors[i3 + 1] = mixedColor.g
      colors[i3 + 2] = mixedColor.b
      
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    
    material = new THREE.PointsMaterial({
      size: parameters.size,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true
    })
     
    points = new THREE.Points(geometry, material)
    scene.add(points)
  }

  generateGalaxy()

  gui.add(parameters, 'count').min(100).max(1000000).step(100).onFinishChange(generateGalaxy)
  gui.add(parameters, 'size').min(0.001).max(0.1).step(0.001).onFinishChange(generateGalaxy) 
  gui.add(parameters, 'radius').min(0.01).max(20).step(0.01).onFinishChange(generateGalaxy)
  gui.add(parameters, 'branches').min(2).max(20).step(1).onFinishChange(generateGalaxy)
  gui.add(parameters, 'spin').min(- 5).max(5).step(0.001).onFinishChange(generateGalaxy)
  gui.add(parameters, 'randomness').min(0).max(2).step(0.001).onFinishChange(generateGalaxy)
  gui.add(parameters, 'randomnessPower').min(1).max(10).step(0.001).onFinishChange(generateGalaxy)
  gui.addColor(parameters, 'insideColor').onFinishChange(generateGalaxy)
  gui.addColor(parameters, 'outsideColor').onFinishChange(generateGalaxy)

  
  // Sizes
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  
  let camera, renderer;
  
  const onResize = () => {
    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    
    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  };
  
  useEffect(() => {
    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
    camera.position.x = 3;
    camera.position.y = 3;
    camera.position.z = 3;
    scene.add(camera);
    
    // Controls
    const controls = new OrbitControls(camera, canvasRef.current);
    controls.enableDamping = true;
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Animate
    const clock = new THREE.Clock();
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      // Update controls
      controls.update();
      
      // Render
      renderer.render(scene, camera);
      
      // Call animate again on the next frame
      window.requestAnimationFrame(animate);
    };
    
    animate();
    
    window.addEventListener("resize", onResize);
    
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);


  const IMGContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    grid-gap: 100px;
    z-index: 999;
    position: relative;
  `

  const CanvasContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 10px;
    width: 100vh;
    height: 100vh;
    
    canvas {
      width: 100%;
      height: 100%;
    }
  `
  
  
  return (
    <CanvasContainer>
      <canvas
        ref={canvasRef}
      />
        <Heading 
          as="h2" variant="section-title" 
          style={{ 
            textAlign: "center", 
            zIndex: "999",
            position: "relative"
          }}
        >
          New Project!
        </Heading>
        <IMGContainer>
          <h1>{' '}
            <Link
              href="https://github.com/Darkskittlz/ember-project"
              target="blank"
              style={{
                textDecoration: "none",
                  color: "#bb800c",
                  textAlign: "center"
              }}
            >
              <img
              src={GithubIcon}
              style={{
                marginTop: "17px",
                  height: "50px",
                  width: "50px"
              }}
              alt="github"
              />
            </Link>
          </h1>
          <h1>{' '}
            <Link
              href="https://ember-project-demo.netlify.app"
              target="blank"
              style={{
                textDecoration: "none",
                  textAlign: "center",
              }}
            >
              <img
                src={WebIcon}
                alt="Website Icon"
                style={{
                  height: "50px",
                    width: "50px",
                    marginTop: "20px",
                    borderRadius: "50px"
                }}
              />
            </Link>
          </h1>
        </IMGContainer>
    </CanvasContainer>
  );
};

export default GalaxyComponent;

