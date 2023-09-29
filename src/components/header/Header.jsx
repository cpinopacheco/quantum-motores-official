import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import logo from "../header/assets/white-logo.svg";

const Header = () => {
  const [onScroll, setOnScroll] = useState(false);

  const watchScroll = () => {
    window.scrollY >= 80 ? setOnScroll(true) : setOnScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", watchScroll);

    return () => {
      window.removeEventListener("scroll", watchScroll);
    };
  }, [onScroll]);

  return (
    <HeaderContainer className={`${onScroll ? "active" : ""} `}>
      <ItemsContainer>
        <NavLink to="/" className="link">
          <Logo src={logo} alt="Logo Quantum Motores" />
        </NavLink>
        <Navbar></Navbar>
      </ItemsContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: var(--primary-color);
  position: sticky;
  top: 0;
  width: 100%;
  transition: 0.2s;
  z-index: 3;

  &.active {
    box-shadow: 0px -10px 20px var(--tertiary-color);
  }
`;

const ItemsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
`;

const Logo = styled.img`
  width: 10rem;
`;
