import React, { useState, useRef } from 'react';
import { Button, Modal, TextInput } from "flowbite-react";
import emailjs from 'emailjs-com';
import config from '../dev/config.js';

const SponsorForm = ({ isOpen, setIsOpen }) => {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [buttonColor, setButtonColor] = useState('bg-Green');
    const formRef = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
    });

    const handleChange = (field, value) => {
        setFormData((prevState) => ({ ...prevState, [field]: value }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = config;

        emailjs.sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            formRef.current,
            PUBLIC_KEY
        ).then(
            () => {
                setShowModal(true);
                setModalMessage('Email successfully sent!');
                setButtonColor('bg-green-500'); // Set button color to green on success
            },
            (error) => {
                setShowModal(true);
                setModalMessage('Failed to send email. Please try again.');
                setButtonColor('bg-red-500'); // Set button color to red on failure
            },
        );
    };

    function onCloseModal() {
        setIsOpen(false);
        setFormData({
            name: '',
            email: '',
            company: '',
        });
        setButtonColor('bg-Green'); // Reset button color
    }

    return (
        <Modal show={isOpen} size="md" onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>
                <form className="space-y-6" ref={formRef} onSubmit={sendEmail}>
                    <h3 className="text-3xl font-medium text-gray-900 dark:text-white text-center">Become a Sponsor</h3>
                    <div>
                        <TextInput
                            id="name"
                            type="text"
                            name="user_name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={(event) => handleChange('name', event.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <TextInput
                            id="email"
                            type="email"
                            name="user_email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={(event) => handleChange('email', event.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <TextInput
                            id="company"
                            type="text"
                            name="user_company"
                            placeholder="Name of the company"
                            value={formData.company}
                            onChange={(event) => handleChange('company', event.target.value)}
                            required
                        />
                    </div>
                    <div className="w-full flex justify-center">
                        <Button type="submit" className={`${buttonColor} hover:bg-pink-500`}>Sponsor</Button>
                    </div>
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
            </Modal.Body>
        </Modal>
    );
};

export default SponsorForm;
