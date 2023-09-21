import AnimatedBanner from "../components/animatedBanner/AnimatedBanner";
import styled from "styled-components";
import Card from "../components/card/Card";
import Title from "../components/title/Title";
import image1 from "../components/card/assets/reparacion-motor.jpg";
import image2 from "../components/card/assets/bobinado-de-motor.jpg";
import image3 from "../components/card/assets/generadores-compresores.jpg";
import image4 from "../components/card/assets/reparacion-bombas.jpg";
import image5 from "../components/card/assets/torneria-maestranza.jpg";
import image6 from "../components/card/assets/obras-civiles.png";

const Services = () => {
  const services = [
    {
      id: "1",
      img: image1,
      title: "Mantención y reparación de motores",
      subServices: [
        "Motores corriente alterna",
        "Motores corriente continua",
        "Motorreductores",
        "Motoventiladores",
      ],
    },
    {
      id: "2",
      img: image2,
      title: "Bobinados de motores y bombas",
      subServices: [
        "Bobinado de motores corriente alterna",
        "Bobinado de motores corriente continua",
        "Bobinado de Bombas",
      ],
    },
    {
      id: "3",
      img: image3,
      title: "Generadores y Compresores",
      subServices: [
        "Generadores de cualquier marca y modelo",
        "Compresores de pistón, de cualquier marca y modelo",
      ],
    },
    {
      id: "4",
      img: image4,
      title: "Mantención y Reparación de Bombas",
      subServices: [
        "Bombas de agua",
        "Bombas de vacío",
        "Bombas sumergibles",
        "Bombas de Aspersión",
        "Bombas Multietapas",
      ],
    },
    {
      id: "5",
      img: image5,
      title: "Trabajos de Maestranza",
      subServices: [
        "Fabricación y Reparación de Cilindros (simple y doble efecto)",
        "Partes y Piezas",
        "Tornería",
        "Soldadura",
      ],
    },
    {
      id: "6",
      img: image6,
      title: "Trabajos Obras Civiles",
      subServices: ["Obras Civiles Menores"],
    },
  ];

  return (
    <>
      <AnimatedBanner></AnimatedBanner>
      <div data-aos="fade-up">
        <Title title="Nuestros Servicios"></Title>
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
