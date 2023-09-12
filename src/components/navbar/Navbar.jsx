import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import BurgerButton from "../burgerButton/BurgerButton";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  const handleClick = () => {
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
        <NavLink onClick={handleClick} to="/" className="link">
          Logo
        </NavLink>

        {width < 992 ? (
          <>
            <MobileMenu className={`${clicked ? " active" : ""}`}>
              <div className="linksContainer">
                <NavLink onClick={handleClick} to="/" className="link">
                  Inicio
                </NavLink>
                <NavLink onClick={handleClick} to="/servicios" className="link">
                  Servicios
                </NavLink>
                <NavLink onClick={handleClick} to="/contacto" className="link">
                  Contacto
                </NavLink>
              </div>
            </MobileMenu>
            <div className="burger">
              <BurgerButton clicked={clicked} handleClick={handleClick} />
            </div>
          </>
        ) : (
          <div className="links">
            <NavLink onClick={handleClick} to="/">
              Inicio
            </NavLink>
            <NavLink onClick={handleClick} to="/servicios">
              Servicios
            </NavLink>
            <NavLink onClick={handleClick} to="/contacto">
              Contacto
            </NavLink>
          </div>
        )}
      </NavContainer>
    </>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  height: 100px;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;

  /* cambiar por logo */
  h2 {
    color: #fff;
    font-weight: 600;
  }

  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0 1.5rem;
    border-left: 3px solid var(--secondary-color);
    transition: 0.2s;
  }

  @media (min-width: 992px) {
    a:hover {
      color: var(--secondary-color);
    }
  }

  a:first-child {
    border-left: none;
  }

  .burger {
    @media (min-width: 992px) {
      display: none;
    }
  }
`;

const MobileMenu = styled.aside`
  position: absolute;
  background-color: var(--primary-color);
  top: 100px;
  left: -1000px;
  width: 100%;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  transition: all 0.8s ease;

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
