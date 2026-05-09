import Pickachu from "./Projectnew/Pickachu/Pickachu";
import Pickachuimage from "./Projectnew/Pickachu/projectimage.png";

import Loome from "./Projectnew/loome/Loome";
import Loomeimage from "./Projectnew/loome/projectimage.png";

import PokedexUI from "./Projectnew/pokimon/PokedexUI";
import PokedexUIimage from "./Projectnew/pokimon/projectimage.png";

export const Projects = [
  {
    name: "Pickachu",
    href: "/Pickachu",
    element: <Pickachu />,
    image: Pickachuimage,
  },
  {
    name: "Loome",
    href: "/Loome",
    element: <Loome />,
    image: Loomeimage,
  },
  {
    name: "PokedexUI",
    href: "/PokedexUI",
    element: <PokedexUI />,
    image: PokedexUIimage,
  },
];
