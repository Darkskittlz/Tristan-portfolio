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
        text-indent: 30px;
        text-align: left;
    }

    a {
        text-decoration: none;
        color: blue;
        font-size: 25px;
    }
`

export const FooterContainer = styled.div`
    display: flex;
    width: 100%; 

    @media (max-width: 960px) {
        justify-content: center;
        margin-left: 29%;
    }
`


const BlogPost2 = props => {
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
                                marginTop: "10px", 
                                justifyItems: "center",
                                backdropFilter: "blur(25px)",
                                padding: "20px",
                                borderRadius: "10px"
                            }} 
                        >
                            <TitleContainer>
                                <h1> 🌟  GraphQL <Badge colorScheme="blue"> 2022</Badge></h1> 
                            </TitleContainer>
                            <BodyContainer>
                                Fetching Data from GraphQL has been an interesting learning curve. 
                                I would highly recommend starting with learning the Apollo/client and 
                                instantiating your first client to wrap your root component in App.js.
                                Linked below is the official site 
                                <br />
                                <br />
                                <a href="https://www.apollographql.com/tutorials/">ApolloGraphQL\Tutorials</a>

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

export default BlogPost2;