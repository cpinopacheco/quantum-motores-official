import styled from "styled-components";
import { brands } from "../../data/brands.js";

const BrandsGallery = () => {
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
