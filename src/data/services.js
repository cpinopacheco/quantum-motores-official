import image1 from "../components/card/assets/mantencion-reaparacion-motores.jpg";
import image2 from "../components/card/assets/bobinado-motores-bombas.jpg";
import image3 from "../components/card/assets/generadores-compresores.jpg";
import image4 from "../components/card/assets/mantencion-reparacion-bombas.jpg";
import image5 from "../components/card/assets/torneria-maestranza.jpg";
import image6 from "../components/card/assets/obras-civiles.jpg";

export const services = [
  {
    id: "1",
    img: image1,
    title: "Mantención y reparación de motores",
    subServices: [
      "Motores corriente alterna",
      "Motores corriente continua",
      "Motorreductores",
      "Motoventiladores",
    ],
  },
  {
    id: "2",
    img: image2,
    title: "Bobinados de motores y bombas",
    subServices: [
      "Bobinado de motores corriente alterna",
      "Bobinado de motores corriente continua",
      "Bobinado de Bombas",
    ],
  },
  {
    id: "3",
    img: image3,
    title: "Generadores y Compresores",
    subServices: [
      "Generadores de cualquier marca y modelo",
      "Compresores de pistón, de cualquier marca y modelo",
    ],
  },
  {
    id: "4",
    img: image4,
    title: "Mantención y Reparación de Bombas",
    subServices: [
      "Bombas de agua",
      "Bombas de vacío",
      "Bombas sumergibles",
      "Bombas de Aspersión",
      "Bombas Multietapas",
    ],
  },
  {
    id: "5",
    img: image5,
    title: "Trabajos de Maestranza",
    subServices: [
      "Fabricación y Reparación de Cilindros (simple y doble efecto)",
      "Partes y Piezas",
      "Tornería",
      "Soldadura",
    ],
  },
  {
    id: "6",
    img: image6,
    title: "Obras Civiles Menores",
    subServices: ["Movimiento de tierras", "Construcción veredas", "Construcciones en general", "Pavimentos", "Pintura - Reparaciones", "Otros"],
  },
];
