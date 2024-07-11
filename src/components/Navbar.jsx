import React, { useContext } from "react";
import { ThemeContext } from './Theme';
import { FaMoon } from "react-icons/fa";
import {BsSun} from "react-icons/bs";
import { Link } from 'react-router-dom';

const NavBar = () => {
    const { darkMode, handleClick } = useContext(ThemeContext);

    const NavLink = ({ children, to }) => (
        <Link to={to} className={`hover:scale-125 cursor-pointer ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600' } transition-all ease-out`}>
            {children}
        </Link>
    );

    return (
        <div>
            <nav className={`${darkMode ? 'bg-zinc-950 text-slate-200' : 'bg-slate-200 text-slate-950'} fixed top-0 left-0 w-full p-3 z-50`}>
                <div className="flex flex-col md:flex-row justify-between items-center m-auto">
                    <Link to='/' className="font-Onest font-bold text-center cursor-pointer mb-4 md:mb-0 duration-500">
                        <h1 className="text-xl hover:scale-110 transition-all ease-out pl-0 md:pl-24">
                            &lt; mario.<span className={`${darkMode ? 'text-blue-300' : 'text-blue-600' } duration-500`}>dev </span>/&gt;
                        </h1>
                    </Link>

                    <div className={`flex items-center font-Onest font-semibold text-sm duration-500 md:text-base gap-12 pr-0 md:pr-24`}>

                        <NavLink to="/about">
                            About
                        </NavLink>

                        <NavLink to="/projects">
                            Projects
                        </NavLink>

                        <NavLink to="/contact">
                            Contact
                        </NavLink>

                        <button 
                            onClick={handleClick} 
                            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-white' : 'bg-blue-500 text-white'}`}>
                            {darkMode ? <FaMoon size={13} /> : <BsSun size={13} />}
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;