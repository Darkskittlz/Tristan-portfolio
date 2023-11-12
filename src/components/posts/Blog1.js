import { Container, Badge, SimpleGrid } from '@chakra-ui/react'
import Layout from '../layouts/article'
import styled from 'styled-components'
import Footer from '../footer'
import ParticleComponent from '../../ParticleBackground3'
import ParticleBackground6 from '../../ParticleBackground6'

const GridContainer = styled.div`
    width: 50%;
    margin-left: 25%;
    z-index: 3;
`

const GridOverlay = styled.div`
    z-index: 2;
    position: relative;
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
        font-size: 28px;
        text-indent: 30px;
        text-align: left;
    }
`

export const FooterContainer = styled.div`
    display: flex;
    width: 100%;
`


const BlogPost = props => {
    return (
        <>
          <ParticleBackground6 />
            <GridOverlay>
                <Layout>
                    <Container maxW='2x1'>
                        <GridContainer>
                            <SimpleGrid 
                              columns={[1, 1, 1]} 
                              gap={10}
                              style={{
                                marginTop: "60px", 
                                justifyItems: "center",
                                backdropFilter: "blur(25px)",
                                padding: "20px",
                                borderRadius: "10px",
                                width: "350px",
                                zIndex: "50px",
                                marginLeft: "-75px"
                              }} 
                            >
                                <TitleContainer>
                                    <h1> 🌟  From E-Boy To Engineer <Badge colorScheme="blue"> 2022</Badge></h1> 
                                </TitleContainer>
                                <BodyContainer>
                                        <h1>
                                            The Pandemic had just struck Japan in April of 2020. 
                                            I was currently living in Japan at the time with my Fiance, and 
                                            we were both teaching English and cosplaying. I was also working at a bar in downtown Osaka. 
                                        </h1>
                                    <br />
                                    <br />
                                        <h1>
                                            However, once Japan started shutting down we had to decide to stay through the onset of the pandemic, 
                                            or fly home before lockdown. We decided to fly home, but as soon as I got back I wanted more than anything
                                            to build a career that would allow me to make regular trips back to Japan. That's when I decided to learn how to code.
                                        </h1>
                                    <br />
                                    <br />
                                        <h1>
                                            I immediately stumbled upon FreeCodeCamp and CodeAcademy, and thus began my journey learning 
                                            HTML, CSS, and JS. Before I knew it, I was making websites for my friends and family for fun. I was still involved in cosplaying,
                                            and making videos for TikTok and instagram. But I also poured time and energy into developing a skill set that has allowed me 
                                            to launch my own freelance company.    
                                        </h1>
                                </BodyContainer>
                            </SimpleGrid>
                            <FooterContainer>
                                <Footer />
                            </FooterContainer>
                        </GridContainer>
                    </Container>
                </Layout>
            </GridOverlay>
        </>
    )
}

export default BlogPost;
