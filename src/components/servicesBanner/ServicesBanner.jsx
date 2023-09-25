import styled from "styled-components";
import electricMotorImg from "../servicesBanner/assets/motores-electricos.jpg";
import iconCheck from "../servicesBanner/assets/icon-check.svg";
import MainButton from "../mainButton/MainButton";
import { useNavigate } from "react-router-dom";

const ServicesBanner = () => {
  const navigate = useNavigate();

  const redirectToServices = () => {
    navigate("/servicios");
  };

  return (
    <ContainerBanner data-aos="fade" data-aos-duration="1000">
      <ItemService>
        <IconCheck src={iconCheck} alt="icon-check" />
        <p>Mantención y Reparación de Motores</p>
      </ItemService>
      <ItemService>
        <IconCheck src={iconCheck} alt="icon-check" />
        <p>Bobinados de Motores y Bombas</p>
      </ItemService>
      <ItemService>
        <IconCheck src={iconCheck} alt="icon-check" />
        <p>Generadores y Compresores</p>
      </ItemService>
      <ItemService>
        <IconCheck src={iconCheck} alt="icon-check" />
        <p>Mantención y Reparación de Bombas</p>
      </ItemService>
      <ItemService>
        <IconCheck src={iconCheck} alt="icon-check" />
        <p>Trabajos de Maestranza</p>
      </ItemService>
      <ItemService>
        <IconCheck src={iconCheck} alt="icon-check" />
        <p>Trabajos Obras Civiles</p>
      </ItemService>
      <ContainerButton>
        <MainButton
          onClick={() => redirectToServices()}
          content="Ver mas"
        ></MainButton>
      </ContainerButton>
    </ContainerBanner>
  );
};

export default ServicesBanner;

const ContainerBanner = styled.div`
  background-color: rgb(193, 196, 233, 0.9);
  background-image: url(${electricMotorImg});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  background-blend-mode: screen;
  padding: 0 2rem;
  margin-bottom: 5rem;
`;

const IconCheck = styled.img`
  width: 30px;
  height: 30px;
`;

const ItemService = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  font-weight: bold;
  font-size: 1.4rem;
  margin: 2rem 0;

  @media (min-width: 576px) {
    justify-content: center;
  }
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;
