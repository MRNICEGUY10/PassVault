import React from "react";

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white fixed bottom-0 w-full flex justify-center items-center gap-4 h-15">
            <div className="logo font-bold ml-2 text-xl">
                <span className="text-green-500">&lt; </span>
                Pass
                <span className="text-green-500">Vault /&gt;</span>
            </div>
            <div className="flex justify-center items-center gap-1.5">Created with <img src="icons/heart.png" width={25} alt="love" /> by Niceguy</div>
        </footer>
    )
}

export default Footer