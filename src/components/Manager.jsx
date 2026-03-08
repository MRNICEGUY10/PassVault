import React from "react";
import { useRef } from "react";

const Manager = () => {
    const eyeref = useRef()

    const showPassword = () => {
        if (eyeref.current.src.includes("icons/eye_cross.png")) {
            eyeref.current.src = "icons/eye.png"
        }
        else {
            eyeref.current.src = "icons/eye_cross.png"
        }
    }


    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-size-[6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>

            <div className="mycontainer">
                <div className="flex flex-col items-center p-4 gap-4">

                    <h1 className="text-4xl text-center font-bold">
                        <span className="text-green-700">&lt; </span>
                        Pass
                        <span className="text-green-700">Vault /&gt;</span>
                    </h1>
                    <p className="text-center text-lg text-green-800">Your own password manager</p>

                    <input placeholder="Enter website url" className="border-2 px-3 py-1 rounded-2xl border-green-500 w-full" type="text" />
                    <div className="flex gap-4">
                        <input placeholder="Enter username" className="border-2 px-3 py-1 rounded-2xl border-green-500 w-full" type="text" />

                        <div className="relative w-full">
                            <input placeholder="Enter password" className="border-2 px-3 py-1 rounded-2xl border-green-500 w-full" type="text" />
                            <span className="absolute right-3 top-1 cursor-pointer" onClick={showPassword}>
                                <img ref={eyeref} width={25} src="icons/eye.png" alt="eye" />
                            </span>
                        </div>

                    </div>
                    <button className="flex justify-center items-center cursor-pointer p-2 bg-green-400 rounded-full w-fit hover:bg-green-500 transition-colors border border-green-900">
                        <lord-icon
                            src="https://cdn.lordicon.com/tsrgicte.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password
                    </button>
                </div>
            </div>
        </>
    )
}

export default Manager