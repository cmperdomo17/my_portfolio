import React, { useContext } from "react";
import Links from "./Links";
import { ThemeContext } from './Theme';

import { MdLocationOn } from 'react-icons/md';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiReact } from 'react-icons/si';
import { IoPrint } from "react-icons/io5";

const AboutMe = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <section className={`flex justify-center flex-col h-full pt-40 md:pt-28 ${darkMode ? 'bg-gradient-to-b from-slate-950 to-slate-900' : 'bg-gradient-to-b from-slate-200 to-slate-100'}`}>
            <div className="flex justify-center flex-row items-center max-w-[700px] mx-auto gap-2 md:gap-28">
                <div className={`${darkMode ? 'text-white' : 'text-slate-900'} mr-0 md:mr-3`}>
                    {/* Title */}
                    <h1 className={`text-xl md:text-4xl font-bold font-Onest mb-2`}>
                        Carlos Mario Perdomo
                    </h1>
                    {/* Label */}
                    <h2 className={`text-sm md:text-2xl font-Menlo mb-2 ${darkMode ? 'text-slate-300' : ' text-gray-700'}`}>
                        Systems Engineer Student
                    </h2>
                    {/* Span of city and region */}
                    <span className={`text-xs md:text-lg font-Menlo ${darkMode ? 'text-slate-300' : ' text-gray-700'}`}>
                        <MdLocationOn size={18} className="inline mr-1 md:mr-2" />
                        Pitalito - Huila, Colombia
                    </span>
                    {/* Footer with anchor tags */}
                    <div className="flex">
                        {/* Email */}
                        <Links href="mailto: carlosmarioperdomo555@gmail.com "><FiMail size={18} /></Links>
                        {/* Phone */}
                        <Links href="tel:+573187209419"><FiPhone size={18} /></Links>
                        {/* Linkedin */}
                        <Links href="https://www.linkedin.com/in/mario-perdomo-ramos-28506b251/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={18} /></Links>
                        {/* Github */}
                        <Links href="https://github.com/cmperdomo17" target="_blank" rel="noopener noreferrer"><FaGithub size={18} /></Links>
                        {/* Print */}
                        <Links href={`${process.env.PUBLIC_URL}/cv.pdf`} download="cv.pdf"><IoPrint size={18} /></Links>
                    </div>

                </div>
                {/* Profile Picture */}
                <figure className="mx-auto">
                    <img 
                        src={`${process.env.PUBLIC_URL}/me.png`} 
                        alt="Mario" 
                        className={`w-32 h-32 md:w-48 md:h-48 rounded-full hover:scale-185 transition-all ease-out duration-500 bg-blue-600`}/>
                </figure>          
            </div>

            {/* About Me */}
            <div className="flex justify-center flex-row items-center mt-12 max-w-[350px] md:max-w-[700px] mx-auto mb-12 ">
                <div className={`${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    <h1 className={`text-xl md:text-3xl font-bold font-Onest mb-4`}>
                        About Me
                    </h1>

                    <p className={`text-sm md:text-lg font-Menlo text-pretty ${darkMode ? 'text-slate-300' : ' text-gray-700'}`}>
                        I am currently studying the seventh semester of Systems Engineering. I am passionate about frontend development. I live in Pitalito, Huila. I have worked on various web pages remotely and have participated in collaborative projects.
                    </p>
                </div>
            </div>

            {/* Experience */}
            <div className="flex justify-center flex-row items-center max-w-[350px] md:max-w-[700px] mx-auto mb-12">
                <div className={`${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    <h1 className={`text-xl md:text-3xl font-bold font-Onest mb-4`}>
                        Experience
                    </h1>

                    <p className={`text-sm md:text-lg font-Menlo text-pretty ${darkMode ? 'text-slate-300' : ' text-gray-700'}`}>
                        I have 1 year of work experience doing frontend for web pages for various clients.
                    </p>
                </div>
            </div>

            {/* Education */}
            <div className="flex justify-center flex-row items-center max-w-[350px] md:max-w-[700px] mx-auto mb-12">
                <div className={`${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    <h1 className={`text-xl md:text-3xl font-bold font-Onest mb-4`}>
                        Education
                    </h1>

                    <p className={`text-sm md:text-lg font-Menlo text-pretty ${darkMode ? 'text-slate-300' : ' text-gray-700'}`}>
                        Ingeniero de Sistemas, Universidad del Cauca. &nbsp; | &nbsp; Desarrollador Web Frontend Jr. &nbsp; | &nbsp; Desarrollador Web Full Stack, Oracle ONE.
                    </p>
                </div>
            </div>

            {/* Projects */}
            <div className="flex justify-center flex-row items-center max-w-[350px] md:max-w-[700px] mx-auto mb-12">
                <div className={`${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    <h1 className={`text-xl md:text-3xl font-bold font-Onest mb-4`}>
                        Projects
                    </h1>
                    <ul className={`text-sm md:text-lg font-Onest text-pretty list-disc pl-5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        <li className="mb-3">
                            <strong className={`${darkMode ? 'text-white' : 'text-gray-700'}`}>Gym Website:</strong> <span className={`${darkMode ? 'text-slate-300' : 'text-gray-700'} font-Menlo`}>Developed a responsive gym website with workout routines and exercises.</span>
                        </li>
                        <li className="mb-3">
                            <strong className={`${darkMode ? 'text-white' : 'text-gray-700'}`}>Interactive Notary Services Website:</strong> <span className={`${darkMode ? 'text-slate-300' : 'text-gray-700'} font-Menlo`}>Created an interactive and responsive website for notary services.</span>
                        </li>
                        <li className="mb-3">
                            <strong className={`${darkMode ? 'text-white' : 'text-gray-700'}`}>History of Colombia Website:</strong> <span className={`${darkMode ? 'text-slate-300' : 'text-gray-700'} font-Menlo`}>Designed a website providing information about the history of Colombia.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Skills */}
            <div className="flex justify-center text-center flex-row max-w-[350px] md:max-w-[700px] mx-auto mb-12">
                <div className={`${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    <h1 className={`${darkMode ? 'text-white' : 'text-slate-900'} text-xl md:text-3xl font-bold font-Onest mb-4`}>
                        Skills
                    </h1>

                    <div className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} flex justify-around gap-6 text-4xl`}>
                        <SiHtml5 />
                        <SiCss3 />
                        <SiJavascript />
                        <SiTailwindcss />
                        <SiReact />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutMe