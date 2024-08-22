import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tour from '../assets/images/tour-bg.png';
import { workSlider } from '../constants/index.js';
import ButtonSet from './ButtonSet.jsx';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Workwith = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const sliderSettings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        centermode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        className: 'tour-slides',
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 2 },
            },
        ],
    };
    
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div
            id='sponsors'
            style={{ "--image-url": `url(${tour})` }}
            className="w-full h-auto flex flex-col bg-cover bg-no-repeat items-center justify-center bg-center bg-[image:var(--image-url)] py-20">
            <div className='w-[90%] lg:w-[80%] m-auto rounded-3xl backdrop-blur border-gray-300 border-2 text-center mb-5 py-10'>
                <h1 className='text-[32px] sm:text-[50px] lg:text-[76px] font-bold text-white'>Partners</h1>
                <div data-aos="fade-in" data-aos-duration="2000" data-aos-easing="ease-in-out" className="w-[90%] m-auto mt-8 sm:mt-[52px] lg:mt-[60px] justify-center">
                    <Slider {...sliderSettings} className='pl-[8%] m-auto'>
                        {workSlider.map((slide, index) => (
                            <div
                                key={index}
                                className="card-container m-auto sm:w-[50%] lg:w-[25%] flex-shrink-0 flex flex-col items-center justify-between px-4"
                            >
                                <a href={slide.href} rel="noopener noreferrer">
                                    <img 
                                        src={slide.image} 
                                        alt={slide.title} 
                                        className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-white rounded-md border-white border-2" 
                                    />
                                
                                    <div className="z-10 text-start mt-2">
                                        <h2 className="text-white text-[20px] sm:text-[24px] lg:text-[25px] font-bold">{slide.title}</h2>
                                        <p className="text-white text-[14px] sm:text-[16px] lg:text-[18px] font-bold">{slide.description}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <ButtonSet />
        </div>
    );
}

export default Workwith;
