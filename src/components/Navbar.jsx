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
                
                <ul className="flex gap-3 mr-2">
                    <li className="hover:scale-110 hover:cursor-pointer transition-transform p-3 rounded-2xl">Home</li>
                    <li className="hover:scale-110 hover:cursor-pointer transition-transform p-3 rounded-2xl">About</li>
                    <li className="hover:scale-110 hover:cursor-pointer transition-transform p-3 rounded-2xl">Contact</li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar