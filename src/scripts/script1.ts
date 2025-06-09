import { Scissors, Sparkles, Heart, Users } from "lucide-react";

// Datos por defecto
export const defaultServices = [
  {
    icon: Scissors,
    title: "Cortes de Cabello",
    description: "Cortes modernos y clásicos para todos los estilos",
    price: "Desde $25"
  },
  {
    icon: Sparkles,
    title: "Coloración",
    description: "Tintes, mechas y tratamientos de color profesionales",
    price: "Desde $45"
  },
  {
    icon: Heart,
    title: "Tratamientos",
    description: "Hidratación, keratina y cuidados especializados",
    price: "Desde $35"
  },
  {
    icon: Users,
    title: "Peinados",
    description: "Peinados para eventos especiales y ocasiones únicas",
    price: "Desde $30"
  }
];

export const defaultHairStyles = [
  {
    id: 1,
    name: "Corte Bob Moderno",
    category: "Cortes Clásicos",
    description: "Elegante corte bob que realza la forma del rostro",
    image: "https://i.pinimg.com/236x/d3/16/e5/d316e5ad82ae45d7536e95ceee837a77.jpg"
  },
  {
    id: 2,
    name: "Ondas Naturales",
    category: "Peinados",
    description: "Ondas suaves y naturales para un look romántico",
    image: "https://i.pinimg.com/originals/dd/f7/ed/ddf7edf7884b14b30cd9a656f54a988a.jpg"
  },
  {
    id: 3,
    name: "Mechas Balayage",
    category: "Coloración",
    description: "Técnica de coloración para un efecto natural y luminoso",
    image: "https://img.freepik.com/fotos-premium/dama-estilo-corte-pelo-contemporaneo-pelos-largos-corte-pelo-elegante-negocios_651462-997.jpg"
  },
  {
    id: 4,
    name: "Pixie Cut",
    category: "Cortes Modernos",
    description: "Corte corto y moderno para un look sofisticado",
    image: "https://s1.elespanol.com/2024/05/28/actualidad/858674625_243542470_1024x576.jpg"
  },
  {
    id: 5,
    name: "Trenzas Bohemias",
    category: "Peinados",
    description: "Trenzas elaboradas perfectas para eventos especiales",
    image: "https://www.shutterstock.com/image-photo/female-back-short-curly-natural-600nw-1850057719.jpg"
  },
  {
    id: 6,
    name: "Highlights Rubios",
    category: "Coloración",
    description: "Mechas rubias que iluminan tu cabello naturalmente",
    image: "https://sevilla.abc.es/estilo/bulevarsur//wp-content/uploads/sites/14/2022/10/cortes-no-se-llevan-20231-e1665784667555.jpg"
  }
];

// Funciones para obtener datos finales
export function getServices(apiServices) {
  return apiServices && apiServices.length > 0 ? apiServices : defaultServices;
}

type HairStyle = {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
};

export function getHairStyles(apiHairStyles: HairStyle[] | undefined): HairStyle[] {
  return apiHairStyles && apiHairStyles.length > 0 ? apiHairStyles : defaultHairStyles;
}