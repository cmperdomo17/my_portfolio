import React, { useContext } from "react";
import { ThemeContext } from './Theme';

const NavBar = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div>
            <nav className={`flex justify-between items-center pt-2 px-20 ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-300 text-slate-950'}`}>

                <div className="font-ubuntu-mono font-bold text-center cursor-pointer">
                    <h1 className="text-3xl hover:scale-95 transition-all ease-out ">
                        Mario
                    </h1>
                </div>

                <div className="flex items-center space-x-4 ">
                    <a href="#about" className="font-ubuntu-mono font-bold text-lg hover:scale-95 transition-all ease-out">
                        About
                    </a>
                    <a href="#projects" className="font-ubuntu-mono font-bold text-lg hover:scale-95 transition-all ease-out">
                        Projects
                    </a>
                    <a href="#contact" className="font-ubuntu-mono font-bold text-lg hover:scale-95 transition-all ease-out">
                        Contact
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;