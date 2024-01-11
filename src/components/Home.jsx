import React, { useContext } from "react";
import { ThemeContext } from './Theme';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
    
    <div className={`flex flex-col justify-center h-[170vh] md:h-[200vh] ${darkMode ? 'bg-gradient-to-b from-black to-slate-950' : 'bg-gradient-to-b from-slate-300 to-slate-200'}`}>
        
        <Link to='/about' className="flex justify-center pb-4">
            <img 
                src={`${process.env.PUBLIC_URL}/me2.png`} 
                alt="Mario" 
                className={`w-40 h-40 md:w-52 md:h-52 rounded-full hover:scale-105 transition-all ease-out duration-500 ${darkMode ? 'bg-blue-400 ' : 'bg-slate-200 '}`}
            />
        </Link>

        <div className="font-Onest font-bold text-center">

            <div className="flex justify-center">
                <h1 className={`text-4xl md:text-6xl ${darkMode ? 'text-white' : 'text-slate-900'} animate-typing1 animation-fill-forwards overflow-hidden border-r-4 w-12 text-nowrap`}>
                    Hi, I'm <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Mario!</span>
                </h1>
            </div>
            
            <div className="flex justify-center">
                <h1 className={`text-xl md:text-3xl animate-typing2 animation-fill-forwards ${darkMode ? 'text-white' : 'text-slate-900'} overflow-hidden border-r-4 w-25 text-nowrap`}>
                    Systems Engineer
                </h1>
            </div>

            <div className="pt-10">
                <div className={`text-base md:text-xl font-Onest ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    <p>
                        I'm a software developer with a passion for learning new technologies and building cool stuff.
                    </p>
                    <p>
                        I'm a seventh semester Systems Engineering student at <a href="https://www.unicauca.edu.co/" className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>University of Cauca</a>.
                    </p>
                </div>
            </div>

            <div className="flex justify-center pb-4 pt-4">

                <Link to="/contact" className={`p-2 px-4 m-4 text-lg rounded-full hover:scale-110 transition-all duration-500 ${darkMode ? 'bg-blue-400 text-slate-900' : 'bg-blue-600 text-white'}`}>
                    Contact Me!
                </Link>

                <a href="https://www.linkedin.com/in/mario-perdomo-ramos-28506b251/" target="_blank" rel="noopener noreferrer" className={`p-2 px-3 m-4 text-xl rounded-full hover:scale-125 transition-all duration-500 ${darkMode ? 'bg-blue-400 text-slate-900' : 'bg-blue-600 text-white'} flex items-center justify-center`}>
                    <FaLinkedin size={25} />
                </a>

                <a href="https://github.com/cmperdomo17" target="_blank" rel="noopener noreferrer" className={`p-2 px-3 m-4 text-xl rounded-full hover:scale-125 transition-all duration-500 ${darkMode ? 'bg-blue-400 text-slate-900' : 'bg-blue-600 text-white'} flex items-center justify-center`}>
                    <FaGithub size={25} />
                </a>
            </div>

            <div className="flex justify-center">
                <div className={`text-lg md:text-5xl font-Onest ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    <h1>
                        Recent Projects
                    </h1>

                    <p>
                        My projects are available <br /> on my portfolio <br /> and on my GitHub. <br /> Check them out! <br /> Hola <br /> Mundo <br /> Como <br /> Estan <br /> Todes <br /> Jeje <br /> Y tu?
                    </p>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Home;