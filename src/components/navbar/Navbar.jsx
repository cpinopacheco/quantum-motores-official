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
          <div className="links" data-aos="fade-down" data-aos-duration="1200">
            <div className="linkContainer">
              <NavLink onClick={handleClick} to="/" className="link">
                Inicio
              </NavLink>
            </div>
            <div className="linkContainer">
              <NavLink onClick={handleClick} to="/servicios" className="link">
                Servicios
              </NavLink>
            </div>
            <div className="linkContainer">
              <NavLink onClick={handleClick} to="/contacto" className="link">
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

  .links {
    display: flex;
  }

  .linkContainer {
    border-left: 3px solid var(--secondary-color);
  }

  .linkContainer:first-child {
    border-left: none;
  }

  /* Enlaces */
  .link {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    margin: 0 1.5rem;
    transition: 0.4s;
    position: relative;
  }

  @media (min-width: 992px) {
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
