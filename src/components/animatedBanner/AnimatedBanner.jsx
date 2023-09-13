import styled from "styled-components";
import image1 from "./assets/animationImg1.jpg";
import image2 from "./assets/animationImg2.jpg";
import image3 from "./assets/animationImg3.jpg";
import image4 from "./assets/animationImg4.jpg";

const AnimatedBanner = () => {
  return (
    <Content>
      <Layer></Layer>
    </Content>
  );
};

export default AnimatedBanner;

const Content = styled.div`
  width: 100%;
  height: 480px;
  background-image: url(${image1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation-name: animate;
  animation-direction: alternate;
  animation-play-state: running;
  animation-timing-function: ease-in-out;
  animation-duration: 25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  margin-bottom: 4rem;
  position: relative;

  @keyframes animate {
    0% {
      background-image: url(${image1});
    }
    33% {
      background-image: url(${image2});
    }
    66% {
      background-image: url(${image3});
    }
    100% {
      background-image: url(${image4});
    }
  }
`;

const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  opacity: 0.5;
`;
