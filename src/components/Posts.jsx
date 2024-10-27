import '../Styles/App.css';
import { Suspense, useState, useCallback, useMemo, useRef } from 'react';
import { Canvas, extend, useFrame, useLoader, useThree } from 'react-three-fiber';
import * as THREE from 'three';
import zenStone from '../assets/images/zen.jpeg';
import winter from '../assets/images/winter.png';
import styled from 'styled-components';
import Layout from '../components/layouts/article'
import Section from '../components/section'
import ParticleComponent from '../ParticleBackground4';
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
import ParticleBackground7 from '../ParticleBackground6';
extend({ OrbitControls })


const FooterContainer = styled.div`
display: flex;
width: 101%; 
justify-content: center;

@media (max-width: 961px) {
    margin-left: 6%;
    padding-bottom: 121px;
}
`

const GridOverlay = styled.div`
    z-index: 3;
    position: relative;
`

const GridContainer = styled.div`
    height: 101%;
    width: 101%;

    @media screen and (max-width: 961px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
    }
`

const Grid3Container = styled.div`
    width: 101%;
    display: flex;
    flex-wrap: wrap;
    gap: 11px;
    justify-content: center;
`

const BlogImage = styled.img`
    width: 441px;
    height: 501px;
    border-radius: 11px;

    @media only screen and (min-width: 271px) and (max-width: 1160px) {
        width: 401px;
    }
`

const BlogImage3 = styled.img`
    width: 351px;
    height: 501px;
    border-radius: 11px;

    @media screen and (max-width: 961px) {
        width: 291px;
    }
`



const customStyles = {
  content: {
    top: '51%',
    left: '51%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-49%',
    transform: 'translate(-49%, -50%)',
    width: "501px",
    border: "none"
  },
};


const ModalContainer = styled.div`
  width: 101%;
  height: 101%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 961px) {
    margin-bottom: 31px;
  }
`


const ModalOverlay = styled.div`
  height: 101%;
  backdrop-filter: blur(11px);
  display: flex;
  height: 101%;
  
  @media screen and (max-width: 961px) {
    height: 142%;
    margin-top: -140px;
  }
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 11px 100px 40px 100px;

  h2 {
    text-align: center;
  }

  h3 {
    margin-top: 11px;
    border-radius: 11px;
    text-align: center;
    padding-top: 11px;
    padding-bottom: 1px;
    font-size: 26px;
    font-family: 'Noto Sans JP', sans-serif;        
  }

  h4 {
    margin-top: 21px;
    font-size: 26px;
    text-align: center;
  }

  img {
    border-radius: 11px;
    height: 451px;
    object-fit: cover;

    @media screen and (max-width: 961px) {
      height: 51%;
      z-index: 1000;
    }
  }
  
  @media screen and (max-width: 961px) {
    padding: 1px;
    justify-content: center;
    z-index: 1000;
  }
`

