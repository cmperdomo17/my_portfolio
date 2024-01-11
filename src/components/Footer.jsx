import React, { useContext } from "react";
import { ThemeContext } from './Theme';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const Footer = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <footer className={`flex justify-center items-center text-center h-14 ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-200 text-slate-950'}`}>
            
            <p className="text-md font-Onest flex items-center justify-center space-x-2">
                
                <span className={`${darkMode ? 'text-zinc-300' : 'text-slate-950'}`}>
                    Built by <span className={`${darkMode ? 'text-white' : 'text-slate-950'} font-semibold text-xl`}>mario</span>.
                    <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} font-semibold text-xl`}>dev</span> with
                </span>

                <FaReact size={32}className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />

                <span className={`${darkMode ? 'text-zinc-300' : 'text-slate-950'}`}>and</span>

                <SiTailwindcss size={32} className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                
            </p>
        </footer>
    );
}

export default Footer;