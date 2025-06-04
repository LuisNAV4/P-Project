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
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Ondas Naturales",
    category: "Peinados",
    description: "Ondas suaves y naturales para un look romántico",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Mechas Balayage",
    category: "Coloración",
    description: "Técnica de coloración para un efecto natural y luminoso",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Pixie Cut",
    category: "Cortes Modernos",
    description: "Corte corto y moderno para un look sofisticado",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Trenzas Bohemias",
    category: "Peinados",
    description: "Trenzas elaboradas perfectas para eventos especiales",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    name: "Highlights Rubios",
    category: "Coloración",
    description: "Mechas rubias que iluminan tu cabello naturalmente",
    image: "/placeholder.svg"
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