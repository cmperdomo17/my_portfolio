import React, { useContext } from "react";
import { ThemeContext } from './Theme';
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <section className={`flex justify-center flex-col h-full py-28 md:py-28 ${darkMode ? 'bg-gradient-to-b from-slate-950 to-slate-900' : 'bg-gradient-to-b from-slate-200 to-slate-100'}`}>
            <div className="flex justify-center">
                <div className={`text-2xl md:text-4xl font-Onest font-bold pb-10 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    <h1>Recent Projects</h1>
                </div>
            </div>

            <section className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 justify-center mx-4 md:mx-24 gap-6">
                <ProjectCard 
                    title="ToDo App" 
                    description="A toDo App, where you can mark tasks as completed and much more" 
                    imgURL={`${process.env.PUBLIC_URL}/7.png`} 
                />

                <ProjectCard 
                    title="Digital Notary" 
                    description="Digital notary where you can request procedures online" 
                    imgURL={`${process.env.PUBLIC_URL}/8.png`} 
                />

                
                <ProjectCard 
                    title="Digital Notary" 
                    description="Digital notary where you can request procedures online" 
                    imgURL={`${process.env.PUBLIC_URL}/8.png`} 
                />

                <ProjectCard 
                    title="ToDo App" 
                    description="A toDo App, where you can mark tasks as completed and much more" 
                    imgURL={`${process.env.PUBLIC_URL}/7.png`} 
                />
            </section>
        </section>
    )
}

export default Projects