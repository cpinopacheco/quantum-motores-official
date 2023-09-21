import styled from "styled-components";
import contactPhone from "../contactSection/assets/contactPhone.svg";
import mail from "../contactSection/assets/mail.svg";
import chat from "../contactSection/assets/chat.svg";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <SectionContainer>
      <ContactRow data-aos="fade-up">
        <ContactImage src={contactPhone}></ContactImage>
        <Container>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque a
            distinctio enim, voluptatem nam ea, fugit similique ex pariatur
            beatae aspernatur, vel repudiandae dolor ipsa. Aliquam nisi non
            maxime vero.
          </p>
          <Link
            to="tel:+56957409074"
            title="Llamar"
            className="contact-link"
            target="_blank"
          >
            <ContactInfo>Llamar</ContactInfo>
          </Link>
        </Container>
      </ContactRow>
      <ContactRow data-aos="fade-up">
        <ContactImage src={mail}></ContactImage>
        <Container>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque a
            distinctio enim, voluptatem nam ea, fugit similique ex pariatur
            beatae aspernatur, vel repudiandae dolor ipsa. Aliquam nisi non
            maxime vero.
          </p>
          <Link
            to="mailto:contacto@quantum-motores.cl"
            title="Enviar mail"
            className="contact-link"
            target="_blank"
          >
            <ContactInfo>Enviar correo</ContactInfo>
          </Link>
        </Container>
      </ContactRow>
      <ContactRow data-aos="fade-up">
        <ContactImage src={chat}></ContactImage>
        <Container>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque a
            distinctio enim, voluptatem nam ea, fugit similique ex pariatur
            beatae aspernatur, vel repudiandae dolor ipsa. Aliquam nisi non
            maxime vero.
          </p>
          <Link
            to="https://api.whatsapp.com/send?phone=56982113710"
            title="Chat Whatsapp"
            className="contact-link"
            target="_blank"
          >
            <ContactInfo>Chatear</ContactInfo>
          </Link>
        </Container>
      </ContactRow>
    </SectionContainer>
  );
};

export default ContactSection;

const SectionContainer = styled.section`
  margin-bottom: 5rem;
`;

const Container = styled.div`
  p {
    color: var(--primary-color);

    @media (min-width: 992px) {
      text-align: center;
    }
  }

  .contact-link {
    display: block;
    width: fit-content;
    margin: 0 auto;
    margin-top: 2rem;
    border: none;
    border-radius: 20px;
    background-color: var(--secondary-color);
    background-size: 100% auto;
    color: var(--primary-color);
    font-weight: 600;
    font-size: 1rem;
    padding: 0.6em 1.5em;
    text-decoration: none;
    cursor: pointer;

    @media (min-width: 992px) {
      &:hover {
        background-position: right center;
        background-size: 200% auto;
        -webkit-animation: pulse 2s infinite;
        animation: pulse 1.5s infinite;
      }
    }

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 var(--secondary-color);
      }

      70% {
        box-shadow: 0 0 0 10px rgb(67 186 11 / 0%);
      }

      100% {
        box-shadow: 0 0 0 0 rgb(67 186 11 / 0%);
      }
    }
  }
`;

const ContactRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--tertiary-color);
  border-radius: 2rem;
  margin: 2rem;
  padding: 2rem;
  min-height: 270px;
  transition: 0.5s;
  box-shadow: 0 3px 5px #99999950;

  @media (min-width: 576px) {
    margin: 3rem auto;
    width: 500px;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    width: 820px;
    padding: 2.5rem;
    &:nth-child(even) {
      flex-flow: row-reverse;
    }
    &:hover {
      transform: scale(1.05);
    }
  }

  @media (min-width: 1400px) {
    width: 1000px;
  }
`;

const ContactImage = styled.img`
  width: 100%;
  max-height: 180px;
`;

const ContactInfo = styled.p`
  color: var(--primary-color);
  @media (min-width: 1400px) {
    font-size: 1.2rem;
  }
`;
