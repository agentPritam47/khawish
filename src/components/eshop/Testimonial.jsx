import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="w-full py-12 bg-[#F7ECEB]">
      <h2 className="text-center text-2xl md:text-4xl font-light uppercase text-amber-950 tracking-widest mb-8">Customer Reviews</h2>
      
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-[90%] md:w-[70%] mx-auto"
      >
        <SwiperSlide>
          <div className="p-8 text-center bg-white">
            <p className="text-amber-900 italic mb-4">"Absolutely stunning jewelry and excellent service. The quality exceeded my expectations."</p>
            <p className="font-semibold">- Sarah M.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="p-8 text-center bg-white">
            <p className="text-amber-900 italic mb-4">"The craftsmanship is impeccable. I receive compliments every time I wear my necklace."</p>
            <p className="font-semibold">- Jennifer R.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="p-8 text-center bg-white">
            <p className="text-amber-900 italic mb-4">"Fast delivery and the packaging was beautiful. Will definitely shop here again!"</p>
            <p className="font-semibold">- Michael P.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="p-8 text-center bg-white">
            <p className="text-amber-900 italic mb-4">"The lifetime exchange policy gives me peace of mind. Great customer service."</p>
            <p className="font-semibold">- Rachel K.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="p-8 text-center bg-white">
            <p className="text-amber-900 italic mb-4">"Their diamond selection is exceptional. The experts helped me choose the perfect piece."</p>
            <p className="font-semibold">- David L.</p>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-center gap-2 mt-4">
        <div className={`h-3 w-3 rounded-full ${activeIndex % 2 === 0 ? 'bg-amber-800' : 'bg-white border border-red-500'}`}></div>
        <div className={`h-3 w-3 rounded-full ${activeIndex % 2 === 1 ? 'bg-amber-800' : 'bg-white border border-red-500'}`}></div>
      </div>
    </div>
  )
}

export default Testimonial