import React, { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from './Theme';

const Home = () => {
    const { darkMode, handleClick } = useContext(ThemeContext);

    return (
    
    <div className={`flex flex-col justify-center items-center h-screen ${darkMode ? 'bg-slate-950' : 'bg-slate-300'}`}>
        
        <button 
            onClick={handleClick} 
            className={`p-2 m-4 rounded-full shadow hover:scale-95 transition-colors duration-300 ${darkMode ? 'bg-gray-700 text-white' : 'bg-blue-500 text-white'}`}>
            {darkMode ? <FaMoon size={25} /> : <FaSun size={25} />}
        </button>

        <div className="font-ubuntu-mono font-bold text-center cursor-pointer">
            <div className="flex justify-center">
                <h1 className={`text-5xl hover:scale-110 transition-all ease-out animate-typing25 animation-fill-forwards ${darkMode ? 'text-white' : 'text-slate-900'} overflow-hidden border-r-4 w-25 text-nowrap`}>
                    Welcome to my Portfolio!
                </h1>
            </div>
            <div className="flex justify-center">
                <h1 className="text-8xl text-blue-500 hover:scale-110 transition-all ease-out animate-typing12 animation-fill-forwards overflow-hidden border-r-4 w-12 text-nowrap">
                    Mario Dev
                </h1>
            </div>
        </div>
    </div>

    )
}

export default Home;