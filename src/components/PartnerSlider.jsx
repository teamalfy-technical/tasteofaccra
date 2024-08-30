import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { partnerCards } from '../constants/index.js';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return(
      <div onClick={onClick} className={`arrow ${className} custom-prev-arrow`} >
        <AiOutlineArrowLeft className="arrows" style={{color:"white"}}/>
      </div>
    )
}

const SampleNextArrow = (props) => {
    const { className, onClick } = props;
    return(
      <div onClick={onClick} className={`arrow ${className} custom-next-arrow`} >
        <AiOutlineArrowRight className="arrows" style={{color:"white"}}/>
      </div>
    )
}

const PartnerSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        Aos.init();
    }, [])

    const sliderSettings = {
        dots: true,
        infinite: true,
        arrows: true,
        autoplay: true,
        centermode: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'partner-slides',
        nextArrow: <SampleNextArrow to="next"/>,
        prevArrow: <SamplePrevArrow to="prev" />,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 1 },
            },
            {
                breakpoint: 600,
                settings: { 
                    slidesToShow: 1, 
                    arrows: false,  
                },
            },
            {
                breakpoint: 480,
                settings: { 
                    slidesToShow: 1, 
                    arrows: false,  
                },
            },
        ],
    };

    return (
<div data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out" class="flex flex-col w-full m-auto">
    <Slider {...sliderSettings} class="flex w-full">
        {partnerCards.map((card, index) => (
            <div
                key={index}
                class={`flex cursor-pointer mt-[50px] ${
                    index === currentSlide ? 'enlarged' : ''
                }`}
            >
                
                {/* Text and heading on the right side */}
                <div className="flex flex-wrap items-start justify-center w-full p-6 py-0 space-x-4 bg-white shadow-lg py-auto lg:flex-nowrap rounded-3xl">
                    {/* Image Column */}
                    <div
                    style={{ "--image-url": `url(${card.image})` }}
                    className={`w-full lg:w-1/3 rounded-3xl xl:h-[380px] h-[350px] md:h-96 bg-cover bg-[image:var(--image-url)] ${
                        index === currentSlide ? 'enlarged-card' : ''
                    }`}
                    ></div>
                
                    {/* Content Column */}
                    <div className="w-full my-auto pt-5 lg:w-2/3 lg:pl-6 sm:py-4 md:pl-3">
                        <h1 className="text-gray-900 text-start lg:mt-12 font-bold text-[24px] md:text-[30px] lg:text-[35px]">
                            {card.title}
                        </h1>
                        <p className="mt-2 text-start text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]">
                            {card.description}
                        </p>
                        
                        <h2 className="flex text-gray-500 text-start p-0 m-0 font-bold text-[20px] md:text-[22px] lg:text-[25px]">
                            {card.title1}
                        </h2>
                        <p className="text-start text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]">
                            {card.description1}
                        </p>
                        <h2 className="flex text-gray-500 text-start p-0 m-0 font-bold text-[20px] md:text-[22px] lg:text-[25px]">
                            {card.title2}
                        </h2>
                        <p className="text-start text-gray-700 text-[16px] md:text-[18px] lg:text-[20px]">
                            {card.description2}<br/>{card.description3}<br/>{card.description4}<br/>{card.description5}<br/>{card.description6}
                        </p>
                    </div>
                </div>
            </div>
        ))}
    </Slider>
</div>
    );
};

export default PartnerSlider;