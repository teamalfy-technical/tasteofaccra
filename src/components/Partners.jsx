import React from 'react';
import PartnerSlider from './PartnerSlider';

const Tour = () => {
  return (
    <div className=' w-[98%] m-auto flex flex-col text-center justify-center pt-[50px] bg-white'>
      <h1 className='font-bold text-[40px] md:text-[60px] lg:text-[76px]'>About Sponsors</h1>
      <p className='w-[90%] m-auto font-semibold text-[18px] md:text-[26px]'>Get to know the faces behind the Brands and Sponsors</p>
      <div className='lg:mx-6'>
        <PartnerSlider />
      </div>
    </div>
  );
}

export default Tour;
