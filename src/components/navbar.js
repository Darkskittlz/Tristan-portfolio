import React, { useState } from "react";
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from './logo'
import DarkMode from "./DarkMode.js"
import '../Styles/App.css';
import { Container, Container2, Div1, Div2, Div3, NavLink, SocialIcons, Span } from '../Styles/HeaderStyles';
import { GlobalStyle } from '../Styles/GlobalStyles';
import styled from 'styled-components';
import {
    Box,
    Stack,
    Heading, 
    Flex,
    Menu, 
    MenuItem, 
    MenuList,
    MenuButton,
    IconButton,
    Link,
    useColorModeValue,    
    Image
} from '@chakra-ui/react'

import ResumeIcon from '../assets/images/document.png'
import GithubIcon from '../assets/images/github.svg'
import MenuIcon from "../assets/images/menuIcon.svg"
import Resume from "../assets/resume/TristanResume.pdf"
import {Modal} from "./Modal";


const IconContainer = styled.div`
background-size: 50px 50px;
filter: grayscale(100%);
border: none;
border-radius: 50%;
transition: background-color 0.3s ease-in-out, filter 0.3s ease-in-out;

    img {
        background-color: gray;
        padding: 5px;
        margin-left: -5px;
        margin-right: -5px;
        border-radius: 10px;
        height: 40px;
        width: 35px;
    }
`

const MenuIMG = styled.img`
    width: 25px;
    margin-top:2px;
`

const GridContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 999;
    position: relative;
    border: 1px solid none;
    border-radius: 10px;
    width: 50%;
    backdrop-filter: blur(20px);

	@media (max-width: 960px) {
		flex-direction: column;
        width: 100%;
        backdrop-filter: none;
        margin-left: 50%;
        justify-content: center;
	}
`


const Grid1 = styled.div`
    display: flex;
    width: 100%;
`

const Grid2 = styled.div`
    display: flex;
`


const Navbar = props => {
    const [showModal, setShowModal] = useState(false);
    const { path } = props

    const openModal = () => {
        setShowModal((prev) => !prev);
      };

    return (
        <Container>
            <GridContainer>
                <Grid1>
                    <Container2>
                        <Box
                            bg="none"
                            position="relative"
                            as="nav"
                            w="50%"
                            h="80px"
                            wrap="wrap"
                            zIndex={2}
                            {...props}
                        >
                            <Div1>
                                <Link href="/">
                                    <Heading as="h1" fontSize={"59px"} size="lg">
                                        <Logo />
                                    </Heading>
                                </Link>
                            </Div1>
                        </Box>
                    </Container2>
                </Grid1>

                <Grid2>
                    <Div3>
                        <SocialIcons href="https://github.com/Darkskittlz" target='_blank'>
                            <IconContainer>
                                <img src={GithubIcon} />
                            </IconContainer>
                        </SocialIcons>

                        <SocialIcons>
                            <IconContainer>
                                <Link href={Resume} target='blank'>
                                    <img src={ResumeIcon}/>
                                    <GlobalStyle />
                                </Link>
                            </IconContainer>
                        </SocialIcons>
                        <DarkMode />
                        <Box>
                            <Menu>
                                <MenuButton 
                                    height="42px"
                                    width="42px"
                                    aria-label="Options"
                                    cursor="pointer"
                                    style={{
                                        borderRadius: "10px",
                                        backgroundColor: "var(--text-color)"
                                    }}
                                >
                                    <MenuIMG src={MenuIcon} />
                                </MenuButton>
                                <MenuList >
                                    <Link color="var(--text-color)" href='/'>
                                        <MenuItem as={Link}>Home</MenuItem>
                                    </Link>
                                    <Link color="var(--text-color)" href='/works'>
                                        <MenuItem as={Link}>Works</MenuItem>
                                    </Link>
                                    <Link color="var(--text-color)" href='/posts'>
                                        <MenuItem as={Link}>Blog</MenuItem>
                                    </Link>
                                    {/* <Link color="var(--text-color)" href='/tutorials'>
                                        <MenuItem as={Link}>Tutorials</MenuItem>
                                    </Link> */}
                                </MenuList>
                            </Menu>
                        </Box>
                    </Div3>
                </Grid2>
            </GridContainer>
        </Container>
    )
}

export default Navbar;