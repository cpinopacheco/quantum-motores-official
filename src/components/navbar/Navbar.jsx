import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import BurgerButton from "../burgerButton/BurgerButton";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  const isClicked = () => {
    setClicked(!clicked);
  };

  const setWidthScreen = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setWidthScreen);

    return () => {
      window.removeEventListener("resize", setWidthScreen);
    };
  }, [width]);

  return (
    <>
      <NavContainer>
        {width < 1200 ? (
          <>
            <MobileMenu className={`${clicked ? " active" : ""}`}>
              <div className="linksContainer">
                <NavLink onClick={isClicked} to="/" className="link">
                  Inicio
                </NavLink>
                <NavLink onClick={isClicked} to="/servicios" className="link">
                  Servicios
                </NavLink>
                <NavLink onClick={isClicked} to="/contacto" className="link">
                  Contacto
                </NavLink>
              </div>
            </MobileMenu>
            <div className="burger">
              <BurgerButton clicked={clicked} handleClick={isClicked} />
            </div>
          </>
        ) : (
          <div className="links" data-aos="fade-down" data-aos-duration="1200">
            <div className="linkContainer">
              <NavLink onClick={isClicked} to="/" className="link">
                Inicio
              </NavLink>
            </div>
            <div className="linkContainer">
              <NavLink onClick={isClicked} to="/servicios" className="link">
                Servicios
              </NavLink>
            </div>
            <div className="linkContainer">
              <NavLink onClick={isClicked} to="/contacto" className="link">
                Contacto
              </NavLink>
            </div>
          </div>
        )}
      </NavContainer>
    </>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  .links {
    display: flex;
    font-size: 0.9rem;
  }

  .linkContainer {
    border-left: 1px solid var(--secondary-color);
  }

  .linkContainer:first-child {
    border-left: none;
  }

  .link {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    margin: 0 1.5rem;
    transition: 0.4s;
    position: relative;
    letter-spacing: 1px;
  }

  @media (min-width: 1200px) {
    .link:hover {
      color: var(--secondary-color);
    }

    .link::before {
      content: "";
      width: 0;
      height: 2px;
      border-radius: 2px;
      background-color: var(--secondary-color);
      position: absolute;
      bottom: -0.25rem;
      right: 0;
      transition: right 0.4s, width 0.4s, left 0.4s;
    }

    .link:hover::before {
      width: 100%;
      left: 0;
    }
  }

  .burger {
    @media (min-width: 1200px) {
      display: none;
    }
  }
`;

const MobileMenu = styled.aside`
  position: absolute;
  background-color: var(--primary-color);
  top: 95px;
  left: -1000px;
  width: 100%;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  transition: all 0.8s ease-in-out;

  &.active {
    left: 0;
    width: 100%;
  }

  .linksContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    flex-direction: column;
    margin-top: -50px;
  }

  .link {
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    margin: 1rem 0;
    text-transform: uppercase;
    border: none;
  }
`;
