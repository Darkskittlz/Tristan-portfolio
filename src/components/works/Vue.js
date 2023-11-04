import { Container, Badge, Link, List, ListItem, SimpleGrid, Image } from '@chakra-ui/react'
import Layout from '../layouts/article'
import styled, { keyframes } from 'styled-components'
import Footer from '../footer'
import ParticleComponent from '../../ParticleBackground3'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import "../../Styles/App.css"

import VueIMG from "../../assets/images/works/Vue.png"
import cheatSheet1 from "../../assets/notes/cheatSheet1.png"
import cheatSheet2 from "../../assets/notes/cheatSheet2.png"
import note1 from "../../assets/notes/note1.png"
import note2 from "../../assets/notes/note2.png"
import note3 from "../../assets/notes/note3.png"
import note4 from "../../assets/notes/note4.png"
import VueLogo from "../../assets/images/logos/Vue.png"

const GridContainer = styled.div`
    width: 50%;
    height: 65vw;
    margin-left: 25%;

    @media (max-width: 960px) {
        width: 100%;
        height: 120vh;
        margin-left:0%;
        justify-items: center;
    }
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    
    h1 {
        font-size: 30px;
        font-weight: 700;
        color: #A501EB;
    }
`

const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    h1 {
        font-size: 23px;
        text-indent: 30px;
        text-align: left;
    }
`

const FooterContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 30%;

    @media (max-width: 960px) {
        margin-top: 20px;
    }
`

const Animation = keyframes`
  0% { box-shadow: 0 0 10px #09EE9A; } 
  30% { box-shadow: 0 0 30px rgba(222, 59, 208, 1);  } 
  50% { box-shadow: 0 0 20px #09DEEE;  } 
  70% { box-shadow: 0 0 30px rgba(102, 37, 177, 1);  } 
  100% { box-shadow: 0 0 30px rgba(102, 37, 177, 1);  } 
`

const Badge2 = styled.div`
  backdrop-filter: blur(40px);
  padding: 8px;
  width: 15%;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: var(--text-color);
  background: rgb(239,113,253);
  background: linear-gradient(34deg, rgba(239,113,253,0.453486050124717) 31%, rgba(92,114,255,0.951273660744186) 82%);
  //   box-shadow: 0 0 20px rgba(80, 78, 78, 0.9);

  @media screen and (max-width:960px) {
    width: 25%;
  }
`

const ImageContainer = styled.div`
    animation-name: ${Animation},
    animation-duration: 4s;
    animation-iteration-count: infinite;
`
const IMGContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-direction: column;
    grid-gap: 10px;
    width: 1000px;

    img {
        height: 680px;
        object-fit: cover;
        
        @media (max-width: 960px) {
            height: 560px;
            width: 415px;
        }
    }

    @media (max-width: 960px) {
        grid-template-columns: 1fr;
    }
`

const IMGContainer3 = styled.div`
    display: flex;
    grid-gap: 10px;
    justify-content: center;
    
    width: 1060px;

    img {
        height: 940px;

        @media (max-width: 960px) {
            height: 360px;
            width: 415px;
        }
    }

    @media (max-width: 960px) {
        flex-direction: column;

    }
`

const IMGContainer2 = styled.div`
    display: grid;
    grid-gap: 10px;
    justify-content: center;
    
    width: 1060px;

    img {
        @media (max-width: 960px) {
            height: 360px;
            width: 415px;
        }
    }

    @media (max-width: 960px) {
        grid-template-columns: 1fr;
    }
`
    


const Vue = props => {
    return (
        <>
          <ParticleComponent />
            <Layout>
                <Container maxW='2x1'>
                    <GridContainer>
                        <SimpleGrid 
                            columns={[1, 1, 1]} 
                            gap={10}
                            style={{
                                marginTop: "10px", 
                                height: "86vh",
                                justifyItems: "center",
                                backdropFilter: "blur(25px)",
                                padding: "20px",
                                borderRadius: "10px"
                            }} 
                        >
                            <TitleContainer>
                                <ImageContainer>
                                    <Image
                                        fit="cover"
                                        mr={20}
                                        src={VueLogo}
                                        style={{  
                                            boxShadow: "0 0 20px rgb(0,83,255)", 
                                            borderRadius: "50px", 
                                            padding: "0px",
                                            height: "100px"
                                        }}
                                    />
                                </ImageContainer>
                                    <h1><Badge colorScheme="blue">VueJS Application</Badge></h1> 
                            </TitleContainer>
                            <BodyContainer>
                                <h1>
                                    This is a VueJS application that I built to learn VueX state management. Particularly how to pass down props from
                                    parent to child components, as well as emitting events and declaring listeners in parent components. Below are some of my notes 
                                    as well as a screenshot of the landing page. 
                                </h1>
                                <List ml={4} my={4} style={{display: "flex", flexDirection: "column"}}>
                                    <ListItem>
                                        <Badge2>Platform</Badge2>
                                        <span>VueJS, VueX </span>
                                    </ListItem>
                                    <ListItem>
                                        <Badge2>Website</Badge2>
                                        <Link 
                                            href="https://vuex-functionality.netlify.app/"
                                            target="_blank"
                                            style={{
                                                color: "#b900ff"
                                            }}
                                        >
                                        https://vuex-functionality.netlify.app/
                                            <ExternalLinkIcon mx="2px" />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Badge2>Source</Badge2>
                                        <Link 
                                            href="https://github.com/Darkskittlz/Vue-Basics"
                                            target="_blank"
                                            style={{
                                                color: "#b900ff"
                                            }}
                                        >
                                        https://github.com/Darkskittlz/Vue-Basics
                                            <ExternalLinkIcon mx="2px" />
                                        </Link>
                                    </ListItem>
                                </List>
                            </BodyContainer>
                            <br />
                            <br />
                        </SimpleGrid>
                        <IMGContainer3>
                            <img src={VueIMG} />
                        </IMGContainer3>
                        <IMGContainer>
                            <img src={cheatSheet1} />
                            <img src={cheatSheet2} />
                        </IMGContainer>
                        <IMGContainer2>
                            <img id="mediaNotes" src={note1} />
                            <img id="mediaNotes" src={note2} />
                            <img id="mediaNotes" src={note3} />
                            <img id="mediaNotes" src={note4} />
                        </IMGContainer2>
                        <FooterContainer>
                            <Footer />
                        </FooterContainer>
                    </GridContainer>
                </Container>
            </Layout>
        </>
    )
}

export default Vue;