import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/servicios",
        element: <Services />,
      },
      {
        path: "/contacto",
        element: <Contact />,
      },
    ],
  },
]);
