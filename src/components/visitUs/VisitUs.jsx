import styled from "styled-components";
import image from "../visitUs/assets/location.svg";

const VisitUs = () => {
  return (
    <>
      <DirectionText data-aos="fade-up">
        <b>Dirección:</b> Brasil 937, La Cisterna - Santiago.
      </DirectionText>
      <Container data-aos="fade" data-aos-duration="1500">
        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.73758878506!2d-70.65558652492939!3d-33.534207601805385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662da58e98af94d%3A0xf443e943d58cfce8!2sBrasil%20937%2C%207980616%20La%20Cisterna%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1695736584638!5m2!1ses-419!2scl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></Map>

        <LocationImage src={image} />
      </Container>
    </>
  );
};

export default VisitUs;

const Map = styled.iframe`
  width: 100%;
  height: 300px;
  border: 0;
  border-radius: 2rem;
  @media (min-width: 992px) {
    height: 180px;
  }
`;

const DirectionText = styled.p`
  color: var(--primary-color);
  font-size: 1.2rem;
  text-align: center;
  margin: 0 2rem;
`;

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: auto;
  margin-bottom: 3rem;
  @media (min-width: 576px) {
    margin: 2rem auto;
    margin-bottom: 4rem;
    padding: 0;
    width: 500px;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    width: 800px;
  }

  @media (min-width: 1400px) {
    width: 1000px;
  }
`;

const LocationImage = styled.img`
  display: none;
  width: 100%;
  max-width: 320px;
  max-height: 250px;
  @media (min-width: 992px) {
    display: block;
  }
`;
