import styled from "styled-components";
import doubleWave from "../banner/assets/double-wave.svg";
import ImageGallery from "../imageGallery/ImageGallery";

const Banner = () => {
  return (
    <>
      <BannerContainer>
        <Container>
          <InfoContainer>
            <Title>
              Aportando a la <StrongText>Optimización</StrongText> y
              <StrongText> Mejora </StrongText> de equipos industriales.
            </Title>
            <Message>
              Priorizamos la calidad, puntualidad y costos garantizando un
              servicio de excelencia para su completa satisfacción y
              tranquilidad. Les invitamos a conocernos!
            </Message>
          </InfoContainer>
          <ImageGallery></ImageGallery>
        </Container>
      </BannerContainer>
      <DoubleWaveImg src={doubleWave} alt="doubleWave" />
    </>
  );
};

export default Banner;

const BannerContainer = styled.div`
  background-color: var(--primary-color);
  color: #fff;
  padding: 2rem;
  text-align: center;

  @media (min-width: 576px) {
    padding: 4rem;
  }
  @media (min-width: 992px) {
    padding: 3rem 0;
  }
`;

const Container = styled.div`
  @media (min-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    text-align: start;
    padding: 0 4rem;
    max-width: 1400px;
    margin: 0 auto;
  }
`;

const InfoContainer = styled.div`
  @media (min-width: 992px) {
    max-width: 50%;
  }

  @media (min-width: 1200px) {
    max-width: 40%;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

const StrongText = styled.span`
  color: var(--secondary-color);
`;

const Message = styled.p`
  margin: 2rem 0;
`;

const DoubleWaveImg = styled.img`
  width: 100%;
  margin-top: -1px;
`;
