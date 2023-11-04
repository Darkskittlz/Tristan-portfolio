import { Image, Text } from '@chakra-ui/react'
import styled, {keyframes} from 'styled-components'

import HTML from "../assets/SkillBadges/html.svg";
import CSS from "../assets/SkillBadges/css.svg";
import Javascript from "../assets/SkillBadges/js.svg";
import React from "../assets/SkillBadges/react.svg";
import Ember from "../assets/SkillBadges/ember.svg";
import Redux from "../assets/SkillBadges/redux.svg";
import Nodejs from "../assets/SkillBadges/nodejs.svg";
import MongoDB from "../assets/SkillBadges/mongodb.svg";
import Postgres from "../assets/SkillBadges/postgres.svg";
import Github from "../assets/SkillBadges/github.svg";
import ThreeJS from "../assets/SkillBadges/threejsBadge.png";
import Solidity from "../assets/SkillBadges/solidity2.png";
import Web3JS from "../assets/SkillBadges/web3.svg";
import { SectionDivider } from '../Styles/GlobalStyles';


const GridContainer = styled.div`
    display: flex;
    justify-items: center;
    flex-direction: column;
    margin-top: 25px;

    h1 {
        font-size: 40px;
    }
`

const TechContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const SkillBadgeAnimation = keyframes`
  0% { box-shadow: 0 0 10px #09EE9A; } 
  30% { box-shadow: 0 0 30px rgba(222, 59, 208, 1);  } 
  50% { box-shadow: 0 0 20px #09DEEE;  } 
  70% { box-shadow: 0 0 30px rgba(102, 37, 177, 1);  } 
  100% { box-shadow: 0 0 30px rgba(102, 37, 177, 1);  } 
`

const SkillBadge = styled.img`
    width: 25%;
    margin-left: 8px;
    margin-bottom: 20px;
    height: 100px;
    width: 100px;
    animation-name: ${SkillBadgeAnimation};
    animation-duration: 4s;
    animation-iteration-count: infinite;
    border-radius: 70px;
    transition: all 0.5s ease;
    padding: 10px;
    &:hover{
      transform: scale(1.2);
    }

    @media (max-width: 960px) {
      height: 55%;
    }
`

const Technologies = () => {
  return (
    <GridContainer>
        <h1>Tech Stack</h1>
            <SectionDivider />
        <TechContainer>
            <SkillBadge src={HTML} />
            <SkillBadge src={CSS} />
            <SkillBadge src={Javascript} />
            <SkillBadge src={React} />
            <SkillBadge src={Redux} />
            <SkillBadge src={Nodejs} />
            <SkillBadge src={MongoDB} />
            <SkillBadge src={Postgres} />
            <SkillBadge src={Github} />
            <SkillBadge src={ThreeJS} />
            <SkillBadge src={Solidity} />
            <SkillBadge src={Web3JS} />
            <SkillBadge src={Ember} />
        </TechContainer>
    </GridContainer>
  )
}

export default Technologies
