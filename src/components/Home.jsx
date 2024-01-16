import React, { useContext } from "react";
import { ThemeContext } from './Theme';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { FaExternalLinkAlt } from "react-icons/fa";
// import { PROJECTS } from '../data/ProjectsData';

const Home = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
    
    <div className={`flex flex-col justify-center h-[110vh] md:h-[130vh] ${darkMode ? 'bg-gradient-to-b from-black to-slate-950' : 'bg-gradient-to-b from-slate-300 to-slate-200'}`}>
        
        <Link to='/about' className="flex justify-center pb-4">
            <img 
                src={`${process.env.PUBLIC_URL}/me2.png`} 
                alt="Mario" 
                className={`w-40 h-40 md:w-52 md:h-52 rounded-full hover:scale-105 transition-all ease-out duration-500 ${darkMode ? 'bg-blue-400 ' : 'bg-white '}`}
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
                        I'm a seventh semester Systems Engineering student at <a href="https://www.unicauca.edu.co/" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>University of Cauca</a>.
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
                <div className={`text-lg md:text-5xl font-Onest pb-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    <h1>
                        Recent Projects
                    </h1>
                </div>
            </div>

            {/* <div className="projects-grid">
                {
                    PROJECTS.map((project) => (
                        <article key={project.id}>
                            <a href={`project/${project.id}`}>
                                <img src={`${process.env.PUBLIC_URL}/mockup.png`} alt={project.title} className=" h-40 w-60" />
                                <div className="overlay">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <ul className="tags">
                                        {project.tags.map((tag, index) => (
                                            <li key={index}>{tag}</li>
                                        ))}
                                    </ul>
                                    <div className="view-details">
                                        See details
                                        <FaExternalLinkAlt />
                                    </div>
                                </div>
                            </a>
                        </article>
                    ))
                }
            </div> */}
        </div>
    </div>
    )
}

export default Home;