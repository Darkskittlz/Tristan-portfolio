import '../Styles/App.css';
import styled, { keyframes } from 'styled-components';
import Layout from '../components/layouts/article'
import Section from '../components/section'
import ParticleComponent from '../ParticleBackground2';
import Footer from './footer';
import Intro from './Intro';
import Timeline from './TimeLine';
import { Suspense } from 'react';
import {
	Link,
	Box,
	Heading,
	Image,
	Container,
} from '@chakra-ui/react'
import Technologies from './Technologies';
import { FooterContainer, SectionDivider } from '../Styles/GlobalStyles';
import Planet from './threeJS/Earth';
import ChakraModal from './Modal';
import StarBackground from '../ParticleBackground4';
import OldDesk from './threeJS/OldDesk';
import Totoro from './threeJS/Totoro';
import GalaxyIMG from "../assets/images/Galaxy.png";
import GithubIcon from "../assets/images/logos/github.png";
import WebIcon from "../assets/images/logos/website.jpg";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import GalaxyComponent from "./Galaxy.js"

const GridContainer = styled.div`
  height: 100%;
  width: 50%;
  margin-left: 26%;
  z-index:0;

	@media (max-width: 960px) {
		margin-left: 27px;
		width: 90%;		
	}
`

const GridContainer2 = styled.div`
  width: 100%;
  justify-content: center
	z-index:0;
  margin-top: 20px;
  margin-bottom: 20px;

	@media (max-width: 960px) {
		width: 100%;		
    justify-content: center;
	}
`


const Animation = keyframes`
  0% { box-shadow: 0 0 10px #09EE9A; } 
  30% { box-shadow: 0 0 30px rgba(222, 59, 208, 1);  } 
  50% { box-shadow: 0 0 20px #09DEEE;  } 
  70% { box-shadow: 0 0 30px rgba(102, 37, 177, 1);  } 
  100% { box-shadow: 0 0 30px rgba(102, 37, 177, 1);  } 
`

const HeadingContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	width: 100%;
	flex-direction: column;
	margin-bottom: 10px;
	z-index: 999;
	
	h1 {
		color: var(--text-color);
		font-size: 50px;
		border-radius: 10px;
	}
`


export const PortfolioContainer = styled.div`
	width: 200px;
	margin-top: 10px;
	padding: 40px;
	border-radius: 10px;
	color: var(--text-color);
	box-shadow: 0 0 10px #09EE9A;
	backdrop-filter: blur(40px);
	background: rgb(15,207,188);
	background: linear-gradient(28deg, rgba(15,207,188,1) 0%, rgba(233,89,207,1) 100%);

	h1 {
		font-size: 20px;
	}

	@media screen (max-width: 900px) {
	  margin-left: 20%;
	  height: 200px;
	}
`


const Container2 = styled.div`
  height: 43vh;
  padding: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
	color: var(--text-color);
  border-radius: 20px;
  backdrop-filter: blur(50px);
  animation-name: ${Animation};
  animation-duration: 4s;
  animation-iteration-count: infinite;

  #spanText {
	color: var(--text-color);
    @media (max-width: 960px) {
      display: flex;
      justify-items: flex-start;
      padding-right: 0px;
      padding-left: 0px;
      height: 0vh;
      width: 185px;
      font-size: 20px;
      text-align: center;
    }
  }

  h2 {
    text-align: center;
    padding-top: 10px;
    @media (max-width: 960px) {
      text-align: center;
      font-size: 35px;
      padding-top: 0px;
    }
  }


  h1 {
    font-size: 25px;
  }

  img {
    object-fit: cover;
    width: 420px;
    border-radius: 10px;
  }


  @media (max-width: 960px) {
    height: 75%;
    width: 55%;
    margin-left: 24%;
    justify-content: center;

    img {
      width: 420px;
      margin-top: 10px;
      border-radius: 10px;
      height: 200px;
      object-fit: cover;
    }
  }
    @media (max-width: 930px) {
    height: 75%;
    width: 100%;
    margin-left: 1%;
    justify-content: center;

    img {
      width: 300px;
      height: 100px;
      margin-top: 10px;
      border-radius: 10px;
      object-fit: cover;
    }
  }
`

const IMGContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  grid-gap: 100px;
`


