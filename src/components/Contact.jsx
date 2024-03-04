import React, { useContext } from "react";
import Links from "./Links";
import { ThemeContext } from './Theme';
import InputContact from "./InputContact";

import { FiPhone, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <section className={`flex justify-center flex-col font-Onest h-full pt-40 md:pt-28 pb-10 md:pb-28 ${darkMode ? 'bg-gradient-to-b from-slate-950 to-slate-900' : 'bg-gradient-to-b from-slate-200 to-slate-100'}`}>
            <div className="flex justify-center flex-row items-center max-w-[700px] mx-10 md:mx-auto gap-2 md:gap-28">
                <div className={`${darkMode ? 'text-white' : 'text-slate-900'} mr-0 md:mr-3`}>
                    <h1 className={`text-2xl md:text-4xl font-bold font-Onest mb-2`}>
                        Contact Me
                    </h1>

                    <h2 className={`text-lg md:text-xl font-Onest text-pretty my-6 ${darkMode ? 'text-slate-300' : ' text-gray-700'}`}>
                        Feel free to contact me any time. I will get back to you as soon as I can!
                    </h2>

                    <h2 className={`flex flex-col text-lg md:text-xl font-Onest mb-2 ${darkMode ? 'text-slate-300' : ' text-gray-700'}`}>
                        <strong className={`${darkMode ? 'text-white' : 'text-slate-900'}`}> Email </strong> carlosmarioperdomo555@gmail.com 
                        <strong className={`${darkMode ? 'text-white' : 'text-slate-900'} mt-2`}> Phone </strong> +57 310 720 9419
                    </h2>

                    <div className="flex">
                        {/* Email */}
                        <Links href="mailto: carlosmarioperdomo555@gmail.com "><FiMail size={18} /></Links>
                        {/* Phone */}
                        <Links href="tel:+573187209419"><FiPhone size={18} /></Links>
                        {/* Linkedin */}
                        <Links href="https://www.linkedin.com/in/mario-perdomo-ramos-28506b251/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={18} /></Links>
                        {/* Github */}
                        <Links href="https://github.com/cmperdomo17" target="_blank" rel="noopener noreferrer"><FaGithub size={18} /></Links>
                    </div>
                </div>
            </div>

            {/* Text Area and Inputs */}
            <InputContact />

        </section>
    )
}

export default Contact