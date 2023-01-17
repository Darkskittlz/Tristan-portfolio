const particlesConfig3 = {
    "background": {
      "color": "var(--background-color)",
      "image": "url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/BlackMarble_2016_rotating_globe_at_night_transparent.gif/640px-BlackMarble_2016_rotating_globe_at_night_transparent.gif')",
      "position": "10% 50%",
      "repeat": "no-repeat",
      "size": "30%"
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
      "color": "var(--text-color)",
      "links": {
        "color": {
          "value": "white"
        },
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