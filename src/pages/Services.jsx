import AnimatedBanner from "../components/animatedBanner/AnimatedBanner";
import styled from "styled-components";
import Card from "../components/card/Card";
import Title from "../components/title/Title";
import { services } from "../data/services.js";

const Services = () => {
  return (
    <>
      <AnimatedBanner></AnimatedBanner>
      <div data-aos="fade-up">
        <Title>Nuestros Servicios</Title>
      </div>
      <ContainerCards>
        {services.map((service) => (
          <Card service={service} key={service.id}></Card>
        ))}
      </ContainerCards>
    </>
  );
};

export default Services;

const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  margin: 0 auto;
  margin-bottom: 2rem;

  @media (min-width: 576px) {
    width: 80%;
  }
`;
