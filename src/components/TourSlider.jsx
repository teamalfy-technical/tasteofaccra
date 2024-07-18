import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { tourCards } from '../constants/index.js';
import Pin from '../assets/images/icons/pin.svg';
import Arrow from './Arrow.jsx';
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

const TourSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        Aos.init();
    }, [])

    const sliderSettings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        centermode: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        className: 'tour-slides',
        nextArrow: <SampleNextArrow to="next"/>,
        prevArrow: <SamplePrevArrow to="prev" />,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out" className="flex flex-col w-full m-auto">
            <Slider {...sliderSettings} className='w-full'>
                {tourCards.map((card, index) => (
                    <div
                        key={index}
                        className={`flex card-container cursor-pointer justify-center mb-14 ${
                            index === currentSlide ? 'enlarged' : ''
                        }`}
                    >
                        <div
                            style={{ "--image-url": `url(${card.image})` }}
                            className={`flex flex-col card-container w-[85%] m-auto bg-center rounded-3xl xl:h-[380px] h-[350px] justify-between mt-4 text-center pt-6 bg-cover bg-[image:var(--image-url)] ${
                                index === currentSlide ? 'enlarged-card' : ''
                            }`}
                        >
                            <div className='w-full flex justify-end px-6 '>
                                <Arrow />
                            </div>
                            <div className='rounded-b-3xl h-[120px] p-4 backdrop-blur'>
                                <h1 className='text-white text-start font-bold text-[24px] md:text-[30px] lg:text-[35px]'>{card.title}</h1>
                            </div>
                        </div>
                        <div className='rounded-full border-2 inline-flex px-6 py-2 justify-center items-center mt-[40px] hover:bg-Green hover:text-white'>
                            <img src={Pin} alt='pin' className='w-6 h-6 pt-1 ' />
                            <p className='text-[20px] font-bold p-0 m-0'>{card.description}</p>
                        </div>
                        
                    </div>
                ))}
            </Slider>
            
        </div>
    );
};

export default TourSlider;