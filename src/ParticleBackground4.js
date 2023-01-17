import './Styles/App.css';
import React from "react";
import Particles from "react-tsparticles"
import particlesConfig3 from "./constants/particlesConfig3";

export default function StarBackground () {
  return (
    <Particles params={particlesConfig3}></Particles>
  )
}


