import React, { useContext } from "react";
import { ThemeContext } from './Theme';
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <section className={`flex justify-center flex-col h-full py-28 md:py-28 font-Onest ${darkMode ? 'bg-gradient-to-b from-slate-950 to-slate-900' : 'bg-gradient-to-b from-slate-200 to-slate-100'}`}>
            <div className="flex justify-center">
                <div className={`text-2xl md:text-4xl font-Onest font-bold pb-10 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                    <h1>My Projects</h1>
                </div>
            </div>

            <section className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 justify-center mx-4 md:mx-24 gap-10">
                <ProjectCard 
                    title="ToDo App" 
                    description="A toDo List, where you can mark tasks as completed and much more" 
                    imgURL={`${process.env.PUBLIC_URL}/7.png`} 
                    githubURL={'https://github.com/cmperdomo17/to-do-app'}
                    visitURL={'https://thetodoapp777.netlify.app/'}
                />

                <ProjectCard 
                    title="Digital Notary" 
                    description="Digital notary where you can request procedures online" 
                    imgURL={`${process.env.PUBLIC_URL}/8.png`}
                    githubURL={'https://github.com/cmperdomo17/alba-luz-web-page-app'}
                    visitURL={'https://albaluzramos.netlify.app/'} 
                />

                
                <ProjectCard 
                    title="Text Decrypter"
                    description="Text decrypter using JavaScript. Challenge from Alura ONE" 
                    imgURL={`${process.env.PUBLIC_URL}/9.png`} 
                    githubURL={'https://github.com/cmperdomo17/Encriptador-JS'}
                    visitURL={'https://encriptador-mariodev.vercel.app/'}
                />

                <ProjectCard 
                    title="Personal Page" 
                    description="Personal Page using only HTML5, CSS3 and JavaScript" 
                    imgURL={`${process.env.PUBLIC_URL}/10.png`} 
                    githubURL={'https://github.com/cmperdomo17/personal-page-mariodev'}
                    visitURL={'https://mariodev-page.vercel.app/'}
                />
            </section>
        </section>
    )
}

export default Projects