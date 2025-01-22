import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonialData = [
    {
      logo: "",
      data: "Seeing the spectacular designs at Khwaahish , my heart really desires to shop there very soon. This entire line is very customized, so lightweight and beautiful.. I am just loving them ",
      image: "/eshop/testimonialPersons/swathi-rekha.avif",
      name: "Swathi Rekha",
      role: "Entrepreneur",
    },
    {
      logo: "",
      data: "I love the new collection Gulz… its simply beautiful. Every single piece is gorgeous, wearable and extremely well made. The entire look and feel is very international by all means. Khwaahish is family to me and their pieces are just stunning. ",
      image: "/eshop/testimonialPersons/jyothi.avif",
      name: "Jyoti",
      role: "Entrepreneur",
    },
    {
      logo: "",
      data: "When it comes to Khwaahish.. its my go to place for smart jewellery. And regarding the collection, I love love the jacket chandelier diamond earrings and the other unique designs. It's so wearable and it's so me.  ",
      image: "/eshop/testimonialPersons/pratibha.avif",
      name: "Pratibha  ",
      role: "Entrepreneur",
    },
    {
      logo: "",
      data: "With Khwaahish my journey started very long ago right from their inception in 2003. This collection  is something very different .. very sleek and elegant pieces. I love all the stuff at Khwaahish usually and its difficult to choose my favourite today. ",
      image: "/eshop/testimonialPersons/Chhavi.avif",
      name: "Dr. Chhavi Kalra  ",
      role: "Singer/Artist",
    },
    {
      logo: "",
      data: "Khwaahish are our family jewellers for every right reason.. Their new collection Gulz, is so very fresh and some of the designs are very interesting too! I am sure I'll find many favourites among them as usual.",
      image: "/eshop/testimonialPersons/Dimple.avif",
      name: "Dimple",
      role: "Home Maker",
    },
  ];

  const [swipe, setSwipe] = useState(window.innerWidth < 768 ? 1 : 3);

  React.useEffect(() => {
    const handleResize = () => {
      setSwipe(window.innerWidth < 768 ? 1 : 3);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full md:h-[100vh] py-12 bg-[#F7ECEB]">
      <h2 className="text-center text-2xl md:text-4xl font-light uppercase text-amber-950 tracking-widest mb-8">
        Customer Reviews
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={swipe}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-[90%] md:w-[80%] mx-auto"
      >
        <SwiperSlide>
          <div className="h-[55vh] cursor-pointer w-full md:w-[25vw] text-center bg-white p-8 flex flex-col justify-between">
            <div>
              <div className=" h-14 w-14 ">
                <img
                  className="w-full h-full object-contain"
                  src="/eshop/testtimonialLogo.svg"
                  alt=""
                />
              </div>
              <p className="text-left mt-5 font-light">
                Seeing the spectacular designs at Khwaahish , my heart really
                desires to shop there very soon. This entire line is very
                customized, so lightweight and beautiful.. I am just loving
                them".{" "}
              </p>
            </div>

            <div className="w-full flex gap-5 items-center">
              <div className=" h-20 w-20 bg-red-500 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/eshop/testtimonialPersons/swathi-rekha.avif"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-amber-900 text-xl text-left">Swathi Rekha</h3>
                <p className="text-sm text-left font-light">Entrepreneur</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[55vh] cursor-pointer w-full md:w-[25vw] text-center bg-white p-8 flex flex-col justify-between">
            <div>
              <div className=" h-14 w-14 ">
                <img
                  className="w-full h-full object-contain"
                  src="/eshop/testtimonialLogo.svg"
                  alt=""
                />
              </div>
              <p className="text-left mt-5 font-light">
                I love the new collection Gulz… its simply beautiful. Every single piece is gorgeous, wearable and extremely well made. The entire look and feel is very international by all means. Khwaahish is family to me and their pieces are just stunning.
              </p>
            </div>

            <div className="w-full flex gap-5 items-center">
              <div className=" h-20 w-20 bg-red-500 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/eshop/testtimonialPersons/jyothi.avif"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-amber-900 text-xl text-left">Jyoti</h3>
                <p className="text-sm text-left font-light">Entrepreneur</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[55vh] cursor-pointer w-full md:w-[25vw] text-center bg-white p-8 flex flex-col justify-between">
            <div>
              <div className=' h-14 w-14 '>
                <img className='w-full h-full object-contain' src="/eshop/testtimonialLogo.svg" alt="" />
              </div>
              <p className="text-left mt-5 font-light">
                When it comes to Khwaahish.. its my go to place for smart
                jewellery. And regarding the collection, I love love the jacket
                chandelier diamond earrings and the other unique designs. It's so
                wearable and it's so me.
              </p>
            </div>

            <div className='w-full flex gap-5 items-center'>
              <div className=" h-20 w-20 bg-red-500 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/eshop/testtimonialPersons/Pratibha.avif"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-amber-900 text-xl text-left">Pratibha</h3>
                <p className="text-sm text-left font-light">Entrepreneur</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[55vh] cursor-pointer w-full md:w-[25vw] text-center bg-white p-8 flex flex-col justify-between">
            <div>
              <div className=' h-14 w-14 '>
                <img className='w-full h-full object-contain' src="/eshop/testtimonialLogo.svg" alt="" />
              </div>
              <p className="text-left mt-5 font-light">
                With Khwaahish my journey started very long ago right from their
                inception in 2003. This collection is something very different
                .. very sleek and elegant pieces. I love all the stuff at
                Khwaahish usually and its difficult to choose my favourite today.
              </p>
            </div>

            <div className='w-full flex gap-5 items-center'>
              <div className=" h-20 w-20 bg-red-500 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/eshop/testtimonialPersons/Chhavi.avif"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-amber-900 text-xl text-left">Dr. Chhavi Kalra</h3>
                <p className="text-sm text-left font-light">Singer/Artist</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-[55vh] cursor-pointer w-full md:w-[25vw] text-center bg-white p-8 flex flex-col justify-between">
            <div>
              <div className=' h-14 w-14 '>
                <img className='w-full h-full object-contain' src="/eshop/testtimonialLogo.svg" alt="" />
              </div>
              <p className="text-left mt-5 font-light">
                Khwaahish are our family jewellers for every right reason.. Their new collection Gulz, is so very fresh and some of the designs are very interesting too! I am sure I'll find many favourites among them as usual.
              </p>
            </div>

            <div className='w-full flex gap-5 items-center'>
              <div className=" h-20 w-20 bg-red-500 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/eshop/testtimonialPersons/Dimple.avif"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-amber-900 text-xl text-left">Dimple</h3>
                <p className="text-sm text-left font-light">Home Maker</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="md:flex hidden justify-center gap-2 mt-4">
        <div
          className={`h-3 w-3 rounded-full ${
            activeIndex % 2 === 0
              ? "bg-amber-800"
              : "bg-white border border-red-500"
          }`}
        ></div>
        <div
          className={`h-3 w-3 rounded-full ${
            activeIndex % 2 === 1
              ? "bg-amber-800"
              : "bg-white border border-red-500"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Testimonial;
