import React, { useContext } from "react";
import { ThemeContext } from './Theme';
import { FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const AboutMe = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <section className={`flex justify-center h-[100vh] md:h-[110vh] ${darkMode ? 'bg-gradient-to-b from-black to-slate-950' : 'bg-gradient-to-b from-slate-300 to-slate-180'}`}>
            <div className="flex flex-row items-center md:mx-0 mx-4 gap-4 md:gap-24">
                <div className={`${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {/* Title */}
                    <h1 className={`text-xl md:text-4xl font-bold font-Onest mb-4`}>
                        Carlos Mario Perdomo
                    </h1>
                    {/* Label */}
                    <h2 className={`text-sm md:text-2xl mb-2`}>
                        Systems Engineer Student
                    </h2>
                    {/* Span of city and region */}
                    <span className={` text-sm md:text-lg font-ubuntu-mono`}>
                        <MdLocationOn size={18} className="inline mr-2" />
                        Pitalito - Huila, Colombia
                    </span>
                    {/* Footer with anchor tags */}
                    <div className="flex">
                        {/* Email */}
                        <a href="mailto: carlosmarioperdomo555@gmail.com " className={`p-2 px-3 mr-1 md:mr-4 mt-4 text-xl rounded-full hover:scale-125 transition-all duration-500 bg-blue-600 text-white flex items-center justify-center`}>
                            <FiMail size={18} />
                        </a>
                        {/* Phone */}
                        <a href="tel:+573107189419" className={`p-2 px-3 mr-1 md:mr-4 mt-4 text-xl rounded-full hover:scale-125 transition-all duration-500 bg-blue-600 text-white flex items-center justify-center`}>
                            <FiPhone size={18} />
                        </a>
                        {/* Linkedin */}
                        <a href="https://www.linkedin.com/in/mario-perdomo-ramos-28506b251/" target="_blank" rel="noopener noreferrer" className={`p-2 px-3 mr-1 md:mr-4 mt-4 text-xl rounded-full hover:scale-125 transition-all duration-500 bg-blue-600 text-white flex items-center justify-center`}>
                            <FaLinkedin size={18} />
                        </a>
                        {/* Github */}
                        <a href="https://github.com/cmperdomo17" target="_blank" rel="noopener noreferrer" className={`p-2 px-3 mr-1 md:mr-4 mt-4 text-xl rounded-full hover:scale-125 transition-all duration-500 bg-blue-600 text-white flex items-center justify-center`}>
                            <FaGithub size={18} />
                        </a>
                    </div>
                </div>
                {/* Profile Picture */}
                <figure>
                    <img 
                        src={`${process.env.PUBLIC_URL}/me.png`} 
                        alt="Mario" 
                        className={` w-32 h-32 md:w-48 md:h-48 rounded-full hover:scale-105 transition-all ease-out duration-500 bg-blue-600`}/>
                </figure>
            </div>
        </section>
    )
}

export default AboutMe