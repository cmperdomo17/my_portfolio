import React, { useContext } from "react";
import { ThemeContext } from './Theme';
import { MdLocationOn } from 'react-icons/md';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiReact } from 'react-icons/si';
import { IoPrint } from "react-icons/io5";

const AboutMe = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <section className={`flex justify-center flex-col h-full pt-40 md:pt-28 ${darkMode ? 'bg-gradient-to-b from-slate-950 to-slate-900' : 'bg-gradient-to-b from-slate-200 to-slate-180'}`}>
            <div className="flex justify-center flex-row items-center max-w-[700px] mx-auto gap-2 md:gap-28">
                <div className={`${darkMode ? 'text-white' : 'text-slate-900'} mr-0 md:mr-3`}>
                    {/* Title */}
                    <h1 className={`text-xl md:text-4xl font-bold font-Onest mb-4`}>
                        Carlos Mario Perdomo
                    </h1>
                    {/* Label */}
                    <h2 className={`text-sm md:text-2xl mb-2 ${darkMode ? 'text-slate-200' : ' text-gray-700'}`}>
                        Systems Engineer Student
                    </h2>
                    {/* Span of city and region */}
                    <span className={` text-sm md:text-lg font-ubuntu-mono ${darkMode ? 'text-slate-200' : ' text-gray-700'}`}>
                        <MdLocationOn size={18} className="inline mr-2" />
                        Pitalito - Huila, Colombia
                    </span>
                    {/* Footer with anchor tags */}
                    <div className="flex">
                        {/* Email */}
                        <a href="mailto: carlosmarioperdomo555@gmail.com " className={`p-2 mr-1 md:mr-4 mt-4 text-xl rounded-full hover:scale-125 transition-all duration-500 bg-blue-600 text-white flex items-center justify-center`}>
                            <FiMail size={18} />
                        </a>
                        {/* Phone */}
                        <a href="tel:+573187209419" className={`p-2 mr-1 md:mr-4 mt-4 text-xl rounded-full hover:scale-125 transition-all duration-500 bg-blue-600 text-white flex items-center justify-center`}>
                            <FiPhone size={18} />
                        </a>
                        {/* Linkedin */}
                        <a href="https://www.linkedin.com/in/mario-perdomo-ramos-28506b251/" target="_blank" rel="noopener noreferrer" className={`p-2 mr-1 md:mr-4 mt-4 text-xl rounded-full hover:scale-125 transition-all duration-500 bg-blue-600 text-white flex items-center justify-center`}>
                            <FaLinkedin size={18} />
                        </a>
                        {/* Github */}
                        <a href="https://github.com/cmperdomo17" target="_blank" rel="noopener noreferrer" className={`p-2 mr-1 md:mr-4 mt-4 text-xl rounded-full hover:scale-125 transition-all duration-500 bg-blue-600 text-white flex items-center justify-center`}>
                            <FaGithub size={18} />
                        </a>
                        {/* Print */}
                        <a href={`${process.env.PUBLIC_URL}/cv.pdf`} download="cv.pdf" className={`p-2 mr-1 md:mr-4 mt-4 text-xl rounded-full hover:scale-125 transition-all duration-500 bg-blue-600 text-white flex items-center justify-center`}>
                            <IoPrint size={18} />
                        </a>
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
            <div className="flex justify-center flex-row items-center mt-20 max-w-[350px] md:max-w-[700px] mx-auto mb-12 ">
                <div className={`${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    <h1 className={`text-2xl md:text-3xl font-bold font-Onest mb-4`}>
                        About Me
                    </h1>

                    <p className={`text-sm md:text-lg font-ubuntu-mono text-pretty ${darkMode ? 'text-slate-200' : ' text-gray-700'}`}>
                        I am currently studying the seventh semester of Systems Engineering. I am passionate about frontend development. I live in Pitalito, Huila. I have worked on various web pages remotely and have participated in collaborative projects.
                    </p>
                </div>
            </div>

            {/* Experience */}
            <div className="flex justify-center flex-row items-center max-w-[350px] md:max-w-[700px] mx-auto mb-12">
                <div className={`${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    <h1 className={`text-2xl md:text-3xl font-bold font-Onest mb-4`}>
                        Experience
                    </h1>

                    <p className={`text-sm md:text-lg font-ubuntu-mono text-pretty ${darkMode ? 'text-slate-200' : ' text-gray-700'}`}>
                        I have 1 year of work experience doing frontend for web pages for various clients.
                    </p>
                </div>
            </div>

            {/* Education */}
            <div className="flex justify-center flex-row items-center max-w-[350px] md:max-w-[700px] mx-auto mb-12">
                <div className={`${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    <h1 className={`text-2xl md:text-3xl font-bold font-Onest mb-4`}>
                        Education
                    </h1>

                    <p className={`text-sm md:text-lg font-ubuntu-mono text-pretty ${darkMode ? 'text-slate-200' : ' text-gray-700'}`}>
                        Ingeniero de Sistemas, Universidad del Cauca. &nbsp; | &nbsp; Desarrollador Web Frontend Jr. &nbsp; | &nbsp; Desarrollador Web Full Stack, Oracle ONE.
                    </p>
                </div>
            </div>

            {/* Projects */}
            <div className="flex justify-center flex-row items-center max-w-[350px] md:max-w-[700px] mx-auto mb-12">
                <div className={`${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    <h1 className={`text-2xl md:text-3xl font-bold font-Onest mb-4`}>
                        Projects
                    </h1>
                    <ul className={`text-sm md:text-lg font-Onest text-pretty list-disc pl-5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        <li>
                            <strong className={`${darkMode ? 'text-white' : 'text-gray-700'}`}>Gym Website:</strong> <span className={`${darkMode ? 'text-slate-200' : 'text-gray-700'} font-ubuntu-mono`}>Developed a responsive gym website with workout routines and exercises.</span>
                        </li>
                        <li>
                            <strong className={`${darkMode ? 'text-white' : 'text-gray-700'}`}>Interactive Notary Services Website:</strong> <span className={`${darkMode ? 'text-slate-200' : 'text-gray-700'} font-ubuntu-mono`}>Created an interactive and responsive website for notary services.</span>
                        </li>
                        <li>
                            <strong className={`${darkMode ? 'text-white' : 'text-gray-700'}`}>History of Colombia Website:</strong> <span className={`${darkMode ? 'text-slate-200' : 'text-gray-700'} font-ubuntu-mono`}>Designed a website providing information about the history of Colombia.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Skills */}
            <div className="flex justify-center text-center flex-row max-w-[350px] md:max-w-[700px] mx-auto mb-12">
                <div className={`${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    <h1 className={`${darkMode ? 'text-white' : 'text-slate-900'} text-2xl md:text-3xl font-bold font-Onest mb-4`}>
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