import React, { useEffect, useState } from "react";

const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage >= 2) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 z-[100] w-full shadow-md transition-transform duration-300 ${show ? 'opacity-[1] pointer-events-auto' : 'opacity-[0] pointer-events-none'}`}>
      <div className="block md:hidden py-2 w-full bg-[#f7ebeb]">
        <h3 className="text-[#4F2426] uppercase text-xs md:text-base text-center">Visit Brand Website</h3>
      </div>
      <div className="w-full h-8 md:h-10 bg-[#4F2426] p-2 px-4 md:px-8">
        <div className="h-full w-full relative">
          <h3 className="text-white uppercase text-xs md:text-base hidden md:block">Visit Brand Website</h3>
          <div className="w-[80%] md:w-[35%] h-full absolute left-1/2 -translate-x-1/2 top-0">
            <marquee behavior="" direction="" className="text-white text-xs md:text-base">
              Free & Insured Shipping Across India | International Shipping +91
              9884039111
            </marquee>
          </div>
        </div>
      </div>
      <div className="h-16 md:h-[12vh] bg-[#f7ebeb] w-full flex items-center justify-between p-2 px-4 md:px-8">
        <div className="h-6 w-6 md:h-8 md:w-8">
          <img
            className="h-full w-full object-contain"
            src="/eshop/menu.svg"
            alt=""
          />
        </div>

        <div className="flex justify-center items-center gap-1 md:gap-2">
          <div className="h-fit w-16 md:w-28 pr-2">
            <img src="/eshop/Gulz-brown.svg" alt="" />
          </div>
          <p className="text-[#4F2426] text-sm md:text-2xl pl-2 md:pl-3 border-l border-[#4F2426]">
            QUEEN OF HEARTS
          </p>
        </div>

        <div className="w-12 md:w-16 flex justify-between">
          <i className="ri-search-line text-xl md:text-2xl"></i>
          <i className="ri-user-3-fill text-xl md:text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Nav;
