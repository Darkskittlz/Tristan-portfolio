import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import {
  Container1,
  Container2,
  Container3,
  ButtonContainer,
  Animation,
} from "../Styles/IntroStyles";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Center, Flex } from "@chakra-ui/react";
import "../Styles/App.css";

const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 800;
  display: inline-block;

  /* Updated gradient: Blue to Purple */
  background: linear-gradient(140deg, #4facfe 40%, #00f2fe 100%);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const GridContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Intro = (props) => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "React Developer",
        "Full-Stack Software Engineer",
        "ThreeJS Developer",
        "UI/UX Designer",
      ],
    });
  }, []);
  return (
    <GridContainer>
      <main>
        <Flex>
          <Center w="100%" style={{ zIndex: 1 }}>
            <Container1 main>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.4,
                    },
                  },
                }}
              >
                <SectionTitle>Tristan Fae</SectionTitle>
                <Container2>
                  <div style={{ marginTop: "2px" }}>
                    <h3>
                      {" "}
                      <span id="spanText" ref={textRef}></span>
                    </h3>
                  </div>
                </Container2>
              </motion.div>
            </Container1>
          </Center>
        </Flex>
      </main>
    </GridContainer>
  );
};

export default Intro;
