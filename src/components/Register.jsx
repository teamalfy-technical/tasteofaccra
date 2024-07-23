import React, { useState, useEffect, useRef } from 'react';
import { registerCards } from '../constants/index.js';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Aos from 'aos';
import axios from 'axios';
import 'aos/dist/aos.css';

const Register = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [buttonColor, setButtonColor] = useState('bg-Green');
    const formRef = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: ''
    });

    const handleChange = (field, value) => {
        setFormData((prevState) => ({ ...prevState, [field]: value }));
    };

    const sendCall = (e) => {
        e.preventDefault();
        const endpoint = `https://0291-102-176-65-183.ngrok-free.app/api/v1/call/send-call`;

        axios.post(endpoint, {
            name: formData.name,
            email: formData.email,
            phone_number: formData.number,
        })
            .then(response => {
                if (response.status === 201) {
                    setShowModal(true);
                    setModalMessage('Thank you for registering. We will contact you shortly.');
                    setButtonColor('bg-green-500');
                } else {
                    setShowModal(true);
                    setModalMessage('The registration was successful, but something went wrong.');
                    setButtonColor('bg-yellow-500');
                }
            })
            .catch((error) => {
                setShowModal(true);
                setModalMessage('The registration failed. Please try again.');
                setButtonColor('bg-red-500');
            });
    };

    function onCloseModal() {
        setShowModal(false);
        setFormData({
            name: '',
            email: '',
            number: '',
        });
        setButtonColor('bg-Green');
    }

    return (
        <div id="register" className='flex flex-col w-[98%] m-auto'>
            <h1 className='font-bold text-[25px] md:text-[76px] text-center'>Register A Seat Today</h1>
            <p className='w-[90%] m-auto text-center font-semibold text-[20px] md:text-[26px] mb-6'>Excited to be a part of our upcoming tour? Take the first step and sign up today to guarantee your spot on the adventure!</p>

            <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" className='w-full flex flex-col md:flex-row p-4 mt-[33px] py-8 rounded-3xl bg-[#1F2A22] gap-10'>
                <div className='w-full md:w-[50%]'>
                    <div className="w-full flex flex-col bg-white mx-auto py-8 px-24 border rounded-3xl">
                        <h1 className="text-[28px] font-bold mb-[24px]">Send In Your Name</h1>
                        <form ref={formRef} onSubmit={sendCall} className='flex flex-col gap-6 md:gap-12'>
                            <div className="">
                                <input
                                    placeholder='Full Name'
                                    type="text"
                                    id="name"
                                    name="user_name"
                                    value={formData.name}
                                    onChange={(event) => handleChange('name', event.target.value)}
                                    className="w-full text-[16px] text-black px-3 h-[30px] md:h-[40px] py-2 bg-white border border-gray-300 rounded-xl placeholder-style"
                                    required
                                />
                            </div>

                            <div className="">
                                <input
                                    placeholder='Email'
                                    type="email"
                                    id="email"
                                    name="user_email"
                                    value={formData.email}
                                    onChange={(event) => handleChange('email', event.target.value)}
                                    className="w-full text-[16px] text-black px-3 h-[30px] md:h-[40px] py-2 border bg-white border-gray-300 rounded-xl placeholder-style"
                                    required
                                />
                            </div>
                            <PhoneInput
                                defaultCountry="GH"
                                placeholder='Phone Number'
                                id="number"
                                name="user_number"
                                value={formData.number}
                                onChange={(value) => handleChange('number', value)}
                                className="w-full text-[16px] text-black px-3 h-[30px] md:h-[40px] py-2 border bg-white border-gray-300 rounded-xl placeholder-style"
                                required
                            />

                            <button
                                type="submit"
                                className={`mt-[14px] inline-flex self-center px-12 md:px-16 py-2 border border-black rounded-xl text-black text-[14px] hover:text-white transition duration-300 hover:bg-Green`}
                            >
                                Register Your Seat
                            </button>
                        </form>
                        {showModal && (
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                                <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                                    <div className="mt-3 text-center">
                                        <div className="mt-2 px-7 py-3">
                                            <p className="text-sm text-gray-500">{modalMessage}</p>
                                        </div>
                                        <div className="items-center px-4 py-3">
                                            <button
                                                id="ok-btn"
                                                onClick={onCloseModal}
                                                className={`${buttonColor} text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2`}
                                            >
                                                OK
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className='w-full md:w-[50%] grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-8 md:gap-x-4'>
                    {registerCards.map((card, index) => (
                        <div key={index} onClick={() => window.location.href = card.source} className='card-container flex flex-col rounded-3xl bg-white justify-center items-center p-4'>
                            <div className='rounded-full border-[10px] md:border-[14px] border-gray-300 p-2'>
                                <img src={card.image} alt={card.title} className='w-[30px] h-[30px]' />
                            </div>
                            <h1 className='text-[18px] font-bold text-start mt-2'>{card.title}</h1>
                            <p className='w-full font-semibold text-center text-[16px] mt-2'>{card.description}</p>
                            <p className='w-full font-semibold text-center text-[16px] '>{card.description1}</p>
                            <p className='w-full font-semibold text-center text-[16px] '>{card.description2}</p>
                            <p className='w-full font-semibold text-center text-[16px] '>{card.description3}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Register;
