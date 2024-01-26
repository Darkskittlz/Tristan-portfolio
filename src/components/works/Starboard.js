import { Container, Badge, Link, List, ListItem, SimpleGrid, Image } from '@chakra-ui/react'
import Layout from '../layouts/article'
import styled, { keyframes } from 'styled-components'
import Footer from '../footer'
import ParticleComponent from '../../ParticleBackground3'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import "../../Styles/App.css"
import Background3 from "../../assets/images/works/cruise2.jpg"
import Background1 from "../../assets/images/works/Cruise4.jpg"
import Background2 from "../../assets/images/works/Cruise3.jpg"
import Background4 from "../../assets/images/works/cruise1.jpg"



const GridContainer = styled.div`
    width: 50%;
    height: 65vw;
    margin-left: 25%;

    @media (max-width: 960px) {
        width: 100%;
        height: 120vh;
        margin-left: 2%;
        justify-items: center;
    }
    
    img {
        object-fit: cover;
        width: 100%;
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
        text-align: left;
    }

    
    @media (max-width: 960px) {
        h1 {
            margin-top: 10px;
            font-size: 17px;
        }
`

const FooterContainer = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    margin-top: 50%;


    @media (max-width: 960px) {
        margin-top: 10%;
        margin-left: 5%;
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
  backdrop-filter: blur(80px);
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

const Starboard = props => {
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
                                height: "56vh",
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
                                    src="/images/works/Starboard.jpg"
                                    style={{  
                                        boxShadow: "0 0 40px rgb(255,0,0)", 
                                        borderRadius: "50px", 
                                        padding: "0px",
                                        height: "85px"
                                    }}
                                />
                            </ImageContainer>
                                <h1><Badge colorScheme="blue"><h1 style={{marginLeft: "10px"}}>Starboard SPA</h1></Badge></h1> 
                            </TitleContainer>
                            <BodyContainer>
                                <h1>
                                    Vite Progressive App that I built as part of a freelance job I worked for Starboard Cruises, a contractor of Royal Carribean Cruises.
                                </h1>
                                <List ml={4} my={4} style={{display: "flex", flexDirection: "column"}}>
                                    <ListItem>
                                        <Badge2>Platform</Badge2>
                                        <span>Vite, TailwindCSS, MUI, Vite Plugin PWA, EmblaCarousel, Perfect Scrollbar  </span>
                                    </ListItem>
                                    <ListItem>
                                        <Badge2>Website</Badge2>
                                        <Link 
                                            href="https://starboard-cruises.netlify.app/"
                                            target="_blank"
                                            style={{
                                                color: "#b900ff"
                                            }}
                                        >
                                        https://starboard-cruises.netlify.app/
                                            <ExternalLinkIcon mx="2px" />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Badge2>Source</Badge2>
                                        <Link 
                                            href="https://github.com/Darkskittlz/Tailwind_Vite"
                                            target="_blank"
                                            style={{
                                                color: "#b900ff"
                                            }}
                                        >
                                        https://github.com/Darkskittlz/Tailwind_Vite
                                            <ExternalLinkIcon mx="2px" />
                                        </Link>
                                    </ListItem>
                                </List>
                            </BodyContainer>
                              <br />
                            <img src={Background1} />
                            <img src={Background2} />
                            <img src={Background3} />
                            <img src={Background4} />
                            <FooterContainer>
                                <Footer />
                            </FooterContainer>
                        </SimpleGrid>
                    </GridContainer>
                </Container>
            </Layout>
        </>
    )
}

export default Starboard;