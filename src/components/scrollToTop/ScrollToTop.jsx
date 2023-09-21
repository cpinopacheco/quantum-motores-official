import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const unListen = () => {
      window.scrollTo(0, 0);
    };

    return () => {
      unListen();
    };
  }, [location]);

  return null; // Este componente no renderiza nada en el DOM
}

export default ScrollToTop;
