import ProjectCard from "./ProjectCard";

function MyProjects () {
    return (
        <>
            <ProjectCard 
                title="Aluraflix" 
                description="Final challenge of the ONE program from Alura. Video platform using React with TypeScript and TailwindCSS"
                imgURL={`/11.png`} 
                githubURL={'https://github.com/cmperdomo17/aluraflix-react'}
                visitURL={'https://aluraflixweb.vercel.app/'}
            />

            <ProjectCard 
                title="Digital Notary" 
                description="Digital notary where you can request procedures online" 
                imgURL={`/8.png`} 
                githubURL={'https://github.com/cmperdomo17/alba-luz-web-page-app'}
                visitURL={'https://albaluzramos.netlify.app/'}
            />

            <ProjectCard 
                title="Text Decrypter"
                description="Text decrypter using JavaScript. Challenge from Alura ONE" 
                imgURL={`/9.png`} 
                githubURL={'https://github.com/cmperdomo17/Encriptador-JS'}
                visitURL={'https://encriptador-mariodev.vercel.app/'}
            />

            <ProjectCard 
                title="ToDo App" 
                description="A toDo List, where you can mark tasks as completed and much more" 
                imgURL={`/7.png`} 
                githubURL={'https://github.com/cmperdomo17/to-do-app'}
                visitURL={'https://thetodoapp777.netlify.app/'}
            />

        </>
    )
}

export default MyProjects;