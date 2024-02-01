import React, { useContext } from "react";
import { ThemeContext } from './Theme';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
    
    <div className={`flex flex-col justify-center h-full pt-40 md:pt-24 ${darkMode ? 'bg-gradient-to-b from-slate-950 to-slate-900' : 'bg-gradient-to-b from-slate-200 to-slate-100'}`}>
        
        <Link to='/about' className="flex justify-center pb-4">
            <img 
                src={`${process.env.PUBLIC_URL}/me.png`} 
                alt="Mario" 
                className={`w-40 h-40 md:w-48 md:h-48 rounded-full hover:scale-105 transition-all ease-out duration-500 ${darkMode ? 'bg-blue-400 ' : 'bg-blue-600 '}`}
            />
        </Link>

        <div className="font-Onest font-bold text-center">

            <div className="flex justify-center">
                <h1 className={`text-4xl md:text-6xl ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                    Hi, I'm <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Mario!</span>
                </h1>
            </div>
            
            <div className="flex justify-center">
                <h1 className={`text-xl md:text-3xl ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                    Systems Engineer
                </h1>
            </div>

            <div className="pt-10">
                <div className={`text-base md:text-xl mx-auto max-w-[700px] font-Onest ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                    <p className="text-pretty">
                        I'm a software developer with a passion for learning new technologies and building cool stuff.
                        I'm a seventh semester Systems Engineering student at <a href="https://www.unicauca.edu.co/" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>University of Cauca</a>.
                    </p>
                </div>
            </div>

            <div className="flex justify-center pb-10 md:pb-8 pt-8">

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
                <div className={`text-2xl md:text-5xl font-Onest pb-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    <h1>
                        Recent Projects
                    </h1>
                </div>
            </div>

            <section className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 justify-center mx-4 md:mx-24 gap-4">        
                <div className="flex justify-center items-center col-start-1 row-start-1 overflow-hidden rounded-2xl cursor-pointer relative">
                    <img className="w-full h-full hover:opacity-90" src={`${process.env.PUBLIC_URL}/7.png`} alt="Card 2" />
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                        <h3 className="text-blue-500">ToDo App</h3>
                        <p className="text-white">A toDo App, where you can mark tasks as completed and much more</p>
                    </div>
                </div>

                <div className="flex justify-center items-center col-start-1 md:col-start-2 row-start-2 md:row-start-1 overflow-hidden rounded-2xl cursor-pointer relative">
                    <img className="w-full h-auto hover:opacity-80" src={`${process.env.PUBLIC_URL}/8.png`} alt="Card 2" />
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                        <h3 className="text-blue-500">Digital Notary</h3>
                        <p className="text-white">Digital notary where you can request procedures online</p>
                    </div>
                </div>
                <div className="flex justify-center items-center col-start-1 md:col-start-1 row-start-3 md:row-start-2 overflow-hidden rounded-2xl cursor-pointer relative">
                    <img className="w-full h-auto hover:opacity-80" src={`${process.env.PUBLIC_URL}/7.png`} alt="Card 3" />
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                        <h3 className="text-blue-500">ToDo App</h3>
                        <p className="text-white">A toDo App, where you can mark tasks as completed and much more</p>
                    </div>
                </div>
                <div className="flex justify-center items-center col-start-1 md:col-start-2 row-start-4 md:row-start-2 overflow-hidden rounded-2xl cursor-pointer relative">
                    <img className="w-full h-auto hover:opacity-80" src={`${process.env.PUBLIC_URL}/8.png`} alt="Card 4" />
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                        <h3 className="text-blue-500">Digital Notary</h3>
                        <p className="text-white">Digital notary where you can request procedures online</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
}

export default Home;