/* eslint-disable react/prop-types */
import styled from "styled-components";
const Card = ({ service }) => {
  const { img, title, subServices } = service;

  return (
    <ContainerCard data-aos="fade-up">
      <HeaderCard>
        <Image src={img} />
      </HeaderCard>
      <CardBody>
        <Title>{title}</Title>
        <UnorderedList>
          {subServices.map((subService, index) => (
            <ListItem key={index}>{subService}</ListItem>
          ))}
        </UnorderedList>
      </CardBody>
    </ContainerCard>
  );
};

export default Card;

const ContainerCard = styled.div`
  position: relative;
  width: 315px;
  height: 500px;
  margin: 30px auto;
  background-color: var(--tertiary-color);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const HeaderCard = styled.div`
  position: relative;
  height: 220px;
  background-size: cover;
  background-position: top;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow-y: hidden;
`;

const Image = styled.img`
  width: 100%;
  position: absolute;
  margin-top: 100px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: 400;
`;

const CardBody = styled.div`
  text-align: center;
  padding: 1.5rem;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 auto;
  color: var(--primary-color);
`;

const UnorderedList = styled.ul`
  padding: 1rem 1.5rem;
`;

const ListItem = styled.li`
  color: var(--primary-color);
  margin: 10px auto;
  line-height: 20px;
`;
