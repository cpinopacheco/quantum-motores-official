/* eslint-disable react/prop-types */
import styled from "styled-components";

const MainButton = ({ onClick, content }) => {
  return <Button onClick={onClick}>{content}</Button>;
};

export default MainButton;

const Button = styled.button`
  border: none;
  background-color: var(--secondary-color);
  font-weight: 600;
  color: var(--primary-color);
  border-radius: 20px;
  background-size: 100% auto;
  font-family: inherit;
  font-size: 1.2rem;
  padding: 0.6em 1.5em;
  cursor: pointer;

  &:hover {
    background-position: right center;
    background-size: 200% auto;
    -webkit-animation: pulse 2s infinite;
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--secondary-color);
    }

    70% {
      box-shadow: 0 0 0 10px rgb(67 186 11 / 0%);
    }

    100% {
      box-shadow: 0 0 0 0 rgb(67 186 11 / 0%);
    }
  }
`;
