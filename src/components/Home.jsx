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

        <div className="flex justify-center py-4">
            <img 
                src={`${process.env.PUBLIC_URL}/me.png`} 
                alt="Mario" 
                className={`rounded-full border-4 ${darkMode ? 'bg-blue-500' : 'bg-slate-200 border-blue-500'}`}
            />
        </div>

        <div className="font-ubuntu-mono font-bold text-center">

            <div className="flex justify-center">
                <h1 className={`text-7xl ${darkMode ? 'text-white' : 'text-slate-900'} hover:scale-110 transition-all ease-out animate-typing1 animation-fill-forwards overflow-hidden border-r-4 w-12 text-nowrap`}>
                    Hi, I'm <span className="text-blue-500">Mario!</span>
                </h1>
            </div>
            
            <div className="flex justify-center">
                <h1 className={`text-3xl hover:scale-110 transition-all ease-out animate-typing2 animation-fill-forwards ${darkMode ? 'text-white' : 'text-slate-900'} overflow-hidden border-r-4 w-25 text-nowrap`}>
                    Systems Engineer
                </h1>
            </div>

            <div className="flex justify-center pt-20">
                <p className={`text-xl hover:scale-110 transition-all ease-out ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    I'm a software developer with a passion for building things
                </p>
            </div>
        </div>
    </div>

    )
}

export default Home;