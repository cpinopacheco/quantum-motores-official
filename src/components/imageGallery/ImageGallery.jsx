import styled from "styled-components";
import image1 from "../imageGallery/assets/image1.jpg";
import image2 from "../imageGallery/assets/image2.jpg";
import image3 from "../imageGallery/assets/image3.jpg";
import image4 from "../imageGallery/assets/image4.jpg";
import image5 from "../imageGallery/assets/image5.jpg";

const ImageGallery = () => {
  return (
    <GalleryContainer>
      <ImageContainer></ImageContainer>
      <ImageContainer></ImageContainer>
      <ImageContainer></ImageContainer>
      <ImageContainer></ImageContainer>
      <ImageContainer></ImageContainer>
    </GalleryContainer>
  );
};

export default ImageGallery;

const GalleryContainer = styled.div`
  position: relative;
  width: 350px;
  height: 600px;
  display: none;

  :nth-child(odd) {
    width: 140px;
    height: 140px;
  }

  :nth-child(even) {
    width: 160px;
    height: 160px;
    z-index: 1;
  }

  :nth-child(1) {
    background-image: url(${image1});
    left: 50%;
  }

  :nth-child(2) {
    background-image: url(${image2});
    top: 90px;
    right: 45%;
  }

  :nth-child(3) {
    background-image: url(${image3});
    width: 200px;
    height: 200px;
    left: 50%;
    top: 200px;
    z-index: 2;
  }

  :nth-child(4) {
    background-image: url(${image4});
    right: 45%;
    top: 330px;
  }

  :nth-child(5) {
    background-image: url(${image5});
    left: 50%;
    top: 440px;
  }

  @media (min-width: 992px) {
    display: block;
  }

  @media (min-width: 1400px) {
    width: 50%;
    height: 220px;

    :nth-child(1) {
      left: 0px;
      top: 0px;
    }
    :nth-child(2) {
      top: 110px;
      left: 110px;
    }
    :nth-child(3) {
      top: -60px;
      left: 230px;
    }
    :nth-child(4) {
      top: 110px;
      left: 390px;
    }
    :nth-child(5) {
      top: 0px;
      left: 520px;
    }
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  box-shadow: 0 0 15px var(--secondary-color);
  border-radius: 1rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.9;
`;
