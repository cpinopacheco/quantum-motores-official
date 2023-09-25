import styled from "styled-components";
import Banner from "../components/banner/Banner";
import Title from "../components/title/Title";
import ServicesBanner from "../components/servicesBanner/ServicesBanner";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <SectionContent data-aos="fade-up">
        <Title title="Bienvenidos a Quantum Motores"></Title>
        <SectionDescription>
          Somos una empresa dedicada a la mantención, reparación y bobinados de
          motores en cualquier línea de producción, ayudando a optimizar
          procesos productivos y logísticos dentro de su compañía. <br />
          Con muchos años de experiencia en el mercado, suministrando una amplia
          gama de servicios contamos con personal altamente capacitado y
          disponible para cualquier solicitud que ustedes requieran.
        </SectionDescription>
      </SectionContent>
      <SectionContent data-aos="fade-up">
        <Title title="Amplia gama de servicios"></Title>
        <SectionDescription>
          Con muchos años de experiencia en el mercado, suministramos una amplia
          gama de servicios, contando con personal altamente capacitado y
          disponible para cualquier solicitud que ustedes requieran.
        </SectionDescription>
      </SectionContent>

      <ServicesBanner></ServicesBanner>

      <SectionContent data-aos="fade-up">
        <Title title="Sección Marcas"></Title>
        <SectionDescription>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
          dignissimos, tempora velit aut quis aperiam aliquam nemo ducimus quia
          animi, quae accusamus inventore molestias eveniet est corporis soluta
          eos temporibus.
        </SectionDescription>
      </SectionContent>
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
