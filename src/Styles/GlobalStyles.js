import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Arial', sans-serif;
    }
`;

export const SectionDivider = styled.div`
  width: 10%;
  height: 6px;
  margin-top: 8px;
  margin-left: 2px;
  border-radius: 10px;
  background: ${(props) => props.colorAlt ? 
    'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' :
    'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};



`