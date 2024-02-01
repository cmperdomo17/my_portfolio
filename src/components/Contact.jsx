import React, { useContext } from "react";
import { ThemeContext } from './Theme';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <section className={`flex justify-center flex-col h-full pt-40 md:pt-28 ${darkMode ? 'bg-gradient-to-b from-slate-950 to-slate-900' : 'bg-gradient-to-b from-slate-200 to-slate-100'}`}>
            <div className="flex justify-center flex-row items-center max-w-[700px] mx-20 md:mx-auto gap-2 md:gap-28">
                <div className={`${darkMode ? 'text-white' : 'text-slate-900'} mr-0 md:mr-3`}>
                    <h1 className={`text-xl md:text-4xl font-bold font-Onest mb-2`}>
                        Contact Me
                    </h1>

                    <h2 className={`text-sm md:text-xl font-Onest text-pretty my-6 ${darkMode ? 'text-slate-300' : ' text-gray-700'}`}>
                        Feel free to contact me any time. I will get back to you as soon as I can!
                    </h2>

                    <h2 className={`flex flex-col text-sm md:text-xl font-Onest mb-2 ${darkMode ? 'text-slate-300' : ' text-gray-700'}`}>
                        <strong className={`${darkMode ? 'text-white' : 'text-slate-900'}`}> Email </strong> carlosmarioperdomo555@gmail.com 
                        <strong className={`${darkMode ? 'text-white' : 'text-slate-900'} mt-2`}> Phone </strong> +57 310 720 9419
                    </h2>

                    <div className="flex">
                        {/* Email */}
                        <a href="mailto: carlosmarioperdomo555@gmail.com " className={`p-2 mr-1 md:mr-4 mt-4 text-xl rounded-full hover:scale-110 md:hover:scale-125 transition-all duration-500 ${darkMode ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white'} flex items-center justify-center`}>
                            <FiMail size={18} />
                        </a>
                        {/* Phone */}
                        <a href="tel:+573187209419" className={`p-2 mr-1 md:mr-4 mt-4 text-xl rounded-full hover:scale-110 md:hover:scale-125 transition-all duration-500 ${darkMode ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white'} flex items-center justify-center`}>
                            <FiPhone size={18} />
                        </a>
                        {/* Linkedin */}
                        <a href="https://www.linkedin.com/in/mario-perdomo-ramos-28506b251/" target="_blank" rel="noopener noreferrer" className={`p-2 mr-1 md:mr-4 mt-4 text-xl rounded-full hover:scale-110 md:hover:scale-125 transition-all duration-500 ${darkMode ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white'} flex items-center justify-center`}>
                            <FaLinkedin size={18} />
                        </a>
                        {/* Github */}
                        <a href="https://github.com/cmperdomo17" target="_blank" rel="noopener noreferrer" className={`p-2 mr-1 md:mr-4 mt-4 text-xl rounded-full hover:scale-110 md:hover:scale-125 transition-all duration-500 ${darkMode ? 'bg-blue-600 text-white' : 'bg-slate-900 text-white'}  flex items-center justify-center`}>
                            <FaGithub size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Text Area and Inputs */}
            <div className="flex justify-center flex-col md:flex-row items-center md:max-w-[700px] mx-auto pt-14 gap-10 pb-20">
                <div className="flex flex-col items-center">
                    <input placeholder="Username" className={`m-4 bg-transparent border-none outline-none max-w-xs px-5 py-2 text-lg font-Onest rounded-full shadow-inner  ${darkMode ? 'text-white shadow-blue-400 border-blue-400' : 'text-slate-900 shadow-slate-500'}`} name="text" type="text" />
                    <input placeholder="Email" className={` bg-transparent border-none outline-none max-w-xs px-5 py-2 text-lg font-Onest rounded-full shadow-inner  ${darkMode ? 'text-white shadow-blue-400 border-blue-400' : 'text-slate-900 shadow-slate-500'}`} name="text" type="text" />
                </div>

                <div className="flex flex-col md:flex-row items-center">
                    <textarea placeholder="Message" className={` mx-2 bg-transparent border-none outline-none overflow-auto max-w-xs px-10 py-6 md:p-6 text-lg text-pretty font-Onest rounded-3xl shadow-inner resize-none  ${darkMode ? 'text-white shadow-blue-400 border-blue-400' : 'text-slate-900 shadow-slate-500'}`} name="text" type="text" />
                    <button className={`p-2 px-4 m-4 text-lg font-Onest font-semibold rounded-full hover:scale-100 md:hover:scale-110 transition-all duration-500 ${darkMode ? 'bg-blue-400 text-slate-900' : 'bg-blue-600 text-white'}`}>
                        Send
                    </button>
                </div>


            </div>

        </section>
    )
}

export default Contact