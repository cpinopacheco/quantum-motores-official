import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import ScrollToTopButton from "../scrollTopButton/ScrollToTopButton";
import logo from "../footer/assets/logo-vertical.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <ItemsContainer>
        <Link to="/">
          <Logo src={logo} alt="Logo Quantum Motores" />
        </Link>
        <ContactContainer>
          <Link
            to="tel:+56982113710"
            title="Teléfono"
            className="link"
            target="_blank"
          >
            <FontAwesomeIcon icon={faPhone} />
            <span>+ 56 9 821 13 710</span>
          </Link>
          <Link
            to="https://maps.app.goo.gl/KgnbLkJ8ycwezjsm8"
            title="Ubicación"
            className="link"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Brasil 937, La Cisterna - Santiago.</span>
          </Link>
          <Link
            to="mailto:contacto@quantum-motores.cl"
            title="Mail"
            className="link"
            target="_blank"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span>contacto@quantum-motores.cl</span>
          </Link>
        </ContactContainer>

        <div>
          <p>
            <small> &copy; Quantum Motores</small>
          </p>
        </div>
        <ScrollToTopButton></ScrollToTopButton>
      </ItemsContainer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: var(--primary-color);

  color: #fff;
  margin-top: 8rem;
`;

const ItemsContainer = styled.div`
  display: grid;
  place-items: center;
  padding: 4rem 0;
  padding-bottom: 2rem;
  position: relative;
  gap: 2rem;
  width: 90%;
  margin: 0 auto;
  max-width: 1400px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    padding-bottom: 4rem;
  }

  small {
    color: var(--secondary-color);
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .link {
    color: var(--secondary-color);
    text-decoration: none;
    transition: 0.3s;
  }

  .link span {
    margin-left: 0.5rem;
  }

  @media (min-width: 1200px) {
    grid-row: 1 / 2;

    .link:hover {
      opacity: 0.7;
    }
  }
`;

const Logo = styled.img`
  width: 7.3rem;
`;
