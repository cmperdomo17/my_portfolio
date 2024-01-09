import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Home = () => {
    return (
    
    <div className="flex flex-col justify-center items-center h-screen bg-slate-300">
        
        <button className="p-2 px-4 m-4 bg-blue-500 text-white rounded-full shadow hover:bg-blue-400 hover:scale-95 transition-colors duration-300">
            <FaSun size={25} />
        </button>

        <div className="font-ubuntu-mono font-bold text-center cursor-pointer">
            <h1 className="text-5xl text-white hover:scale-95 transition-all ease-out">
                Welcome to My Portfolio
            </h1>
            <h1 className="text-8xl text-blue-500 hover:scale-95 transition-all ease-out">
                Mario Dev
            </h1>
        </div>
    </div>

    )
}

export default Home;