import { CLIENT_BASE_URL } from "../../consts/urls";

export const ROUTER = {
  index: {
    href: `${CLIENT_BASE_URL}/`,
    display: "Inicio",
  },
  components: {
    href: `${CLIENT_BASE_URL}/components`,
    display: "Componentes",
  },
  utils: {
    href: `${CLIENT_BASE_URL}/utils`,
    display: "Utilidades",
  },
};
