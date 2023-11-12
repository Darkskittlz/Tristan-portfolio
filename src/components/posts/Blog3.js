import { Container, Badge, SimpleGrid } from '@chakra-ui/react'
import Layout from '../layouts/article'
import styled from 'styled-components'
import Footer from '../footer'
import ParticleComponent from '../../ParticleBackground3'
import ParticleBackground6 from '../../ParticleBackground6'

const GridContainer = styled.div`
    width: 50%;
    margin-left: 25%;
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
    text-align: left;
    margin-bottom: 35px;
  }
  h2 {
    font-size: 28px;
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
                            borderRadius: "10px",
                            padding: "20px",
                            width: "350px",
                            marginLeft: "-75px"
                          }} 
                        >
                            <TitleContainer>
                                <h1> 🌟  The Tide Of Tech <Badge colorScheme="RED"> 2022</Badge></h1> 
                            </TitleContainer>
                            <BodyContainer>
                                <h1>
                                    The plight of the frontend dev, notwithstanding the shifting seas of technologies we acquaint ourselves with, is one of perseverance, 
                                    discipline, but most of all... collaboration. It takes a team to create something great. For in this lonely profession, there exists in 
                                    every developer the yearning for human connection. The cold keys we so often find ourselves in front of are often unforgiving in their 
                                    criticism of our work: the constant error handling, the writing & re-writing of code that didn't satisfy marketing, or the looming sense 
                                    of imposter syndrome that plunges us all into darkness and doubt. 
                                </h1>
                                <br />
                                <br />
                                <br />
                                <h2>
                                    It is the team, at first, that provides us with the affirmations we need to soldier on. But as time progresses, there comes a point when 
                                    every dev will need to discover their own self-worth and root themselves in it. Thus, we manifest a new perspective of our potential, a way 
                                    of breaking through the impending cloudfront that darkens our desks and monitors. The power of this newfound belief is limitless in its 
                                    capacity to change the way we see our code, our careers, and more importantly our place in the future of this industry. For we must learn 
                                    to flow with the tide of tech.
                                </h2>
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
