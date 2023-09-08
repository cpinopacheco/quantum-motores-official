/* eslint-disable react/prop-types */
import styled from "styled-components";

const Title = ({ title }) => {
  return <MainTitle>{title}</MainTitle>;
};

export default Title;

const MainTitle = styled.h2`
  margin: 0rem auto;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: var(--primary-color);
  width: fit-content;
  border-bottom: 3px solid var(--tertiary-color);
`;
