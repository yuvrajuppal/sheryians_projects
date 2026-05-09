import React from "react";
import {
  Menu,
  Sun,
  Search,
  ChevronDown,
  SlidersHorizontal,
  Heart,
  ArrowRight,
  Compass,
  Star,
  Shield,
  Leaf,
} from "lucide-react";

// Provided Imports
import International_Pokémon_logo from "./pokimages/International_Pokémon_logo.svg";
import Pawniard from "./pokimages/Pawniard.png";
import Houndoom from "./pokimages/Houndoom.png";
import Inkay from "./pokimages/Inkay.png";
import Meowscarada from "./pokimages/Meowscarada.png";

// --- Types ---
interface PokemonType {
  name: string;
  icon: React.ReactNode;
  textColor: string;
  bgColor: string;
}

interface Pokemon {
  id: string;
  name: string;
  image: string;
  types: PokemonType[];
  accentColor: string;
  bgBlobColor: string;
}

// --- Mock Data ---
const pokemonData: Pokemon[] = [
  {
    id: "#0908",
    name: "Meowscarada",
    image: Meowscarada,
    types: [
      {
        name: "GRASS",
        icon: <Leaf className="w-3 h-3" />,
        textColor: "text-green-700",
        bgColor: "bg-green-100",
      },
    ],
    accentColor: "border-b-green-500",
    bgBlobColor: "bg-green-50",
  },
  {
    id: "#0624",
    name: "Pawniard",
    image: Pawniard,
    types: [
      {
        name: "DARK / STEEL",
        icon: <div className="w-3 h-3 bg-slate-600 rounded-sm" />, // Hexagon approximation
        textColor: "text-slate-600",
        bgColor: "bg-slate-100",
      },
    ],
    accentColor: "border-b-slate-400",
    bgBlobColor: "bg-slate-50",
  },
  {
    id: "#0229",
    name: "Houndoom",
    image: Houndoom,
    types: [
      {
        name: "DARK / FIRE",
        icon: <span className="text-[10px]">🔥</span>,
        textColor: "text-orange-600",
        bgColor: "bg-orange-100",
      },
    ],
    accentColor: "border-b-orange-500",
    bgBlobColor: "bg-orange-50",
  },
  {
    id: "#0686",
    name: "Inkay",
    image: Inkay,
    types: [
      {
        name: "DARK / PSYCHIC",
        icon: <span className="text-[10px]">💧</span>, // Drop approximation
        textColor: "text-blue-600",
        bgColor: "bg-blue-100",
      },
    ],
    accentColor: "border-b-blue-500",
    bgBlobColor: "bg-blue-50",
  },
];

// --- Main Component ---
const PokedexUI: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9fbff] via-[#f2f5fd] to-[#eaeefa] font-sans text-slate-800 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-200/20 blur-3xl rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <button className="p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <Menu className="w-6 h-6 text-slate-600" />
          </button>

          <img
            src={International_Pokémon_logo}
            alt="Pokémon Logo"
            className="h-16 object-contain"
          />

          <button className="p-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <Sun className="w-6 h-6 text-slate-600" />
          </button>
        </header>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <div className="relative w-full md:w-[400px]">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search for a Pokémon..."
              className="w-full bg-white/90 backdrop-blur-sm rounded-full py-4 pl-14 pr-6 text-sm outline-none shadow-sm placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-between gap-3 bg-white/90 backdrop-blur-sm rounded-full py-4 px-6 text-sm font-medium shadow-sm hover:bg-white transition-colors">
              Filter by types (1)
              <ChevronDown className="w-4 h-4 text-slate-500" />
            </button>
            <button className="p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors">
              <SlidersHorizontal className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>

        {/* Pokémon Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pokemonData.map((pokemon, index) => (
            <div
              key={index}
              className={`bg-white/90 backdrop-blur-xl rounded-[2rem] p-6 shadow-sm hover:shadow-lg transition-all flex flex-col border-b-[5px] ${pokemon.accentColor} relative group cursor-pointer`}
            >
              {/* Card Header */}
              <div className="flex justify-between items-center mb-4 z-10">
                <span className="text-slate-400 font-semibold text-sm">
                  {pokemon.id}
                </span>
                <button className="p-2 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors">
                  <Heart className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* Image Section */}
              <div className="relative flex-1 flex items-center justify-center min-h-[200px] mb-6">
                <div
                  className={`absolute w-40 h-40 rounded-full ${pokemon.bgBlobColor} blur-xl`}
                />
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                  className="w-48 object-contain z-10 group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Card Footer */}
              <div className="z-10 mt-auto">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {pokemon.name}
                </h3>
                <div className="flex justify-between items-end">
                  <div className="flex flex-wrap gap-2">
                    {pokemon.types.map((type, tIndex) => (
                      <span
                        key={tIndex}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider ${type.bgColor} ${type.textColor}`}
                      >
                        {type.icon}
                        {type.name}
                      </span>
                    ))}
                  </div>
                  <button className="p-2.5 bg-white border border-slate-100 shadow-sm rounded-full group-hover:bg-slate-50 transition-colors">
                    <ArrowRight className="w-4 h-4 text-slate-700" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Bar */}
        <div className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-sm flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 max-w-5xl mx-auto border border-white">
          <div className="flex items-center gap-4 flex-1 lg:border-r border-slate-100 pr-6">
            <div className="p-3.5 bg-blue-50 rounded-full text-blue-600">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">Explore</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Discover all your favorite Pokémon
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-1 lg:border-r border-slate-100 pr-6">
            <div className="p-3.5 bg-green-50 rounded-full text-green-600">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">Filter</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Find Pokémon by types and abilities
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-1 lg:border-r border-slate-100 pr-6">
            <div className="p-3.5 bg-yellow-50 rounded-full text-yellow-500">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">
                Collection
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Save and manage your collection
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-1 pl-2">
            <div className="p-3.5 bg-purple-50 rounded-full text-purple-500">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">Stats</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                View stats and learn about Pokémon
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 mb-4 flex flex-col items-center justify-center gap-2">
          <div className="w-8 h-8 rounded-full border-2 border-slate-300 flex items-center justify-center bg-slate-50">
            <div className="w-3 h-3 rounded-full border-2 border-slate-300"></div>
          </div>
          <p className="text-xs text-slate-400 font-medium tracking-wide">
            © 2024 Pokémon. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PokedexUI;
