import React, { useContext } from "react";
import { ThemeContext } from './Theme';

const InputContact = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className="flex justify-center flex-col mt-10 md:flex-row items-center md:max-w-[700px] mx-auto gap-6">
            <div className="flex flex-col items-center">
                <input placeholder="Username" className={`m-4 bg-transparent border-none outline-none max-w-xs px-5 py-2 text-base font-Onest rounded-full shadow-inner  ${darkMode ? 'text-white shadow-blue-400 border-blue-400' : 'text-slate-900 shadow-slate-500'}`} name="text" type="text" />
                <input placeholder="Email" className={` bg-transparent border-none outline-none max-w-xs px-5 py-2 text-base font-Onest rounded-full shadow-inner  ${darkMode ? 'text-white shadow-blue-400 border-blue-400' : 'text-slate-900 shadow-slate-500'}`} name="text" type="text" />
            </div>

            <div className="flex flex-col md:flex-row items-center">
                <textarea placeholder="Message" className={` mx-2 bg-transparent border-none outline-none overflow-auto max-w-xs px-10 py-6 md:p-6 text-base text-pretty font-Onest rounded-3xl shadow-inner resize-none  ${darkMode ? 'text-white shadow-blue-400 border-blue-400' : 'text-slate-900 shadow-slate-500'}`} name="text" type="text" />
                <button 
                    className={`btn-send p-2 px-4 m-4 text-lg font-Onest font-semibold rounded-full mt-10 md:my-0 ${darkMode ? 'bg-blue-400 text-slate-900' : 'bg-blue-600 text-white'}`} 
                    onClick={() => alert("Mensaje enviado ")}
                    type="submit"
                >
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                            </svg>
                        </div>
                    </div>
                    <span className="font-Onest">Enviar</span>
                </button>
            </div>
        </div>
    );

}

export default InputContact;