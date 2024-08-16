import { Container, Badge, Link, List, ListItem, SimpleGrid, Image } from '@chakra-ui/react'
import Layout from '../layouts/article'
import styled, { keyframes } from 'styled-components'
import Footer from '../footer'
import ParticleComponent from '../../ParticleBackground3'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import "../../Styles/App.css"


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
    margin-top: 40px;


    @media (max-width: 960px) {
        margin-top: 20px;
        margin-left: 15px;
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
  width: 21%;
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


    img {
        height: 15vw;
        margin-right: 5px;

        @media screen and (max-width: 960px) {
            height: 20vw;
        }

    }
`

const GoogleAuth = props => {
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
                justifyItems: "flex-start",
                backdropFilter: "blur(25px)",
                padding: "20px",
                borderRadius: "10px"
              }}
            >
              <TitleContainer>
                <ImageContainer>
                  <img src="https://github.com/Darkskittlz/Tristan-portfolio/blob/master/src/assets/images/works/googleOauth.png?raw=true" />
                </ImageContainer>
                <h1><Badge colorScheme="blue">Google OAuth</Badge></h1>
              </TitleContainer>
              <BodyContainer>
                <h1>

                </h1>
                <List ml={4} my={4} style={{ display: "flex", flexDirection: "column" }}>
                  <ListItem>
                    <Badge2>Platform</Badge2>
                    <span>JWT-Decode, Tsparticles, Particles-bg, React-oAuth/Google, Styled-Components  </span>
                  </ListItem>
                  <ListItem>
                    <Badge2>Website</Badge2>
                    <Link
                      href="https://google0auth.netlify.app/"
                      target="_blank"
                      style={{
                        color: "#b900ff"
                      }}
                    >
                      https://google0auth.netlify.app/
                      <ExternalLinkIcon mx="2px" />
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Badge2>Source</Badge2>
                    <Link
                      href="https://github.com/Darkskittlz/GoogleAuth"
                      target="_blank"
                      style={{
                        color: "#b900ff"
                      }}
                    >
                      https://github.com/Darkskittlz/GoogleAuth
                      <ExternalLinkIcon mx="2px" />
                    </Link>
                  </ListItem>
                </List>
              </BodyContainer>
            </SimpleGrid>
            <FooterContainer>
              <Footer />
            </FooterContainer>
          </GridContainer>
        </Container>
      </Layout>
    </>
  )
}

export default GoogleAuth;
