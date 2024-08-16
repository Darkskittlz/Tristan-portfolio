import { Suspense } from 'react'
import Section from './section'
import Layout from './layouts/article'
import styled from 'styled-components'
import ParticleComponent from '../ParticleBackground4'
import Footer from './footer'
import '../Styles/App.css';
import {
  SimpleGrid,
  LinkOverlay,
  Container,
  Heading,
  Text,
  LinkBox,
  Image,
  Box
} from '@chakra-ui/react'
import { FooterContainer, SectionDivider } from '../Styles/GlobalStyles'
import StarBackground2 from '../ParticleBackground5'
import CyberPunkModel from './threeJS/CyberpunkDesk'
import ScrollAnimation from "../assets/images/ThreeJS/scrollAnimation.png"
import GalaxyIMG from "../assets/images/Galaxy.png";
import ThreejsPortfolio from '../assets/images/ThreeJS/threeJSPortfolio.png'
import GalaxyComponent from "./Galaxy.js"


const GridContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  margin-left: 25%;
  margin-top: 3%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 960px) {
      width: 80%;
      margin-left: 10%;
      display: flex;
  }
`

const FooterContainer2 = styled.div`
	width: 100%;
	display: flex;

	@media (max-width: 960px) {
		margin-left: 18px;
	}
`

const Grid2Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  flex-wrap: wrap;
  grid-gap: 10px;
  justify-content: center;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 20px rgba(80, 78, 78, 0.9);

@media only screen and (min-width: 270px) and (max-width: 1160px) {
    grid-template-columns: 1fr;
    grid-gap: 0px;
    display: flex;
    padding: 0px;
  }
`


const ThreeJS = props => {
  return (
    <>
      <StarBackground2 />
      <GridContainer>
        <Layout>
          <Suspense fallback={null}>
            <CyberPunkModel />
          </Suspense>
          <Container className="homePageContainer">
            <Heading as="h2" size="lg" fontSize="80px" mb={14}>
              ThreeJS Journey
              <SectionDivider />
            </Heading>

            <Grid2Container>
              <Box style={{ marginTop: "20px" }}>
                <Section>
                  <LinkBox cursor='pointer'>
                    <Container className="projectContainer">
                      <Image
                        fit="cover"
                        src={ScrollAnimation}
                        alt="ScrollAnimation"
                        className="projectThumbnail2"
                        placeholder="blur"
                        loading="lazy"
                      />
                    </Container>
                    <LinkOverlay href={`ThreeJS/ScrollAnimation`}>
                      <Text
                        style={{
                          color: "var(--text-color)",
                          textDecoration: "inherit",
                          textAlign: "center",
                        }}
                        fontSize={20}
                      >Scroll Animation</Text>
                    </LinkOverlay>
                  </LinkBox>
                </Section>
              </Box>
              <Box>
                <Section delay={0.1}>
                  <LinkBox cursor='pointer'>
                    <Container className="projectContainer">
                      <Image
                        fit="cover"
                        src={GalaxyIMG}
                        alt="Galaxy IMG"
                        className="projectThumbnail2"
                        placeholder="blur"
                        loading="lazy"
                      />
                    </Container>
                    <LinkOverlay href={`works/Galaxy`}>
                      <Text
                        style={{
                          color: "var(--text-color)",
                          textDecoration: "inherit",
                          textAlign: "center",
                          marginTop: "20px"
                        }}
                        fontSize={20}
                      >Galaxy Generator</Text>
                    </LinkOverlay>
                  </LinkBox>
                </Section>
              </Box>
              <Box>
                <Section delay={0.2}>
                  <LinkBox cursor='pointer'>
                    <Image
                      fit="cover"
                      src={ThreejsPortfolio}
                      alt="ThreeJS Portfolio Project"
                      className="projectThumbnail2"
                      placeholder="blur"
                      loading="lazy"
                    />
                    <LinkOverlay href={`works/ThreejsPortfolio`}>
                      <Text
                        style={{
                          color: "var(--text-color)",
                          textDecoration: "inherit",
                          textAlign: "center",
                          marginTop: "20px"
                        }}
                        fontSize={20}
                      >ThreeJS Portfolio</Text>
                    </LinkOverlay>
                  </LinkBox>
                </Section>
              </Box>
            </Grid2Container>
            <FooterContainer2>
              <Footer />
            </FooterContainer2>
          </Container>
        </Layout>
      </GridContainer>
    </>
  )
}

export default ThreeJS;