const Homepage = () => {

	return (
		<GridContainer>
			<StarBackground />
			<Layout >

				<Suspense fallback={null}>
					<Planet />
				</Suspense>
				<Section delay={0.1}>
					<Intro />
				</Section>



				<Container className="homePageContainer" >
					<Section delay={0.2}>
						<HeadingContainer>
							<h1>Bio</h1>
							<SectionDivider />
						</HeadingContainer>
						<h1>
							Tristan is a react developer who specializes in the MERN/PERN stack. He enjoys developing frontend user interfaces that prioritize sleek design, integrate background animations, and consume APIs to display interactive information.
							As a blockchain engineer, he enjoys connecting frontend web applications with the blockchain via Web3js.
						</h1>
					</Section>


					<Section delay={0.3}>
						<Heading as="h3" variant="section-title">
							I ❤
						</Heading>
						<h1>Programming,
							<Link
								style={{ color: "#00ccff", textDecoration: "none" }}
								href="https://www.youtube.com/watch?v=J_eNHNsUKPA"
							> Youtube, </Link>
							3D Rendering, Drums, Guitar {' '}
							<Link
								style={{ color: "#42fad0", textDecoration: "none" }}
								href="https://darkmeowfi.netlify.app/"
							>Lofi, </Link> Rock Climbing, Parkour,
							<Link
								style={{ color: "crimson", textDecoration: "none" }}
								href="https://beacons.ai/darkskittlz"
							> Cosplay, </Link>
							Skateboarding,
						</h1>
					</Section>

					<br />

					<Section delay={0.4}>
						<Heading as="h2" variant="section-title">
							Portofolio Inspiration
						</Heading>
						<h1>{' '}
							<Link
								href="https://www.craftz.dog/"
								style={{
									textDecoration: "none",
									color: "green"
								}}>Takuyama Matsuyama </Link>
						</h1>
						<br />
						<Heading as="h2" variant="section-title">
							Totoro Model
						</Heading>
						<h1>{' '}
							<Link
								href="https://www.cgtrader.com/jkielr"
								style={{
									textDecoration: "none",
									color: "#ff00d5"
								}}>Jesse Ragos</Link>
						</h1>
						<br />
						<Heading as="h2" variant="section-title">
							Planet Model
						</Heading>
						<h1>{' '}
							<Link
								href="https://sketchfab.com/ThomasKole"
								style={{
									textDecoration: "none",
									color: "#FF3E33"
								}}>Thomas Kole</Link>
						</h1>
						<br />
					</Section>

					<Section delay={0.5}>
						<Technologies />
					</Section>

					<Section delay={0.6}>
						<GridContainer2>
							<Container2>
								<Heading as="h2" variant="section-title" style={{ textAlign: "center" }}>
									Galaxy Generator
								</Heading>
								<img src={GalaxyIMG} alt="Galaxy IMG" />
								<IMGContainer>
									<h1>{' '}
										<Link
											href="https://github.com/Darkskittlz/Galaxy-Generator"
											target="blank"
											style={{
												textDecoration: "none",
												color: "#bb800c",
												textAlign: "center"
											}}>
											<img
												src={GithubIcon}
												style={{
													marginTop: "17px",
													height: "50px",
													width: "50px"
												}}
												alt="github"
											/>
										</Link>
									</h1>
									<h1>{' '}
										<Link
											href="https://dark-galaxy-generator.netlify.app/"
											target="blank"
											style={{
												textDecoration: "none",
												textAlign: "center",
											}}>
											<img
												src={WebIcon}
												alt="Website Icon"
												style={{
													height: "50px",
													width: "50px",
													marginTop: "20px",
													borderRadius: "50px"
												}}
											/>
										</Link>
									</h1>
								</IMGContainer>
							</Container2>
						</GridContainer2>
					</Section>

					<Section delay={0.7}>
						<Box align="center" my={4}>
							<Link href="/works" style={{ textDecoration: "none" }}>
								<PortfolioContainer>
									<h1>My Portfolio</h1>
								</PortfolioContainer>
							</Link>
						</Box>
					</Section>

					<Section delay={0.8}>
						<Timeline />
					</Section>

					<Section delay={0.9}>
						<ChakraModal />
					</Section>

				</Container>
			</Layout>
			<FooterContainer>
				<Footer />
			</FooterContainer>
		</GridContainer>
	);
};

export default Homepage;
