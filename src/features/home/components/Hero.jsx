import React from "react";
import decoration from "../../../Assets/hero/decoration.jpg";
import fragrance from "../../../Assets/hero/fragranceimg.jpg";
import makeup from "../../../Assets/hero/makeup.jpg";
import { ShoppingBag } from "lucide-react";
import Container from "../../../components/ui/Container";

function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-[#FFF7F7] to-pink-50 overflow-hidden">
      <Container>
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#e31870]/5 rounded-full mix-blend-multiply filter blur-2xl animate-pulse opacity-60"></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-[#e31870]/5 rounded-full mix-blend-multiply filter blur-2xl delay-700 opacity-40"></div>
        </div>

        {/* Main Content Grid */}
        <div className="relative py-6 lg:py-12">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            
              {/* Left Text Content */}
<div className="space-y-6 text-center lg:text-left pt-0 lg:mt-20">
              {/* Tagline */}
              <div className="inline-block px-3 py-1.5 bg-white/85 backdrop-blur-sm border border-pink-100 rounded-full shadow-sm">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-900">
                  <ShoppingBag className="w-4 h-4 text-[#e31870]" />
                  Your favorite collections await
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.15] text-gray-900 tracking-tight">
                Create Your 
                <span className="block mt-2 text-[#e31870] font-bold">
                  Amazing Looks & Living
                </span>
              </h1>

              {/* Description Paragraph */}
              <p className="max-w-xl text-base text-gray-600 mx-auto lg:mx-0 leading-relaxed">
                Discover our curated selection of premium lifestyle products
                that transform your everyday experiences into moments of sheer luxury.
              </p>

              {/* Buttons */}
              <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row lg:justify-start">
                <button className="w-48 rounded-full main-btn before:bg-softbeige bg-[#e31870] text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 py-3">
                  <span className="z-10">Explore Now</span>
                </button>
                <button className="w-48 rounded-full bg-transparent main-btn text-[#e31870] hover:text-white before:bg-[#e31870] border-2 border-[#e31870] font-semibold transition-all duration-300 py-3">
                  <span className="z-10">View Catalog</span>
                </button>
              </div>

            </div>
            
            {/* Right Side Images */}
            <div className="relative hidden grid-cols-2 gap-6 lg:grid">
              <div className="transform translate-y-6">
                <div className="grid gap-6">
                  <div className="p-5 transition-shadow bg-white shadow-md rounded-2xl hover:shadow-xl">
                    <div className="aspect-square bg-gradient-to-br from-[#e31870]/10 to-pink-50 rounded-xl flex items-center justify-center">
                      <img src={makeup} alt="makeupImage" className="max-w-full h-auto"/>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="grid gap-6">
                  <div className="p-5 transition-shadow bg-white shadow-md rounded-2xl hover:shadow-xl">
                    <div className="aspect-square bg-gradient-to-br from-pink-50 to-[#e31870]/10 rounded-xl flex items-center justify-center">
                      <img
                        src={fragrance}
                        alt="fragranceImage"
                        className="w-40 max-w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="p-5 transition-shadow bg-white shadow-md rounded-2xl hover:shadow-xl">
                    <div className="aspect-square bg-gradient-to-br from-purple-50 to-[#e31870]/10 rounded-xl flex items-center justify-center">
                      <img src={decoration} alt="decorationImage" className="max-w-full h-auto"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
