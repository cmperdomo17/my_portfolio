import React from "react";

const ProjectCard = ({ title, description, imgURL }) => {
    return (
        <div className="flex justify-center items-center overflow-hidden rounded-2xl cursor-pointer relative">
            <img className="w-full h-full hover:opacity-90" src={imgURL} alt={title} />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-blue-500">{title}</h3>
                <p className="text-white">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;