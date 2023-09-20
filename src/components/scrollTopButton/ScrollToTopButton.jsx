import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ButtonContainer onClick={scrollToTop} title="Ir arriba">
      <FontAwesomeIcon icon={faChevronUp} />
    </ButtonContainer>
  );
};

export default ScrollToTopButton;

const ButtonContainer = styled.button`
  background-color: var(--secondary-color);
  color: var(--primary-color);
  border: none;
  font-size: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  top: -30px;
  cursor: pointer;

  @media (min-width: 992px) {
    &:hover {
      background-position: right center;
      background-size: 200% auto;
      -webkit-animation: pulse 2s infinite;
      animation: pulse 1.5s infinite;
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
