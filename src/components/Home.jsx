import React, { useContext } from "react";
import { ThemeContext } from './Theme';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import InputContact from "./InputContact";
import MyProjects from "./MyProjects";

const Home = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
    
    <section className={`flex flex-col justify-center h-full pt-32 md:pt-28 ${darkMode ? 'bg-gradient-to-b from-zinc-950 to-slate-950' : 'bg-gradient-to-b from-slate-200 to-slate-100'}`}>
        
        <Link to='/about' className="flex justify-center pb-6">
            <img 
                src={`/me.png`} 
                alt="Mario" 
                className={`w-40 h-40 md:w-44 md:h-44 rounded-full hover:scale-105 transition-all ease-out duration-500 ${darkMode ? 'bg-blue-400 ' : 'bg-blue-600 '}`}
            />
        </Link>

        <div className="font-Onest text-center pb-32">

            <div className="flex justify-center">
                <h1 className={`text-4xl md:text-6xl font-bold ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                    Hi, I'm <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Mario!</span>
                </h1>
            </div>
            
            <div className="flex justify-center">
                <h1 className={`text-sm md:text-xl font-Menlo ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                    Systems Engineer and Frontend Developer
                </h1>
            </div>

            <div className="pt-10">
                <div className={`text-sm md:text-lg mx-10 md:mx-auto max-w-[600px] font-Onest ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                    <p className="text-pretty">
                        <strong>Frontend Developer</strong> with two years of experience, <strong>Systems Engineering</strong> student at 
                        <a href="https://www.unicauca.edu.co/" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline font-semibold`}> University of Cauca</a>.
                    </p>
                </div>
            </div>

            <div className="flex justify-center pb-10 md:pb-8 pt-8">

                <Link to="/contact" className={`p-2 px-4 m-4 text-lg font-semibold rounded-full hover:scale-100 md:hover:scale-110 transition-all duration-500 ${darkMode ? 'bg-blue-400 text-slate-900' : 'bg-blue-600 text-white'}`}>
                    Contact Me!
                </Link>

                <a href="www.linkedin.com/in/carlos-mario-perdomo-ramos-28506b251" target="_blank" rel="noopener noreferrer" className={`p-2 px-3 m-4 text-xl rounded-full hover:scale-110 md:hover:scale-125 transition-all duration-500 ${darkMode ? 'bg-blue-400 text-slate-900' : 'bg-blue-600 text-white'} flex items-center justify-center`}>
                    <FaLinkedin size={25} />
                </a>

                <a href="https://github.com/cmperdomo17" target="_blank" rel="noopener noreferrer" className={`p-2 px-3 m-4 text-xl rounded-full hover:scale-110 md:hover:scale-125 transition-all duration-500 ${darkMode ? 'bg-blue-400 text-slate-900' : 'bg-blue-600 text-white'} flex items-center justify-center`}>
                    <FaGithub size={25} />
                </a>
            </div>

            <div className="flex justify-center">
                <div className={`text-2xl md:text-4xl font-Onest font-semibold mb-14 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    <h1>
                        My Projects
                    </h1>
                </div>
            </div>

            <section className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 justify-center mx-4 md:mx-24 gap-10">

                <MyProjects />
                
            </section>
            
            <div className="flex justify-center">
                <div className={`text-2xl md:text-4xl font-Onest font-semibold mt-20 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    <h1>
                        Contact Me
                    </h1>
                </div>
            </div>

            <InputContact />

        </div>
    </section>
    )
}

export default Home;