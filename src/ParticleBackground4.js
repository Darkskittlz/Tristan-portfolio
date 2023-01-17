import React from "react";
import styled from "styled-components";
import './Styles/App.css';
import { tsParticles } from "tsparticles-engine";

const GridContainer = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
`

const StarBackground = () => {
  (async () => {
    await loadStarsPreset(tsParticles); // this is required only if you are not using the bundle script
  
    await tsParticles.load("tsparticles", {
      background: {
        color: "var(--background-color)",
        "image": "url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/BlackMarble_2016_rotating_globe_at_night_transparent.gif/640px-BlackMarble_2016_rotating_globe_at_night_transparent.gif')",
        "position": "10% 50%",
        "repeat": "no-repeat",
        "size": "25%"
      },



      detectRetina: false,
      fpsLimit: 30,
      interactivity: {
        detectsOn: "canvas",
        events: {
          resize: true
        }
      },
      particles: {
        color:
        
        {
          value: "fff"
        },
        number: {
          density: {
            enable: true,
            area: 1080
          },
          limit: 0,
          value: 400
        },
        opacity: {
          animation: {
            enable: true,
            minimumValue: 0.05,
            speed: 0.25,
            sync: false
          },
          random: {
            enable: true,
            minimumValue: 0.05
          },
          value: 1
        },
        shape: {
          type: "circle"
        },
        size: {
          random: {
            enable: true,
            minimumValue: 0.5
          },
          value: 1
        }
      }
    });
  })();


  return (
    <GridContainer>

    </GridContainer>
  )
}

export default StarBackground;

