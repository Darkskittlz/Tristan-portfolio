const particlesConfig3 = {
    "background": {
      "color": "var(--background-color)",
      "image": "url('https://github.com/Darkskittlz/darkmeow-portfolio/blob/master/src/assets/images/earthTopleft.png?raw=true')",
      "position": "0% 0%",
      "repeat": "no-repeat",
      "size": "49%"
    },
    "fullScreen": {
      "zIndex": 0
    },
    "interactivity": {
      "events": {
        "onClick": {
          "enable": true,
          "mode": "repulse"
        },
        "onHover": {
          "enable": true,
          "mode": "bubble"
        }
      },
      "modes": {
        "bubble": {
          "distance": 250,
          "duration": 2,
          "opacity": 0,
          "size": 0
        },
        "grab": {
          "distance": 400
        },
        "repulse": {
          "distance": 400
        }
      }
    },
    "particles": {
      "color": {value: "#fff"},
      "links": {
        "color": "#fff",
        "distance": 150,
        "opacity": 0.4
      },
      "move": {
        "attract": {
          "rotate": {
            "x": 600,
            "y": 600
          }
        },
        "enable": true,
        "path": {},
        "outModes": {
          "bottom": "out",
          "left": "out",
          "right": "out",
          "top": "out"
        },
        "random": true,
        "speed": 1,
        "spin": {}
      },
      "number": {
        "density": {
          "enable": true
        },
        "value": 160
      },
      "opacity": {
        "random": {
          "enable": true
        },
        "value": {
          "min": 0,
          "max": 1
        },
        "animation": {
          "enable": true,
          "speed": 1,
          "minimumValue": 0
        }
      },
      "size": {
        "random": {
          "enable": true
        },
        "value": {
          "min": 1,
          "max": 3
        },
        "animation": {
          "speed": 4,
          "minimumValue": 0.3
        }
      }
    }
  }
  
  export default particlesConfig3