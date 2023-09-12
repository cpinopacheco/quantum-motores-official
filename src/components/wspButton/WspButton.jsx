import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const wspSetting = {
  url: "https://api.whatsapp.com/send?phone=56982113710",
};

const WspButton = () => {
  return (
    <WspBtn>
      <Link to={wspSetting.url} className="link">
        <FontAwesomeIcon icon={faWhatsapp} />
      </Link>
    </WspBtn>
  );
};

export default WspButton;

const WspBtn = styled.button`
  position: fixed;
  width: 70px;
  height: 70px;
  bottom: 30px;
  right: 20px;
  background-color: #25d366;
  border-radius: 50px;
  font-size: 48px;
  border: #25d366;
  box-shadow: 0 3px 5px var(--tertiary-color);
  display: flex;
  justify-content: center;
  align-items: center;

  .link {
    color: #fff;
  }
`;
