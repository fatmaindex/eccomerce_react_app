import React from "react";
import Icon from "../ui/Icon";

function Footer() {
  return (
    <footer className="w-full bg-lightPink text-base-content px-6 sm:px-12 lg:px-20 pt-16 pb-6">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Main Footer Flex */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 mb-8">
          
          {/* Brand & Socials Column */}
          <div className="flex flex-col items-start space-y-4">
            <h1 className="text-4xl font-bold text-pink tracking-wide">
              Lumea
            </h1>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" aria-label="Facebook" className="p-2 bg-white/50 rounded-full hover:bg-pink hover:text-white transition-all duration-300">
                <Icon name="facebook" className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Youtube" className="p-2 bg-white/50 rounded-full hover:bg-pink hover:text-white transition-all duration-300">
                <Icon name="youtube" className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="p-2 bg-white/50 rounded-full hover:bg-pink hover:text-white transition-all duration-300">
                <Icon name="instagram" className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Tiktok" className="p-2 bg-white/50 rounded-full hover:bg-pink hover:text-white transition-all duration-300">
                <Icon name="tiktok" className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Snapchat" className="p-2 bg-white/50 rounded-full hover:bg-pink hover:text-white transition-all duration-300">
                <Icon name="snapchat" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns Container */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-24">
            
            {/* Services Nav */}
            <div className="flex flex-col space-y-3">
              <h6 className="text-pink font-bold text-base tracking-wider uppercase">Services</h6>
              <a href="#" className="text-gray-700 hover:text-pink transition-colors text-sm">Branding</a>
              <a href="#" className="text-gray-700 hover:text-pink transition-colors text-sm">Design</a>
              <a href="#" className="text-gray-700 hover:text-pink transition-colors text-sm">Marketing</a>
              <a href="#" className="text-gray-700 hover:text-pink transition-colors text-sm">Advertisement</a>
            </div>

            {/* Contact Us Nav */}
            <div className="flex flex-col space-y-3">
              <h6 className="text-pink font-bold text-base tracking-wider uppercase">Contact Us</h6>
              <a href="#" className="text-gray-700 hover:text-pink transition-colors text-sm">Find My Order</a>
              <a href="#" className="text-gray-700 hover:text-pink transition-colors text-sm">Popular FAQs</a>
              <a href="#" className="text-gray-700 hover:text-pink transition-colors text-sm">Shipping & Returns</a>
              <a href="#" className="text-gray-700 hover:text-pink transition-colors text-sm">Press kit</a>
            </div>

            {/* Legal Nav */}
            <div className="flex flex-col space-y-3 col-span-2 sm:col-span-1">
              <h6 className="text-pink font-bold text-base tracking-wider uppercase">Legal</h6>
              <a href="#" className="text-gray-700 hover:text-pink transition-colors text-sm">Terms of use</a>
              <a href="#" className="text-gray-700 hover:text-pink transition-colors text-sm">Privacy policy</a>
              <a href="#" className="text-gray-700 hover:text-pink transition-colors text-sm">Cookie policy</a>
            </div>

          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-4 border-t border-pink/20 text-center">
          <h6 className="text-sm font-medium text-gray-700">Developed By ❤️ FATMA</h6>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
