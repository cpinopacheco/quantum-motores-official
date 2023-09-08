import styled from "styled-components";
import MainButton from "../mainButton/MainButton";
import doubleWave from "../banner/assets/double-wave.svg";
import motorBanner from "../banner/assets/motor-banner.png";

const Banner = () => {
  return (
    <>
      <BannerContainer>
        <Container>
          <InfoContainer>
            <Title>
              Titulo importante <StrongText>para llamar </StrongText> la
              atención
            </Title>
            <Message>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              excepturi rerum voluptatibus pariatur adipisci numquam nulla
              cupiditate maxime et in.
            </Message>
            <MainButton
              onClick={() => console.log("click banner")}
              content="Click to action"
            ></MainButton>
          </InfoContainer>
          <MotorBanner src={motorBanner} alt="" />
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
`;

const Container = styled.div`
  @media (min-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    text-align: start;
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;
  }
`;

const InfoContainer = styled.div`
  @media (min-width: 992px) {
    max-width: 50%;
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

const MotorBanner = styled.img`
  display: none;
  max-width: 400px;

  @media (min-width: 992px) {
    display: block;
  }
`;

const DoubleWaveImg = styled.img`
  width: 100%;
  margin-top: -1px;
`;
