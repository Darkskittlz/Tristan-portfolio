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
import CatGirlComponent from "../threeJS/WaifuModel"



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


const PortraitContainer = styled.div`
  border-radius: 10px;
  margin: 10px;
  margin-bottom: 20px;
  backdrop-filter: blur(50px);
  animation-name: ${Animation};
  animation-duration: 4s;
  animation-iteration-count: infinite;
`

const ImageContainer = styled.div`
    animation-name: ${Animation},
    animation-duration: 4s;
    animation-iteration-count: infinite;
`

const Waifu = props => {
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
                    src="/images/works/Waifu.png"
                    style={{
                      boxShadow: "0 0 40px rgb(255,0,0)",
                      borderRadius: "10px",
                      padding: "0px",
                      width: "125px",
                      objectFit: "cover"
                    }}
                  />
                </ImageContainer>
                <h1><Badge colorScheme="blue"> Waifu Model</Badge></h1>
              </TitleContainer>
              <br />

              <PortraitContainer>
                <div className='flex  backdrop-blur flex-col border-1 pt-6 w-56 rounded-xl items-center justify-center'>
                  <CatGirlComponent />
                </div>
              </PortraitContainer>

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

export default Waifu;

