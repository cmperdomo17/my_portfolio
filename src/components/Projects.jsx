import React, { useContext } from "react";
import { ThemeContext } from './Theme';
import MyProjects from "./MyProjects";

const Projects = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <section className={`flex justify-center flex-col h-full pt-32 pb-28 font-Onest ${darkMode ? 'bg-gradient-to-b from-zinc-950 to-slate-950' : 'bg-gradient-to-b from-slate-200 to-slate-100'}`}>
            <div className="flex justify-center">
                <div className={`text-2xl md:text-4xl font-Onest font-bold pb-10 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                    <h1>My Projects</h1>
                </div>
            </div>

            <section className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 justify-center mx-4 md:mx-24 gap-10">
                <MyProjects />
            </section>
        </section>
    )
}

export default Projects