import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import pulsing from '../assets/images/lotties/pulsing-circle.json';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Newsletter = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Subscribed with email: ${email}`);
        setEmail('');
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: pulsing,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div id='newsletter' className='flex h-[500px] flex-col w-[90%] m-auto justify-center items-center text-center mt-28 relative'>
            <div className='fixed inset-0 z-[-1] opacity-15'>
                <Lottie
                    options={defaultOptions}
                    height={800}
                    width={800}
                    className='w-full h-full object-cover'
                />
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" className='relative z-10'>
                <h1 className='text-[40px] md:text-[60px] lg:text-[80px] font-bold mt-[66px]'>Join Our Newsletter</h1>
                <p className='text-[20px] md:text-[26px] font-bold mt-[18px]'>Sign up now to receive exclusive updates and special offers by subscribing to Our Newsletter.</p>
                <div className='flex items-center w-full justify-center m-auto mb-10'>
                    <form onSubmit={handleSubmit} className='flex flex-col md:flex-row items-center gap-4 mt-[40px]'>
                        <input
                            placeholder='Enter your email'
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            className="text-[16px] md:text-[20px] text-black px-4 h-[40px] md:h-[55px] py-4 bg-white border border-black rounded-2xl placeholder-style sm:w-full md:w-[480px] flex-1"
                            required
                        />
                        <button
                            type="submit"
                            className="inline-flex px-8 md:px-12 py-3 border rounded-2xl text-white bg-Green text-[16px] md:text-[20px] hover:bg-Pink hover:text-white transition duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Newsletter;
