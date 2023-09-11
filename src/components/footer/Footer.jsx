import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer>
      <ContactContainer>
        <h4>Contacto: </h4>
        <Link to="tel:+56957409074" title="Llamar" className="link">
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
  padding: 2rem;
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
    line-height: 2;
    position: relative;

    @media (min-width: 992px) {
      &::before {
        content: "";
        width: 100%;
        height: 3px;
        border-radius: 2px;
        background-color: var(--secondary-color);
        position: absolute;
        bottom: -0.5rem;
        left: 0;
        transition: transform 0.6s, opacity 0.6s;
        opacity: 0;
      }
      &:hover::before {
        transform: translateY(-0.25rem);
        opacity: 1;
      }
    }
  }
  .link span {
    margin-left: 0.5rem;
  }
`;
