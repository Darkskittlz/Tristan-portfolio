import styled, { keyframes } from 'styled-components';



export const Animation = keyframes`
0% { box-shadow: 0 0 10px #09EE9A; } 
30% { box-shadow: 0 0 30px rgba(222, 59, 208, 1);  } 
50% { box-shadow: 0 0 20px #09DEEE;  } 
70% { box-shadow: 0 0 30px rgba(102, 37, 177, 1);  } 
100% { box-shadow: 0 0 30px rgba(102, 37, 177, 1);  } 
`

export const Container1 = styled.div`
  height: 20vh;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`

export const Container2 = styled.div`
    height: 25vh;
    width: 450px;
    padding: 20px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    border-radius: 20px;
    backdrop-filter: blur(50px);
    animation-name: ${Animation};
    animation-duration: 4s;
    animation-iteration-count: infinite;
    background: rgb(223,0,135);
    background: linear-gradient(196deg, rgba(223,0,135,0.5879511443661971) 0%, rgba(113,0,146,0.39640184859154926) 18%, rgba(0,0,249,0.2809088908450704) 38%, rgba(0,251,119,0.4611905809859155) 60%, rgba(0,212,255,0.6499229753521127) 100%);background: rgb(246,123,177);
    background: linear-gradient(28deg, rgba(246,123,177,1) 0%, rgba(102,168,245,1) 100%);

    #spanText {
      color: white;
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

    @media (max-width: 960px) {
      width: 100%;
      height: 22vh;
    }
`
export const Container3 = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 25px;
  }

  img {
    object-fit: cover;
    width: 120px;
    height: 120px;
  }
`
