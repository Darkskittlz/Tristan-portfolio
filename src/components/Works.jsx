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
import DarkMeowShop from "../assets/images/works/DarkMeowThumb.png"
import Lofi from "../assets/images/lofi.png"
import Model from "../assets/images/model.png"
import Portrait from './threeJS/alice'
import SPA from "../assets/images/works/SPA.png"
import StarBackground2 from '../ParticleBackground5'
import UkraineMap from "../assets/images/works/ukraineMap.png"
import Vue from "../assets/images/works/Vue.png"
import Wednesday from "../assets/images/works/Wednesday.png"
import WeatherIMG from "../assets/images/works/Weather2.png"
import EmberIMG from "../assets/images/EmberThumb.png";
import GalaxyIMG from "../assets/images/Galaxy.png";
import StarboardIMG from "../assets/images/Starboard.jpg"
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

  @media and (max-width: 1620px) {
    grid-gap: 0px;
    display: flex;
    padding: 0px;
  }
`


const Works = props => {
  return (
    <>
      <StarBackground2 />
      <GridContainer>
        <Layout>
          <Suspense fallback={null}>
            <Portrait />
          </Suspense>
          <Container className="homePageContainer">
            <Heading as="h2" size="lg" fontSize="80px" mb={14}>
              Works
              <SectionDivider />
            </Heading>

            <Grid2Container>
              <Box>
                <Section>
                  <LinkBox cursor='pointer'>
                    <Container className="projectContainer">
                      <Image
                        fit="cover"
                        src={StarboardIMG}
                        alt="Starboard Cruises"
                        className="projectThumbnail"
                        placeholder="blur"
                        loading="lazy"
                      />
                    </Container>
                    <LinkOverlay href={`works/Starboard`}>
                      <Text
                        style={{
                          color: "var(--text-color)",
                          textDecoration: "inherit",
                          textAlign: "center",
                          marginTop: "10px"
                        }}
                        fontSize={20}
                      >Starboard SPA</Text>
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
                        className="projectThumbnail"
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
                          marginTop: "10px"
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
                    <Container className="projectContainer">
                      <Image
                        fit="cover"
                        src={Model}
                        alt="DarkMeow Shop"
                        className="projectThumbnail"
                        placeholder="blur"
                        loading="lazy"
                      />
                    </Container>
                    <LinkOverlay href={`works/ModelPortfolio`}>
                      <Text
                        style={{
                          color: "var(--text-color)",
                          textDecoration: "inherit",
                          textAlign: "center",
                          marginTop: "10px"
                        }}
                        fontSize={20}
                      >Model Portfolio</Text>
                    </LinkOverlay>
                  </LinkBox>
                </Section>
              </Box>
              <Box>
                <Section delay={0.3}>
                  <LinkBox cursor='pointer'>
                    <Container className="projectContainer">
                      <Image
                        fit="cover"
                        src={DarkMeowShop}
                        alt="DarkMeow Shop"
                        className="projectThumbnail"
                        placeholder="blur"
                        loading="lazy"
                      />
                    </Container>
                    <LinkOverlay href={`works/DarkMeowShop`}>
                      <Text
                        style={{
                          color: "var(--text-color)",
                          textDecoration: "inherit",
                          textAlign: "center",
                          marginTop: "10px"
                        }}
                        fontSize={20}
                      >DarkMeow Shop</Text>
                    </LinkOverlay>
                  </LinkBox>
                </Section>
              </Box>
              <Box>
                <Section delay={0.4}>
                  <LinkBox cursor='pointer'>
                    <Container className="projectContainer">
                      <Image
                        fit="cover"
                        src={Lofi}
                        alt="Lofi Site"
                        className="projectThumbnail"
                        placeholder="blur"
                        loading="lazy"
                      />
                    </Container>
                    <LinkOverlay href={`works/Lofi`}>
                      <Text
                        style={{
                          color: "var(--text-color)",
                          textDecoration: "inherit",
                          textAlign: "center",
                          marginTop: "10px"
                        }}
                        fontSize={20}
                      >Lofi Station</Text>
                    </LinkOverlay>
                  </LinkBox>
                </Section>
              </Box>
              <Box>
                <Section delay={0.5}>
                  <LinkBox cursor='pointer'>
                    <Container className="projectContainer">
                      <Image
                        fit="cover"
                        src={EmberIMG}
                        alt="Lofi Site"
                        className="projectThumbnail"
                        placeholder="blur"
                        loading="lazy"
                      />
                    </Container>
                    <LinkOverlay href={`works/Ember`}>
                      <Text
                        style={{
                          color: "var(--text-color)",
                          textDecoration: "inherit",
                          textAlign: "center",
                          marginTop: "10px"
                        }}
                        fontSize={20}
                      >EmberJS</Text>
                    </LinkOverlay>
                  </LinkBox>
                </Section>
              </Box>
              <Box>
                <Section delay={0.6}>
                  <LinkBox cursor='pointer'>
                    <Container className="projectContainer">
                      <Image
                        fit="cover"
                        src={Wednesday}
                        alt="AliceMeowz Project"
                        className="projectThumbnail"
                        placeholder="blur"
                        loading="lazy"
                      />
                    </Container>
                    <LinkOverlay href={`works/Wednesday`}>
                      <Text
                        style={{
                          color: "var(--text-color)",
                          textDecoration: "inherit",
                          textAlign: "center",
                          marginTop: "10px"
                        }}
                        fontSize={20}
                      >Wednesday</Text>
                    </LinkOverlay>
                  </LinkBox>
                </Section>
              </Box>

              <Box>
                <Section delay={0.7}>
                  <LinkBox cursor='pointer'>
                    <Image
                      fit="cover"
                      src={SPA}
                      alt="SPA Portfolio"
                      className="projectThumbnail"
                      placeholder="blur"
                      loading="lazy"
                    />
                    <LinkOverlay href={`works/SPAPortfolio`}>
                      <Text
                        style={{
                          color: "var(--text-color)",
                          textDecoration: "inherit",
                          textAlign: "center",
                          marginTop: "10px"
                        }}
                        fontSize={20}
                      >SPA Portfolio</Text>
                    </LinkOverlay>
                  </LinkBox>
                </Section>
              </Box>

              <Box>
                <Section delay={0.8}>
                  <LinkBox cursor='pointer'>
                    <Image
                      fit="cover"
                      src="/images/works/bg (1).png"
                      alt="Backgrounds Project"
                      className="projectThumbnail"
                      placeholder="blur"
                      loading="lazy"
                    />
                    <LinkOverlay href={`works/Backgrounds`}>
                      <Text
                        style={{
                          color: "var(--text-color)",
                          textDecoration: "inherit",
                          textAlign: "center",
                          marginTop: "10px"
                        }}
                        fontSize={20}
                      >Backgrounds</Text>
                    </LinkOverlay>
                  </LinkBox>
                </Section>
              </Box>

              <Box>
                <Section delay={0.9}>
                  <LinkBox cursor='pointer'>
                    <Image
                      fit="cover"
                      src="/images/works/bandingo.png"
                      alt="Bandingo Project"
                      className="projectThumbnail"
                      placeholder="blur"
                      loading="lazy"
                    />
                    <LinkOverlay href={`works/Bandingo`}>
                      <Text
                        style={{
                          color: "var(--text-color)",
                          textDecoration: "inherit",
                          textAlign: "center",
                          marginTop: "10px"
                        }}
                        fontSize={20}
                      >Bandingo</Text>
                    </LinkOverlay>
                  </LinkBox>
                </Section>
              </Box>

              <Box>
                <Section delay={1.0}>
                  <LinkBox cursor='pointer'>
                    <Image
                      fit="cover"
                      src="/images/works/devShop.png"
                      alt="Collab Project"
                      className="projectThumbnail"
                      placeholder="blur"
                      loading="lazy"
                    />
                    <LinkOverlay href={`works/Collab`}>
                      <Text
                        style={{
                          color: "var(--text-color)",
                          textDecoration: "inherit",
                          textAlign: "center",
                          marginTop: "10px"
                        }}
                        fontSize={20}
                      >Collaboration</Text>
                    </LinkOverlay>
                  </LinkBox>
                </Section>
              </Box>

              <Box>
                <Section delay={1.1}>
                  <LinkBox cursor='pointer'>
                    <Image
                      fit="cover"
                      src="/images/works/DarkMeowFi.png"
                      alt="DarkMeowFI Project"
                      className="projectThumbnail"
                      placeholder="blur"
                      loading="lazy"
                    />
                    <LinkOverlay href={`works/DarkMeowFi`}>
                      <Text
                        style={{
                          color: "var(--text-color)",
                          textDecoration: "inherit",
                          textAlign: "center",
                          marginTop: "10px"
                        }}
                        fontSize={20}
                      >DarkMeowFI</Text>
                    </LinkOverlay>
                  </LinkBox>
                </Section>
              </Box>


              <Box>
                <Section delay={1.2}>
                  <LinkBox cursor='pointer'>
                    <Image
                      fit="cover"
                      src="/images/works/zenitsuThumb.png"
                      alt="E-Commerce Project"
                      className="projectThumbnail"
                      placeholder="blur"
                      loading="lazy"
                    />
                    <LinkOverlay href={`works/ECommerce`}>
                      <Text
                        style={{
                          color: "var(--text-color)",
                          textDecoration: "inherit",
                          textAlign: "center",
                          marginTop: "10px"
                        }}
                        fontSize={18}
                      >E-Commerce Project</Text>
                    </LinkOverlay>
                  </LinkBox>
                </Section>
              </Box>


              <Box>
                <Section delay={1.3}>
                  <LinkBox cursor='pointer'>
                    <Image
                      fit="cover"
                      src="/images/works/apmusic.png"
                      alt="Aidan Paul Project"
                      className="projectThumbnail"
                      placeholder="blur"
                      loading="lazy"
                    />
                    <LinkOverlay href={`works/APMusic`}>
                      <Text
                        style={{
                          color: "var(--text-color)",
                          textDecoration: "inherit",
                          textAlign: "center",
                          marginTop: "10px"
                        }}
                        fontSize={18}
                      >Aidan Paul Project</Text>
                    </LinkOverlay>
                  </LinkBox>
                </Section>
              </Box>

              <Box>
                <Section delay={1.4}>
                  <LinkBox cursor='pointer'>
                    <Container className="projectContainer">
                      <Image
                        fit="cover"
                        src={Vue}
                        alt="Ukraine Map"
                        className="projectThumbnail"
                        placeholder="blur"
                        loading="lazy"
                      />
                    </Container>
                    <LinkOverlay href={`works/Vue`}>
                      <Text
                        style={{
                          color: "var(--text-color)",
                          textDecoration: "inherit",
                          textAlign: "center",
                          marginTop: "10px"
                        }}
                        fontSize={20}
                      >VueX Product Page</Text>
                    </LinkOverlay>
                  </LinkBox>
                </Section>
              </Box>
              <Box>
                <Section delay={1.5}>
                  <LinkBox cursor='pointer'>
                    <Container className="projectContainer">
                      <Image
                        fit="cover"
                        src={WeatherIMG}
                        alt="Ukraine Map"
                        className="projectThumbnail"
                        placeholder="blur"
                        loading="lazy"
                      />
                    </Container>
                    <LinkOverlay href={`works/WeatherApp`}>
                      <Text
                        style={{
                          color: "var(--text-color)",
                          textDecoration: "inherit",
                          textAlign: "center",
                          marginTop: "10px"
                        }}
                        fontSize={20}
                      >Weather</Text>
                    </LinkOverlay>
                  </LinkBox>
                </Section>
              </Box>
              <Box>
                <Section delay={1.6}>
                  <LinkBox cursor='pointer'>
                    <Container className="projectContainer">
                      <Image
                        fit="cover"
                        src={UkraineMap}
                        alt="Ukraine Map"
                        className="projectThumbnail"
                        placeholder="blur"
                        loading="lazy"
                      />
                    </Container>
                    <LinkOverlay href={`works/UkraineMap`}>
                      <Text
                        style={{
                          color: "var(--text-color)",
                          textDecoration: "inherit",
                          textAlign: "center",
                          marginTop: "10px"
                        }}
                        fontSize={20}
                      >Ukraine Leaflet</Text>
                    </LinkOverlay>
                  </LinkBox>
                </Section>
              </Box>
              <Box>
                <Section delay={1.7}>
                  <LinkBox cursor='pointer'>
                    <Image
                      fit="cover"
                      src="/images/works/ThreeJSPortfolio.png"
                      alt="ThreeJS Portfolio Project"
                      className="projectThumbnail"
                      placeholder="blur"
                      loading="lazy"
                    />
                    <LinkOverlay href={`works/ThreejsPortfolio`}>
                      <Text
                        style={{
                          color: "var(--text-color)",
                          textDecoration: "inherit",
                          textAlign: "center",
                          marginTop: "10px"
                        }}
                        fontSize={20}
                      >ThreeJS Portfolio</Text>
                    </LinkOverlay>
                  </LinkBox>
                </Section>
              </Box>
              <br />
              <Box>
                <Section delay={1.8}>
                  <LinkBox cursor='pointer'>
                    <Image
                      fit="cover"
                      src="/images/works/4.png"
                      alt="Matias Sanes Project"
                      className="projectThumbnail"
                      placeholder="blur"
                      loading="lazy"
                    />
                    <LinkOverlay href={`works/MatiasSanes`}>
                      <Text
                        style={{
                          color: "var(--text-color)",
                          textDecoration: "inherit",
                          textAlign: "center",
                          marginLeft: "10px",
                          marginTop: "10px"
                          ,
                        }}
                        fontSize={20}
                      >Matias Sanes Project</Text>
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

export default Works;
