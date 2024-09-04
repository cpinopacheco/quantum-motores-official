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
      <Link to={wspSetting.url} className="link" target="_blank">
        <FontAwesomeIcon icon={faWhatsapp} />
      </Link>
    </WspBtn>
  );
};

export default WspButton;

const WspBtn = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 30px;
  right: 20px;
  background-color: #25d366;
  border-radius: 50px;
  font-size: 36px;
  border: #25d366;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fade-up 1.2s ease forwards;

  @keyframes fade-up {
    from {
      opacity: 0;
      transform: translateY(120px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .link {
    color: #fff;
  }
`;
