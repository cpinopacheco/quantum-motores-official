import styled from "styled-components";
import electricMotorImg from "../servicesBanner/assets/motores-electricos.jpg";
import iconCheck from "../servicesBanner/assets/icon-check.svg";

const ServicesBanner = () => {
  return (
    <ContainerBanner>
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
    </ContainerBanner>
  );
};

export default ServicesBanner;

const ContainerBanner = styled.div`
  background-color: var(--tertiary-color);
  background-image: url(${electricMotorImg});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  background-blend-mode: soft-light;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

const IconCheck = styled.img`
  width: 31px;
  height: 31px;
`;

const ItemService = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  font-weight: bold;
  font-size: 1.3rem;

  @media (min-width: 576px) {
    justify-content: center;
  }
`;
