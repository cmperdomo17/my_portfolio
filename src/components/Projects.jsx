import React, { useContext } from "react";
import { ThemeContext } from './Theme';

const Projects = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={`flex flex-col justify-center text-center h-[100vh] md:h-[110vh] ${darkMode ? 'bg-gradient-to-b from-black to-slate-950' : 'bg-gradient-to-b from-slate-300 to-slate-200'}`}>
            <div className="flex justify-center">
                <div className="font-Onest font-bold">
                    <h1 className={`text-4xl md:text-6xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        My Projects
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Projects