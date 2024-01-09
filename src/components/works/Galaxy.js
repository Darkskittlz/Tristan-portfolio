import { Container, Badge, Link, List, ListItem, SimpleGrid, Image } from '@chakra-ui/react'
import Layout from '../layouts/article'
import styled, { keyframes } from 'styled-components'
import Footer from '../footer'
import ParticleComponent from '../../ParticleBackground3'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import "../../Styles/App.css"
import Background1 from "../../assets/images/works/Galaxy1.png"
import Background3 from "../../assets/images/works/Galaxy3.png"
import Background2 from "../../assets/images/works/Galaxy4.png"



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

const Galaxy = props => {
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
                                    src="/images/works/galaxy1.png"
                                    style={{  
                                        boxShadow: "0 0 40px rgb(255,0,0)", 
                                        borderRadius: "50px", 
                                        padding: "0px",
                                        width: "125px",
                                        objectFit: "cover"
                                    }}
                                />
                            </ImageContainer>
                                <h1><Badge colorScheme="blue"> Galaxy Generator</Badge></h1> 
                            </TitleContainer>
                            <BodyContainer>
                                <h1>
                                    A Galaxy Generator I created as part of Bruno Simons ThreeJS Journey. Its been a blast learning about threejs and how to integrate the language into react components with React Three Fiber. 
                                </h1>
                                <List ml={4} my={4} style={{display: "flex", flexDirection: "column"}}>
                                    <ListItem>
                                        <Badge2>Platform</Badge2>
                                        <span>ThreeJS, React Three Fiber </span>
                                    </ListItem>
                                    <ListItem>
                                        <Badge2>Website</Badge2>
                                        <Link 
                                            href="https://dark-galaxy-generator.netlify.app/"
                                            target="_blank"
                                            style={{
                                                color: "#b900ff"
                                            }}
                                        >
                                        https://dark-galaxy-generator.netlify.app/
                                            <ExternalLinkIcon mx="2px" />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Badge2>Source</Badge2>
                                        <Link 
                                            href="https://github.com/Darkskittlz/Galaxy-Generator"
                                            target="_blank"
                                            style={{
                                                color: "#b900ff"
                                            }}
                                        >
                                        https://github.com/Darkskittlz/Galaxy-Generator
                                            <ExternalLinkIcon mx="2px" />
                                        </Link>
                                    </ListItem>
                                </List>
                            </BodyContainer>
                              <br />
                            <img src={Background2} />
                            <img src={Background3} />
                            <img src={Background1} />
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

export default Galaxy;