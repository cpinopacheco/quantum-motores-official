import styled from "styled-components";
import image from "../visitUs/assets/location.svg";

const VisitUs = () => {
  return (
    <>
      <DirectionText>
        <b>Dirección:</b> General Gana 1324, Santiago.
      </DirectionText>
      <Container>
        <LocationImage src={image} />
        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.154942015588!2d-70.65300382493278!3d-33.47131659858002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c53e965912bf%3A0x8cd7191a99f8fcb0!2sGral.%20Gana%201324%2C%208361139%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1694701987934!5m2!1ses-419!2scl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></Map>
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
`;

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 850px;
  margin: 0 auto;
  @media (min-width: 992px) {
    flex-direction: row;
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
`;

const LocationImage = styled.img`
  display: none;
  width: 100%;
  max-width: 250px;
  max-height: 180px;
  @media (min-width: 992px) {
    display: block;
  }
`;
