import React from 'react'

const Header = () => {
  return (
    <div className='h-[60vh] md:h-screen w-full relative'>
        {/* <div className=' h-10 w-full bg-red-400 absolute top-0 left-0'></div> */}
        <div className=' h-20 w-full absolute top-0 left-0 flex justify-center items-center'>
            <div className=' flex justify-center items-center gap-2'>
                <div className='h-fit w-28 pr-2'>
                    <img src="/eshop/Gulz-Logo.svg" alt="" />
                </div>
                <p className=' text-white text-2xl  pl-3 border-l border-white '>QUEEN OF HEARTS</p>
            </div>
        </div>
        <img className='hidden md:block h-full w-full object-cover object-left-top' src="/eshop/headerPc.avif" alt="" />
        <img className='md:hidden h-full w-full object-cover object-left-top' src="/eshop/header.avif" alt="" />

    </div>
  )
}

export default Header