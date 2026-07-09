import styled from "@emotion/styled";
import { Image, Text, useColorModeValue, Link } from "@chakra-ui/react";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;

  img {
    padding: 120px;
    border-radius: 10px;
    transition: 200ms ease;
    background: rgb(211, 104, 248);
    background: linear-gradient(
      198deg,
      rgba(211, 104, 248, 0.5406842492401025) 35%,
      rgba(0, 255, 114, 0.4860218698188806) 63%
    );
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.9);

    &:hover img {
      transform: rotate(20deg);
    }
  }
`;

const Logo = () => {
   const footPrintImg = `/images/footprint${useColorModeValue("", "-dark")}.png`;

   return (
      <LogoBox>
         <Image
            src={footPrintImg}
            width={40}
            height={40}
            mb={15}
            mr={10}
            alt="logo"
            style={{
               borderRadius: "20px",
               padding: "5px",
            }}
         />
         <Link color="var(--text-color)" href="/">
            <Text
               color={useColorModeValue("gray.800", "whiteAlpha.900")}
               fontFamily="M PLUS Rounded 1c"
               fontWeight="bold"
               fontSize="25px"
               pb={20}
               width="210px"
               as="samp"
               style={{
                  color: "var(--text-color)",
               }}
            >
               DarkMeow Productions
            </Text>
         </Link>
      </LogoBox>
   );
};

export default Logo;

