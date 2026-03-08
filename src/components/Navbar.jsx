import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-slate-800">
            <div className="mycontainer flex justify-between items-center h-20 text-white">

                <div className="logo font-bold ml-2 text-xl">
                    <span className="text-green-500">&lt; </span>
                    Pass
                    <span className="text-green-500">Vault /&gt;</span>
                </div>

                <button className="flex bg-white p-2 gap-2 justify-center items-center border border-white rounded-full hover:bg-slate-100 hover:scale-105 transition-all cursor-pointer">
                    <lord-icon
                        src="https://cdn.lordicon.com/jjxzcivr.json"
                        trigger="hover"
                        stroke="bold"
                        colors="primary:#5c230a,secondary:#5c230a">
                    </lord-icon>
                    <span className="text-black font-bold">Github</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar