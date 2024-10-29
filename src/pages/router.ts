import { CLIENT_BASE_URL } from "../consts/urls";

export const ROUTER = {
  index: {
    href: `${CLIENT_BASE_URL}/`,
    display: "Inicio",
  },
  look: {
    href: `${CLIENT_BASE_URL}/look`,
    display: "Componentes",
  },
  utils: {
    href: `${CLIENT_BASE_URL}/utils`,
    display: "Utilidades",
  },
};
