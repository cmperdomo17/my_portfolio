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
        <section className={`flex justify-center flex-col h-[180vh] md:h-[230vh] ${darkMode ? 'bg-gradient-to-b from-black to-slate-950' : 'bg-gradient-to-b from-slate-300 to-slate-200'}`}>
            <div className="flex justify-center flex-row items-center max-w-[700px] mx-auto gap-2 md:gap-28">
                <div className={`${darkMode ? 'text-white' : 'text-slate-900'} mx-2`}>
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
                        <a href="tel:+573107209419" className={`p-2 px-3 mr-1 md:mr-4 mt-4 text-xl rounded-full hover:scale-125 transition-all duration-500 bg-blue-600 text-white flex items-center justify-center`}>
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
                <figure className="mx-auto">
                    <img 
                        src={`${process.env.PUBLIC_URL}/me.png`} 
                        alt="Mario" 
                        className={`w-32 h-32 md:w-48 md:h-48 rounded-full hover:scale-105 transition-all ease-out duration-500 bg-blue-600`}/>
                </figure>          
            </div>

            {/* About Me */}
            <div className="flex justify-center flex-row items-center mt-20 max-w-[350px] md:max-w-[700px] mx-auto mb-12 ">
                <div className={`${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    <h1 className={`text-2xl md:text-4xl font-bold font-Onest mb-4`}>
                        About Me
                    </h1>

                    <p className={`text-sm md:text-lg font-Onest text-pretty`}>
                        +15 años de experiencia como Desarrollador Web. Actualmente soy Creador de Contenido y Divulgador sobre Programación. Vivo en Barcelona, España. He trabajado en diferentes entornos: desde acelerar el desarrollo de start-ups hasta liderando equipos de empresas multinacionales.
                    </p>
                </div>
            </div>

            {/* Experience */}
            <div className="flex justify-center flex-row items-center max-w-[350px] md:max-w-[700px] mx-auto mb-12">
                <div className={`${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    <h1 className={`text-2xl md:text-4xl font-bold font-Onest mb-4`}>
                        Experience
                    </h1>

                    <p className={`text-sm md:text-lg font-Onest text-pretty`}>
                        Streamer de programación más visto en Español en Twitch. +1 millón de seguidores entre todas mis redes sociales. Reconocido por Google, Microsoft y GitHub por mi impacto en la comunidad de desarrolladores.
                    </p>
                </div>
            </div>

            {/* Education */}
            <div className="flex justify-center flex-row items-center max-w-[350px] md:max-w-[700px] mx-auto mb-12">
                <div className={`${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    <h1 className={`text-2xl md:text-4xl font-bold font-Onest mb-4`}>
                        Education
                    </h1>

                    <p className={`text-sm md:text-lg font-Onest text-pretty`}>
                        Ingeniero de Sistemas, Universidad del Cauca. &nbsp; | &nbsp; Desarrollador Web Full Stack, Platzi. &nbsp; | &nbsp; Desarrollador Web Full Stack, FreeCodeCamp.
                    </p>
                </div>
            </div>

            {/* Projects */}
            <div className="flex justify-center flex-row items-center max-w-[350px] md:max-w-[700px] mx-auto mb-12">
                <div className={`${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    <h1 className={`text-2xl md:text-4xl font-bold font-Onest mb-4`}>
                        Projects
                    </h1>

                    <p className={`text-sm md:text-lg font-Onest text-pretty`}>
                        Streamer de programación más visto en Español en Twitch. +1 millón de seguidores entre todas mis redes sociales. Reconocido por Google, Microsoft y GitHub por mi impacto en la comunidad de desarrolladores.
                    </p>
                </div>
            </div>

            {/* Skills */}
            <div className="flex justify-center flex-row items-center max-w-[350px] md:max-w-[700px] mx-auto mb-12">
                <div className={`${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    <h1 className={`text-2xl md:text-4xl font-bold font-Onest mb-4`}>
                        Skills
                    </h1>

                    <p className={`text-sm md:text-lg font-Onest text-pretty`}>
                        Streamer de programación más visto en Español en Twitch. +1 millón de seguidores entre todas mis redes sociales. Reconocido por Google, Microsoft y GitHub por mi impacto en la comunidad de desarrolladores.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default AboutMe