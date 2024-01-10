import React, { useContext } from "react";
import { ThemeContext } from './Theme';
import { FaSun, FaMoon } from "react-icons/fa";

const NavBar = () => {
    const { darkMode, handleClick } = useContext(ThemeContext);

    return (
        <div>
            <nav className={`flex fixed w-full justify-between items-center pt-4 pb-2 px-20 backdrop-blur-2xl md:flex md:justify-between md:items-center ${darkMode ? 'bg-transparent text-white' : 'bg-transparent text-slate-950'}`}>

                <div className="font-ubuntu-mono font-bold text-center cursor-pointer">
                    <h1 className="text-2xl hover:scale-110 transition-all ease-out ">
                        &lt; mario.<span className={`${darkMode ? 'text-blue-300' : 'text-blue-600' }`}>dev </span>/&gt;
                    </h1>
                </div>

                <div className="flex items-center space-x-12 font-ubuntu-mono font-bold text-lg">
                    
                    <a href="#about" className={`hover:scale-125  ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600' } transition-all ease-out`}>
                        About
                    </a>
                    <a href="#projects" className={`hover:scale-125  ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600' } transition-all ease-out`}>
                        Projects
                    </a>
                    <a href="#contact" className={`hover:scale-125  ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600' } transition-all ease-out`}>
                        Contact
                    </a>
                    <button 
                        onClick={handleClick} 
                        className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-white' : 'bg-blue-500 text-white'}`}>
                        {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;