import React, { useContext } from "react";
import { ThemeContext } from './Theme';

const InputContact = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className="flex justify-center flex-col md:flex-row items-center md:max-w-[700px] mx-auto pt-10 gap-4">
            <div className="flex flex-col items-center">
                <input placeholder="Username" className={`m-4 bg-transparent border-none outline-none max-w-xs px-5 py-2 text-base font-Onest rounded-full shadow-inner  ${darkMode ? 'text-white shadow-blue-400 border-blue-400' : 'text-slate-900 shadow-slate-500'}`} name="text" type="text" />
                <input placeholder="Email" className={` bg-transparent border-none outline-none max-w-xs px-5 py-2 text-base font-Onest rounded-full shadow-inner  ${darkMode ? 'text-white shadow-blue-400 border-blue-400' : 'text-slate-900 shadow-slate-500'}`} name="text" type="text" />
            </div>

            <div className="flex flex-col md:flex-row items-center">
                <textarea placeholder="Message" className={` mx-2 bg-transparent border-none outline-none overflow-auto max-w-xs px-10 py-6 md:p-6 text-base text-pretty font-Onest rounded-3xl shadow-inner resize-none  ${darkMode ? 'text-white shadow-blue-400 border-blue-400' : 'text-slate-900 shadow-slate-500'}`} name="text" type="text" />
                <button 
                    className={`p-2 px-4 m-4 text-lg font-Onest font-semibold rounded-full hover:scale-100 md:hover:scale-110 transition-all duration-500 ${darkMode ? 'bg-blue-400 text-slate-900' : 'bg-blue-600 text-white'}`} 
                    onClick={() => alert("Mensaje enviado ")}
                >
                    Send
                </button>
            </div>
        </div>
    );

}

export default InputContact;