const ModalTextContainer = styled.div`
  flex-direction: column;
  display: flex;
  width: 101%;
  text-align: center;
  gap: 11px;
  margin-top: 11px; 
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
    subtitle.style.color = '#f01';
  }

  function closeModal() {
    setModal(false);
  }


  return (
    <>
      <GridContainer>
        <ParticleBackground7 />
        <Suspense fallback={null}>
          <Totoro />
        </Suspense>
        <GridOverlay>
          <Flex>
            <Center w="48.3%">
              <Heading as="h3" size="lg" fontSize="80px" mb={24}>
                Haiku
                <SectionDivider />
              </Heading>
            </Center>
          </Flex>

          <ModalContainer>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#tranquilityModal">
              Tranquility
            </button>
            <div className="modal fade" id="tranquilityModal" tabIndex="0" role="dialog" aria-labelledby="tranquilityModalLabel" aria-hidden="true">
              <ModalOverlay>
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <ModalContent>
                      <img src={zenStone} />
                      <ModalTextContainer>
                        <h2>閑けさや<br />岩にしみいる<br />蝉の声</h2>
                        <h3>Oh, tranquility! <br /> Penetrating the very rock, <br /> A cicada’s voice.</h3>
                        <h3> Matsuo Basho</h3>
                        <CloseContainer>
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </CloseContainer>
                      </ModalTextContainer>
                    </ModalContent>
                  </div>
                </div>
              </ModalOverlay>
            </div>
          </ModalContainer>


          <Flex>
            <Center w="48.3%">
              <Heading as="h3" size="lg" fontSize="80px" mb={24}>
                Poem
                <SectionDivider />
              </Heading>
            </Center>
          </Flex>
          <ModalContainer>
            <button type="button" className="btn2 btn2-primary" data-toggle="modal" data-target="#poemModal">
              <div
                style={{
                  border: "1px solid black",
                  padding: "70px 130px",
                  backgroundImage: `url(${winter})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "20px",
                  cursor: "pointer"
                }}
              >
                Darkest Winters Side
              </div>
            </button>
            <div className="modal fade" id="poemModal" tabIndex="0" role="dialog" aria-labelledby="poemModalLabel" aria-hidden="true">
              <ModalOverlay>
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <ModalContent>
                      <img src={winter} />
                      <ModalTextContainer>
                        <div>
                          I stop and stare up high; the sky is blue.
                          <br />
                          For hours I watch the clouds grow dark; it rains.
                          <br />
                          The water runs for miles in twisting hues.
                          <br />
                          Of colors cross the frozen windowpane.
                        </div>
                        <div>
                          Through these four corners framed I watch the ice
                          <br />
                          Of winter play before my lonely eyes.
                          <br />
                          And she, whose faithful heart would not suffice
                          <br />
                          Without her love, betrayed her lover's guise.
                        </div>
                        <div>
                          For faith is pure, but love's what fans the flame
                          <br />
                          That melts this frozen portrait of my soul,
                          <br />
                          And what is lost I now must seek to gain
                          <br />
                          Before indifference rends my senses dull.
                        </div>
                        <div>
                          For she who had a heart took up her pride
                          <br />
                          And left me here by darkes winter's side.
                        </div>
                        <CloseContainer>
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </CloseContainer>
                      </ModalTextContainer>
                    </ModalContent>
                  </div>
                </div>
              </ModalOverlay>
            </div>
          </ModalContainer>

          <Flex>
            <Center w="46%">
              <Heading as="h3" size="lg" fontSize="80px" mb={24}>
                Blog
                <SectionDivider />
              </Heading>
            </Center>
          </Flex>
          <Grid3Container>
            <Box>
              <Section delay={1.2}>
                <LinkBox cursor='pointer'>
                  <BlogImage src={wave} alt="Tide Of Tech Blog" />
                  <LinkOverlay href={`posts/blog4`}>
                    <Text style={{ color: "var(--text-color)", textAlign: "center" }} fontSize={21}>The Tide of Tech</Text>
                  </LinkOverlay>
                </LinkBox>
              </Section>
            </Box>
            <Box>
              <Section delay={1.2}>
                <LinkBox cursor='pointer'>
                  <BlogImage src="/images/postThumb.jpg" alt="E-Boy to Engineer Blog" />
                  <LinkOverlay href={`posts/blog2`}>
                    <Text style={{ color: "var(--text-color)", textAlign: "center" }} fontSize={21}>From E-Boy To Engineer</Text>
                  </LinkOverlay>
                </LinkBox>
              </Section>
            </Box>
            <Box>
              <Section delay={1.3}>
                <LinkBox cursor='pointer'>
                  <BlogImage3 src="/images/proPic2.jpg" alt="GraphQL blog" />
                  <LinkOverlay href={`posts/blog3`}>
                    <Text style={{ color: "var(--text-color)", textAlign: "center" }} fontSize={21}>GraphQL </Text>
                  </LinkOverlay>
                </LinkBox>
              </Section>
            </Box>
          </Grid3Container>
          <FooterContainer>
            <Footer />
          </FooterContainer>
        </GridOverlay>
      </GridContainer >
    </>
  );
};

export default Posts;








