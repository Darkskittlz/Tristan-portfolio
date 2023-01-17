import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  padding-top: 2rem;
  justify-content: center;
  z-index: 1;
`;

export const Container2 = styled.div`
  z-index: 1;
  borderRadius: "10px",
  width: "100%",
  backgroundColor:('#ffffff40', '#20202380'),
  flexDirection: "column",
  display: "flex"
`;

export const Span = styled.span`
  font-size: 3rem;
`

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  z-index: 1;

`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-between;
  z-index: 1;
`;
export const Div3 = styled.div`
  grid-area: auto;
  display: flex;
  align-content: center;
  z-index: 1;
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  margin-left: 10px;
  margin-right: 10px;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }

`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

`;


// Social Icons 

export const SocialIcons = styled.a`
    transition: 0.3s ease;
    color: white;
    border-radius: 50px;
    padding: 5px;
    margin-left: 7px;
    margin-right: 10px;
    &:hover {
        background-color: none;
        transform: scale(1.2);
        cursor: pointer;
      }
`