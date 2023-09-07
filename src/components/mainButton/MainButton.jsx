import styled from "styled-components";

const MainButton = () => {
  return <Button>Call to Action</Button>;
};

export default MainButton;

const Button = styled.button`
  background-color: var(--secondary-color);
  color: var(--primary-color);
  font-weight: 800;
  font-size: 0.8rem;
  padding: 0.8rem;
  border: none;
  border-radius: 100px;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    -webkit-box-shadow: 0px 0px 25px 0px rgba(67, 186, 11, 0.8);
    -moz-box-shadow: 0px 0px 25px 0px rgba(67, 186, 11, 0.8);
    box-shadow: 0px 0px 25px 0px rgba(67, 186, 11, 0.8);
  }
`;
