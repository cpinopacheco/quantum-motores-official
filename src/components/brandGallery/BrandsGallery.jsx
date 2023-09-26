import styled from "styled-components";
import siemensLogo from "../brandGallery/assets/siemens.svg";
import wegLogo from "../brandGallery/assets/WEG_Electric_Motors.svg";
import sewEurodriveLogo from "../brandGallery/assets/sew_eurodrive.svg";
import pedrolloLogo from "../brandGallery/assets/Pedrollo.svg";
import ksb from "../brandGallery/assets/ksb.svg";
import grundfosLogo from "../brandGallery/assets/grundfos-logo.svg";

const BrandsGallery = () => {
  const brands = [
    {
      id: "1",
      name: "Siemens Logo",
      img: siemensLogo,
    },
    {
      id: "2",
      name: "Weg logo",
      img: wegLogo,
    },
    {
      id: "3",
      name: "Sew eurodrive Logo",
      img: sewEurodriveLogo,
    },
    {
      id: "4",
      name: "Pedrollo Logo",
      img: pedrolloLogo,
    },
    {
      id: "5",
      name: "Ksb logo",
      img: ksb,
    },
    {
      id: "6",
      name: "Grundfos Logo",
      img: grundfosLogo,
    },
  ];

  return (
    <Container>
      {brands.map((brand) => (
        <Image key={brand.id}>
          <img src={brand.img} alt={brand.name} />
        </Image>
      ))}
    </Container>
  );
};

export default BrandsGallery;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Image = styled.div`
  width: 300px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
