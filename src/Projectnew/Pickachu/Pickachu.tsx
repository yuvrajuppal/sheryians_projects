import React from "react";
import Pickachuimage from "./Pickachu.png";

const Pickachu: React.FC = () => {
  return (
    <div className="relative flex w-full h-screen font-sans overflow-hidden min-h-[800px]">
      {/* Background Split */}
      <div className="w-[60%] h-full bg-[#FFCB05]"></div> {/* Pokemon Yellow */}
      <div className="w-[40%] h-full bg-[#F3E8D2]"></div>{" "}
      {/* Cream Background */}
      {/* Foreground Container */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
        {/* Header */}
        <header className="flex justify-between items-center w-full z-20">
          {/* Pokemon Logo (Using standard SVG for placeholder) */}
          <div className="w-32 h-12">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
              alt="Pokemon Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Hamburger Menu Icon */}
          <button className="flex flex-col space-y-2 cursor-pointer z-20 group">
            <span className="w-8 h-[3px] bg-black rounded-full transition-all group-hover:w-6"></span>
            <span className="w-8 h-[3px] bg-black rounded-full"></span>
            <span className="w-8 h-[3px] bg-black rounded-full transition-all group-hover:w-10"></span>
          </button>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 flex relative items-center z-10 w-full h-full">
          {/* Text Content Block */}
          <div className="w-full md:w-[50%] flex flex-col z-20 pl-4 md:pl-12">
            <span className="tracking-[0.4em] text-sm font-bold text-gray-800 mb-6">
              POKEMON GEN I
            </span>
            <h1 className="text-7xl md:text-9xl font-extrabold text-black tracking-tight mb-8">
              Pikachu
            </h1>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed max-w-md mb-16 font-medium">
              Pikachu is an Electric-type Pokémon introduced in Generation I.
              Pikachu are small, chubby, and incredibly cute mouse-like Pokémon.
              They are almost completely covered by yellow fur.
            </p>

            {/* Pagination / Counter */}
            <div className="flex items-center space-x-6">
              <div className="w-12 h-[2px] bg-black"></div>
              <span className="font-bold text-black tracking-widest text-sm">
                01 / 08
              </span>
            </div>
          </div>

          {/* Pikachu Floating Image */}
          <div className="absolute top-1/2 -translate-y-1/2 right-[12%] md:right-[22%] z-30 pointer-events-none">
            <img
              src={Pickachuimage}
              alt="Pikachu"
              className="w-[400px] md:w-[650px] object-contain drop-shadow-2xl"
            />
          </div>
        </main>

        {/* Right Side Pagination Dots */}
        <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 flex flex-col space-y-5 z-20">
          <button className="w-3 h-3 rounded-full bg-black hover:scale-125 transition-transform"></button>
          <button className="w-3 h-3 rounded-full bg-[#FFCB05] hover:scale-125 transition-transform"></button>
          <button className="w-3 h-3 rounded-full bg-[#FFCB05] hover:scale-125 transition-transform"></button>
          <button className="w-3 h-3 rounded-full bg-[#FFCB05] hover:scale-125 transition-transform"></button>
          <button className="w-3 h-3 rounded-full bg-[#FFCB05] hover:scale-125 transition-transform"></button>
        </div>

        {/* Faint Pokeball Watermark (Bottom Left) */}
        <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full border-[60px] border-black/5 z-0 flex items-center justify-center overflow-hidden">
          <div className="w-full h-[60px] bg-black/5 absolute"></div>
          <div className="w-48 h-48 rounded-full border-[60px] border-black/5 bg-[#FFCB05]"></div>
        </div>
      </div>
    </div>
  );
};

export default Pickachu;
