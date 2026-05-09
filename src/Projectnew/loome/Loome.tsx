import React from "react";
import {
  ShoppingBag,
  Menu,
  Star,
  ShieldCheck,
  Truck,
  RefreshCcw,
  Leaf,
  Grid,
} from "lucide-react";
import demo from "./demo.jpg";
const Loome: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f6f4f0] text-[#2c2c2c] font-sans overflow-hidden relative selection:bg-[#5a644c] selection:text-white">
      {/* Decorative Background Shadow (Optional approximation of the leaf shadow) */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-black/5 blur-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-8">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-16 relative z-10">
          <div className="text-4xl font-serif tracking-tight">loomé.</div>

          <div className="hidden md:flex items-center space-x-12 text-sm font-medium">
            <a href="#" className="hover:text-gray-500 transition-colors">
              Home
            </a>
            <div className="flex flex-col items-center">
              <a href="#" className="text-black">
                Shop
              </a>
              <div className="w-6 h-[2px] bg-black mt-1"></div>
            </div>
            <a href="#" className="hover:text-gray-500 transition-colors">
              Collection
            </a>
            <a href="#" className="hover:text-gray-500 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-gray-500 transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative cursor-pointer">
              <ShoppingBag className="w-6 h-6" strokeWidth={1.5} />
              <div className="absolute -top-1 -right-2 bg-[#5a644c] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                2
              </div>
            </div>
            <Menu className="w-6 h-6 cursor-pointer" strokeWidth={1.5} />
          </div>
        </nav>

        {/* Main Content Grid */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative z-10">
          {/* Left Column - Product Info */}
          <div className="lg:col-span-5 flex flex-col pt-4">
            <div className="flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-gray-500 mb-6">
              <Leaf className="w-4 h-4 text-[#5a644c]" strokeWidth={2} />
              <span>New Collection</span>
            </div>

            <h1 className="text-7xl lg:text-[5.5rem] font-serif leading-[1.1] mb-8 text-[#1a1a1a]">
              a cotton
              <br />
              weave
            </h1>

            <p className="text-gray-600 mb-10 max-w-sm leading-relaxed text-sm">
              Crafted from 100% organic cotton with a soft, breathable feel.
              Perfect for all seasons and everyday elegance.
            </p>

            {/* Colors */}
            <div className="flex items-center space-x-6 mb-12">
              <span className="font-semibold text-sm">colors</span>
              <div className="flex space-x-3">
                <button className="w-5 h-5 rounded-full bg-[#7b866b] ring-2 ring-offset-2 ring-transparent hover:ring-[#7b866b] transition-all"></button>
                <button className="w-5 h-5 rounded-full bg-[#e8e2d9] ring-2 ring-offset-2 ring-transparent hover:ring-[#e8e2d9] transition-all"></button>
                <button className="w-5 h-5 rounded-full bg-[#dfb2b2] ring-2 ring-offset-2 ring-transparent hover:ring-[#dfb2b2] transition-all"></button>
              </div>
            </div>

            {/* Details */}
            <div className="mb-16">
              <div className="flex items-center space-x-4 mb-4">
                <h3 className="font-semibold text-sm">Details</h3>
                <div className="h-[1px] w-6 bg-black"></div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus, sapiente. Ipsam maiores nemo, quidem veniam et atque
                suscipit, saepe doloribus ab molestiae deserunt? Totam natus
                eligendi neque.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="flex space-x-8 text-center max-w-md">
              <div className="flex flex-col items-center flex-1">
                <div className="w-10 h-10 rounded-full bg-[#e8e4db] flex items-center justify-center mb-3 text-[#5a644c]">
                  <Leaf className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="text-xs font-semibold">
                  Organic
                  <br />
                  Cotton
                </span>
              </div>
              <div className="w-[1px] bg-gray-300"></div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-10 h-10 rounded-full bg-[#e8e4db] flex items-center justify-center mb-3 text-[#5a644c]">
                  <Leaf className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="text-xs font-semibold">
                  Soft &<br />
                  Lightweight
                </span>
              </div>
              <div className="w-[1px] bg-gray-300"></div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-10 h-10 rounded-full bg-[#e8e4db] flex items-center justify-center mb-3 text-[#5a644c]">
                  <Grid className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="text-xs font-semibold">
                  Handmade
                  <br />
                  Weave
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Images & Floating Elements */}
          <div className="lg:col-span-7 flex relative">
            {/* Vertical Text */}
            <div className="hidden lg:flex items-center absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-sm font-serif tracking-widest text-gray-700 space-x-4">
              <div className="w-8 h-[1px] bg-gray-400"></div>
              <span>cotton twill scarf</span>
              <div className="w-8 h-[1px] bg-gray-400"></div>
            </div>

            <div className="flex w-full gap-6 lg:ml-12">
              {/* Main Image */}
              <div className="relative flex-1 rounded-3xl overflow-hidden shadow-sm h-[600px]">
                <img
                  src={demo}
                  alt="Woman wearing cotton weave scarf"
                  className="w-full h-full object-cover"
                />

                {/* Price Tag */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full font-semibold text-sm">
                  $488
                </div>

                {/* Rating */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-full flex items-center space-x-2 text-sm font-medium">
                  <span>Rating</span>
                  <div className="flex text-[#5a644c]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Add to Bag Button */}
                <button className="absolute -bottom-4 -right-4 w-40 h-40 bg-[#5a644c]/90 backdrop-blur-md rounded-full text-white flex flex-col items-center justify-center hover:bg-[#4b543f] transition-colors shadow-lg group">
                  <ShoppingBag
                    className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm font-medium">Add to bag</span>
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex flex-col space-y-4 justify-between h-[600px]">
                <div className="w-20 h-20 rounded-xl overflow-hidden ring-2 ring-[#5a644c] p-1">
                  <div className="w-full h-full rounded-lg overflow-hidden">
                    <img
                      src={demo}
                      alt="Thumb 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-20 h-20 rounded-xl overflow-hidden shadow-sm">
                  <img
                    src={demo}
                    alt="Fabric detail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-20 h-20 rounded-xl overflow-hidden shadow-sm">
                  <img
                    src={demo}
                    alt="Scarf folded"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-20 h-20 rounded-xl overflow-hidden shadow-sm">
                  <img
                    src={demo}
                    alt="Cotton plant"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Trust Badges */}
        <div className="mt-8 lg:mt-[-2rem] lg:ml-auto lg:w-[65%] relative z-20">
          <div className="bg-[#fcfaf8] rounded-2xl p-6 flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-white/50">
            <div className="flex items-center space-x-4 flex-1 justify-center border-r border-gray-200">
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#5a644c]">
                <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div className="text-xs font-semibold leading-tight text-gray-700">
                Secure
                <br />
                Payment
              </div>
            </div>

            <div className="flex items-center space-x-4 flex-1 justify-center border-r border-gray-200">
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#5a644c]">
                <Truck className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div className="text-xs font-semibold leading-tight text-gray-700">
                Free Shipping
                <br />
                Over $100
              </div>
            </div>

            <div className="flex items-center space-x-4 flex-1 justify-center">
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#5a644c]">
                <RefreshCcw className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div className="text-xs font-semibold leading-tight text-gray-700">
                Easy Returns
                <br />
                30 Days
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loome;
