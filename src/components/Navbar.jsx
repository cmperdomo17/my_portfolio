import React, { useContext } from "react";
import { ThemeContext } from './Theme';

const NavBar = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div>
            <nav className={`flex justify-between items-center pt-4 px-20 ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-300 text-slate-950'}`}>

                <div className="font-ubuntu-mono font-bold text-center cursor-pointer">
                    <h1 className="text-2xl hover:scale-110 transition-all ease-out ">
                        &lt; mario.<span className="text-blue-500">dev </span>/&gt;
                    </h1>
                </div>

                <div className="flex items-center space-x-12 font-ubuntu-mono font-bold text-lg">
                    <a href="#about" className=" hover:scale-125 transition-all ease-out">
                        About
                    </a>
                    <a href="#projects" className="hover:scale-125 transition-all ease-out">
                        Projects
                    </a>
                    <a href="#contact" className="hover:scale-125 transition-all ease-out">
                        Contact
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;