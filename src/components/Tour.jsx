import React from 'react';
import TourSlider from './TourSlider';

const Tour = () => {
  return (
    <div className=' w-[98%] m-auto flex flex-col text-center justify-center my-[100px]'>
      <h1 className='font-bold text-[40px] md:text-[60px] lg:text-[76px]'>The Tour</h1>
      <p className='w-[90%] m-auto font-semibold text-[18px] md:text-[26px]'>Discover an extensive selection of immersive experiences that promise to stimulate and captivate your senses, leaving you thoroughly engaged.</p>
      <TourSlider />
    </div>
  );
}

export default Tour;
