import { styled } from "styled-components";
import Navbar from "../navbar/Navbar";
import { useEffect, useState } from "react";

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
      <Navbar></Navbar>
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
  &.active {
    box-shadow: 0px -10px 20px var(--tertiary-color);
  }
`;
