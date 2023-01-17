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
import { SectionDivider } from '../Styles/GlobalStyles';
import Totoro from './threeJS/Totoro';
import ChakraModal from './Modal';
import StarBackground from '../ParticleBackground4';



const GridContainer = styled.div`
    height: 100%;
    width: 50%;
    margin-left: 26%;
	z-index:0;

	@media (max-width: 960px) {
		margin-left: 34px;
		width: 90%;		
	}
`


const FooterContainer = styled.div`
    display: flex;
    width: 100%;

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
	backdrop-filter: blur(100px);
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




const Homepage = () => {

	return (
		<GridContainer>
			<StarBackground />
			<Layout >

				<Suspense fallback={null}>
					<Totoro />
				</Suspense>


				<Section delay={0.1}>
					<Intro />
				</Section>

				<Container className="homePageContainer" >
					<Section delay={0.2}>
						<HeadingContainer>
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
							3D Model Totoro
						</Heading>
						<h1>{' '}
							<Link
								href="https://www.cgtrader.com/jkielr"
								style={{
									textDecoration: "none",
									color: "#ff00d5"
								}}>Jesse Ragos</Link>
						</h1>
					</Section>

					<Section delay={0.5}>
						<Technologies />
					</Section>

					<Section delay={0.6}>
						<Box align="center" my={4}>
							<Link href="/works" style={{ textDecoration: "none" }}>
								<PortfolioContainer>
									<h1>My Portfolio</h1>
								</PortfolioContainer>
							</Link>
						</Box>
					</Section>

					<Section delay={0.7}>
						<Timeline />
					</Section>

					<Section delay={0.8}>
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
