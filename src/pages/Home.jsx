import styled from "styled-components";
import Banner from "../components/banner/Banner";
import Title from "../components/title/Title";
import ServicesBanner from "../components/servicesBanner/ServicesBanner";
import BrandsGallery from "../components/brandGallery/BrandsGallery";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <SectionContent data-aos="fade-up">
        <Title>Bienvenidos a Quantum Motores</Title>
        <SectionDescription>
          Tenemos una empresa dedicada a la mantención, reparación y bobinados
          de motores en cualquier línea de producción, ayudando a optimizar
          procesos productivos y logísticos dentro de su compañía. Tenemos
          muchos años de experiencia en el mercado, suministrando una amplia
          gama de servicios. <br />
          Contamos con personal altamente capacitado y disponible para cualquier
          solicitud que requieran, creemos que nuestras habilidades y
          experiencia pueden ser de gran beneficio para usted.
        </SectionDescription>
      </SectionContent>
      <SectionContent data-aos="fade-up">
        <Title>Amplia gama de servicios</Title>
        <SectionDescription>
          En <b>Quantum Motores</b> estamos comprometidos en proporcionar
          soluciones a nuestros clientes, y nos gustaría ofrecerle nuestros
          servicios para cubrir sus necesidades de manera confiable y efectiva.{" "}
          <br />
          Nuestra oferta de servicios incluye:
        </SectionDescription>
      </SectionContent>

      <ServicesBanner></ServicesBanner>

      <BrandContainer data-aos="fade-up">
        <Title>Marcas</Title>
        <BrandsGallery></BrandsGallery>
      </BrandContainer>
    </>
  );
};

export default Home;

const SectionContent = styled.section`
  width: 80%;
  max-width: 900px;
  margin: 4rem auto;

  @media (min-width: 992px) {
    margin-top: 0;
    margin-bottom: 5rem;
  }
`;

const SectionDescription = styled.p`
  color: var(--primary-color);
`;

const BrandContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;
