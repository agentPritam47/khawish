import React from "react";

const Footer = () => {
  return (
    <div className="min-h-[60vh] w-full bg-[#F7ECEB] py-8">
      <div className="min-h-[35vh] w-[90%] lg:w-[80vw] mx-auto flex flex-col lg:flex-row py-5 border-b border-amber-950">
        <div className="w-full lg:w-[35%] flex justify-center lg:justify-start items-center mb-8 lg:mb-0">
          <div className="flex justify-center items-center gap-2">
            <div className="h-fit w-16 sm:w-20 lg:w-28 pr-2">
              <img src="/eshop/Gulz-brown.svg" alt="" className="w-full h-full object-contain" />
            </div>
            <p className="text-amber-950 text-base sm:text-lg lg:text-2xl pl-3 border-l border-amber-950">
              QUEEN OF HEARTS
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[20%] flex flex-col gap-2 mb-8 lg:mb-0 items-center lg:items-start">
          <h1 className="text-lg sm:text-xl lg:text-2xl pb-3 sm:pb-5">Contact Us</h1>
          <div className="flex gap-1 items-center">
            <i className="ri-phone-line text-lg sm:text-xl text-amber-950"></i>
            <p className="text-amber-950 text-sm sm:text-base">+91 9884039111</p>
          </div>
          <div className="flex gap-1 items-center">
            <i className="ri-mail-fill text-xl sm:text-2xl text-amber-950"></i>
            <p className="text-amber-950 text-sm sm:text-base">admin@khwaahish.com</p>
          </div>
          <div className="flex gap-1 mt-2">
            <i className="ri-instagram-line text-xl sm:text-2xl text-amber-950 px-1 cursor-pointer hover:opacity-80"></i>
            <i className="ri-facebook-fill text-xl sm:text-2xl text-amber-950 px-1 cursor-pointer hover:opacity-80"></i>
            <i className="ri-youtube-fill text-xl sm:text-2xl text-amber-950 px-1 cursor-pointer hover:opacity-80"></i>
            <i className="ri-whatsapp-line text-xl sm:text-2xl text-amber-950 px-1 cursor-pointer hover:opacity-80"></i>
          </div>
        </div>
        <div className="w-full lg:w-[25%] flex flex-col gap-2 mb-8 lg:mb-0 items-center lg:items-start">
          <h1 className="text-lg sm:text-xl lg:text-2xl pb-3 sm:pb-5">Store Address</h1>
          <div className="flex gap-1 items-center">
            <i className="ri-map-pin-line text-lg sm:text-xl text-amber-950"></i>
            <p className="text-amber-950 text-sm sm:text-base">Khwaahish Diamonds</p>
          </div>
          <p className="text-amber-950 text-sm sm:text-base text-center lg:text-left px-4 lg:px-0">
            No: 53/2, C.P. Ramaswamy Road, Abiramapuram,Chennai, Tamil Nadu
            600018
          </p>
          <p className="text-amber-950 text-sm sm:text-base cursor-pointer hover:underline">Show in Google Maps </p>
        </div>
        <div className="w-full lg:w-[20%] flex flex-col gap-2 items-center lg:items-start">
          <h1 className="text-lg sm:text-xl lg:text-2xl pb-3 sm:pb-5">Quick Links</h1>
          <p className="text-amber-950 text-sm sm:text-base cursor-pointer hover:underline">Privacy Policy</p>
          <p className="text-amber-950 text-sm sm:text-base cursor-pointer hover:underline">Terms & Conditions</p>
        </div>
      </div>
      <div className="w-[90%] sm:w-[80%] mx-auto min-h-[15vh] sm:h-[20vh] flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-0 py-4">
        <div className="h-full w-full sm:w-[25vw] flex justify-center sm:justify-start">
          <img
            className="w-full max-w-[250px] sm:max-w-none h-full object-contain"
            src="/eshop/payment-logos.avif"
            alt="Payment methods"
          />
        </div>
        <p className="text-amber-950 font-light text-sm sm:text-base text-center sm:text-right">
          © 2025 | HTML Sitemap Designed for Khwaahish, All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
