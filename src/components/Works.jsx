import { Suspense } from 'react'
import Section from './section'
import Layout from './layouts/article'
import styled from 'styled-components'
import ParticleComponent from '../ParticleBackground3'
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

import Wednesday from "../assets/images/works/Wednesday.png"
import SPA from "../assets/images/works/SPA.png"
import UkraineMap from "../assets/images/works/ukraineMap.png"
import Lofi from "../assets/images/lofi.png"
import Breezeline from "../assets/images/works/breezeline.png"
import { FooterContainer, SectionDivider } from '../Styles/GlobalStyles'
import Totoro from './threeJS/Totoro'
import CyberPunkModel from './threeJS/CyberpunkDesk'
import OldDesk from './threeJS/OldDesk'
import Portrait from './threeJS/alice'
import StarBackground2 from '../ParticleBackground5'


const GridContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
    margin-left: 25%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 960px) {
        width: 90%;
        margin-left: 5%;
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
    display: flex;
    flex-wrap: wrap;
    grid-gap: 10px;
    justify-content: center;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 20px rgba(80, 78, 78, 0.9);

    @media and (max-width: 960px) {
        grid-gap: 22px;
        padding: 0px;
        grid-gap: 0px;
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
                                <Section delay={0.2}>
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
                                <Section delay={0.3}>
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
                                        <LinkOverlay href={`works/UkraineMap`}>
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
                                <Section delay={0.4}>
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
                                <Section delay={0.5}>
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
                                <Section delay={0.6}>
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
                                <Section delay={0.7}>
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
                                <Section delay={0.8}>
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
                                <Section delay={0.9}>
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
                                <Section delay={1}>
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
                                <Section delay={1.1}>
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
                                <Section delay={1.2}>
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

                            <Box>
                                <Section delay={1.3}>
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