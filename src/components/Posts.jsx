import '../Styles/App.css';
import { Suspense, useState, useCallback, useMemo, useRef } from 'react';
import { Canvas, extend, useFrame, useLoader, useThree } from 'react-three-fiber';
import * as THREE from 'three';
import zenStone from '../assets/images/zen.jpeg';
import tranquil from '../assets/images/tranquil.jpeg'
import tranquil2 from '../assets/images/tranquil2.jpeg'
import styled from 'styled-components';
import Layout from '../components/layouts/article'
import Section from '../components/section'
import ParticleComponent from '../ParticleBackground3';
import {
    LinkOverlay,
    Container,
    Text,
    LinkBox,
    Image,
    Heading,
    Box,
    Flex,
    Center
} from '@chakra-ui/react'
import Footer from './footer';
import { SectionDivider } from '../Styles/GlobalStyles';
import wave from "../assets/images/wave.jpeg"
import Totoro from './threeJS/Totoro';
import Modal from 'react-modal';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import ParticleBackground6 from '../ParticleBackground6';
extend({ OrbitControls })


const FooterContainer = styled.div`
display: flex;
width: 100%; 
justify-content: center;

@media (max-width: 960px) {
    margin-left: 5%;
    padding-bottom: 120px;
}
`

const GridOverlay = styled.div`
    z-index: 2;
    position: relative;
`

const GridContainer = styled.div`
    height: 100%;
    width: 100%;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
    }
`

const Grid2Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;


    @media screen and (max-width: 960px) {
        width: 5%;
        margin-left: 47%;
    }
`

const BlogImage = styled.img`
    width: 440px;
    height: 500px;
    border-radius: 10px;

    @media screen and (max-width: 960px) {
        width: 350px;
        // margin-left: 5%;
    }
`

const BlogImage2 = styled.img`
    width: 350px;
    height: 500px;
    border-radius: 10px;

    @media screen and (max-width: 960px) {
        width: 290px;
        // margin-left: 5%;
    }
`



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "500px",
        border: "none"
    },
};


const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    margin-bottom: 30px;
  }
`


const ModalOverlay = styled.div`
  height: 100%;
  backdrop-filter: blur(10px);
  display: flex;
  height: 100%;
  
  @media screen and (max-width: 960px) {
    height: 141%;
    margin-top: -141px;
  }
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 100px 40px 100px;

  h1 {
    text-align: center;
  }

  h2 {
    margin-top: 10px;
    border-radius: 10px;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 0px;
    font-size: 25px;
    font-family: 'Noto Sans JP', sans-serif;        
  }

  h3 {
    margin-top: 20px;
    font-size: 25px;
    text-align: center;
  }

  img {
    border-radius: 10px;
    height: 450px;
    object-fit: cover;

    @media screen and (max-width: 960px) {
      height: 50%;
      z-index: 999;
    }
  }
  
  @media screen and (max-width: 960px) {
    padding: 0px;
    justify-content: center;
    z-index: 999;
  }
`

const ModalTextContainer = styled.div`
  flex-direction: column;
  margin-left: 0%;
  display: flex;
  width: 100%;
`

const CloseContainer = styled.div`
  display: flex;
  justify-content: center;
`




const Posts = props => {
  const [modal, setModal] = useState(false)
  let subtitle;

  function openModal() {
    console.log("Button clicked")
    setModal(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setModal(false);
  }


  return (
        <>
            <GridContainer>
                <ParticleBackground6 />
                <Suspense fallback={null}>
                    <Totoro />
                </Suspense>
                <GridOverlay>
                    <Flex>
                        <Center w="47.3%">
                            <Heading as="h2" size="lg" fontSize="80px" mb={24}>
                                Haiku
                                <SectionDivider />
                            </Heading>
                        </Center>
                    </Flex>

                    <ModalContainer>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                            Tranquility
                        </button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <ModalOverlay>
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <ModalContent>
                                            <img src={zenStone} />
                                            <ModalTextContainer>
                                              <h2>閑けさや<br />岩にしみいる<br />蝉の声</h2>
                                              <h3>Oh, tranquility! <br /> Penetrating the very rock, <br /> A cicada’s voice.</h3>
                                              <h3>- Matsuo Basho</h3>
                                              <CloseContainer>
                                                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                              </CloseContainer>
                                            </ModalTextContainer>
                                        </ModalContent>
                                    </div>
                                </div>
                            </ModalOverlay>
                        </div>
                    </ModalContainer>



                    <Flex>
                        <Center w="45%">
                            <Heading as="h2" size="lg" fontSize="80px" mb={24}>
                                Blog
                                <SectionDivider />
                            </Heading>
                        </Center>
                    </Flex>
                    <Grid2Container>
                        <Box>
                            <Section delay={0.2}>
                                <LinkBox cursor='pointer'>
                                    <BlogImage src={wave} alt="Tide Of Tech Blog" />
                                    <LinkOverlay href={`posts/blog3`}>
                                        <Text style={{ color: "var(--text-color)", textAlign: "center" }} fontSize={20}>The Tide of Tech</Text>
                                    </LinkOverlay>
                                </LinkBox>
                            </Section>
                        </Box>
                        <Box>
                            <Section delay={0.2}>
                                <LinkBox cursor='pointer'>
                                    <BlogImage src="/images/postThumb.jpg" alt="E-Boy to Engineer Blog" />
                                    <LinkOverlay href={`posts/blog1`}>
                                        <Text style={{ color: "var(--text-color)", textAlign: "center" }} fontSize={20}>From E-Boy To Engineer</Text>
                                    </LinkOverlay>
                                </LinkBox>
                            </Section>
                        </Box>
                        <Box>
                            <Section delay={0.3}>
                                <LinkBox cursor='pointer'>
                                    <BlogImage2 src="/images/proPic2.jpg" alt="GraphQL blog" />
                                    <LinkOverlay href={`posts/blog2`}>
                                        <Text style={{ color: "var(--text-color)", textAlign: "center" }} fontSize={20}>GraphQL </Text>
                                    </LinkOverlay>
                                </LinkBox>
                            </Section>
                        </Box>
                    </Grid2Container>
                    <FooterContainer>
                        <Footer />
                    </FooterContainer>
                </GridOverlay>
            </GridContainer >
        </>
    );
};

export default Posts;








