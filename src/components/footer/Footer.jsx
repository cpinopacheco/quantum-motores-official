import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";
import { Link } from "react-router-dom";
import ScrollToTopButton from "../scrollTopButton/ScrollToTopButton";

const Footer = () => {
  return (
    <FooterContainer>
      <ContactContainer>
        <h4>Contacto: </h4>
        <Link to="tel:+56982113710" title="Llamar" className="link">
          <FontAwesomeIcon icon={faPhone} />
          <span>+ 56 9 821 13 710</span>
        </Link>
        <Link
          to="https://goo.gl/maps/DdGg4r2CQUF88fDe9"
          title="Ubicación"
          className="link"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLocationDot} />
          <span>General Gana 1324, Santiago.</span>
        </Link>
        <Link
          to="mailto:contacto@quantum-motores.cl"
          title="Mail"
          className="link"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span>contacto@quantum-motores.cl</span>
        </Link>
      </ContactContainer>
      <div>LOGO</div>
      <div>
        <p>
          <small> &copy; Quantum Motores</small>{" "}
        </p>
      </div>
      <ScrollToTopButton></ScrollToTopButton>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: var(--primary-color);
  color: #fff;
  display: grid;
  grid-template-columns: 1;
  place-items: center;
  padding: 4rem 2rem;
  margin-top: 8rem;
  position: relative;
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .link {
    color: #fff;
    text-decoration: none;
    transition: color 0.2s;
  }
  .link span {
    margin-left: 0.5rem;
  }

  @media (min-width: 992px) {
    .link:hover {
      color: var(--secondary-color);
    }
  }
`;
