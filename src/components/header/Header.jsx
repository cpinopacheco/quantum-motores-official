import { styled } from "styled-components";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar></Navbar>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: var(--primary-color);
`;
