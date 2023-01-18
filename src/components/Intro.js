import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
import { Container1, Container2, ButtonContainer, Animation } from '../Styles/IntroStyles';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Center, Flex } from '@chakra-ui/react';
import "../Styles/App.css";

const SectionTitle = styled.h2`
    font-weight: 800;
    opacity: 1;
    color: white;
    width: max-content;
    max-width: 100%;
`

const GridContainer = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`

const Intro = (props) => {
    const textRef = useRef();

    useEffect(()=> {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["React Developer", "Software Engineer", "Blockchain Engineer", "UI/UX Designer"],
        });
    }, []);
  return (
    <GridContainer>
        <main>
            <Flex>
                <Center w="100%" style={{zIndex: 1}}>
                    <Container1 main>
                        <motion.div initial="hidden" animate="visible" variants={{
                            hidden: {
                                scale: .8,
                                opacity: 0
                            },
                            visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    delay: .4
                                }
                            }, 
                        }}>
                            <Container2>
                                <SectionTitle>Tristan Neal</SectionTitle>
                                <h3> <span id="spanText" ref={textRef}></span></h3>    
                            </Container2>
                        </motion.div>
                    </Container1>  
                </Center>
            </Flex>
        </main>
    </GridContainer>
    )
}

export default Intro

