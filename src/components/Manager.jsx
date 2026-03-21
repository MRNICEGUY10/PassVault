import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const eye_ref = useRef()
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])
    const [togglePassword, settogglePassword] = useState(false)

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])

    const copyText = (text) => {
        navigator.clipboard.writeText(text)
        toast('Copied to clipboard !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
    }

    const showPassword = () => {
        if (eye_ref.current.src.includes("icons/eye_cross.png")) {
            eye_ref.current.src = "icons/eye.png"
            settogglePassword(false)
        }
        else {
            eye_ref.current.src = "icons/eye_cross.png"
            settogglePassword(true)
        }
    }

    const savePassword = () => {
        console.log(form)
        if (!form.site || !form.username || !form.password) {
            toast.error("All fields are required!", {
                position: "top-right",
                autoClose: 3000,
                theme: "light"
            });
            return;
        }
        const newEntry = { ...form, id: uuidv4() }
        setpasswordArray([...passwordArray, newEntry])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, newEntry]))
        console.log([...passwordArray, form])
        setForm({ site: "", username: "", password: "" })
    }

    const editPassword = (id) => {
        console.log(id)
        setForm(passwordArray.filter((val) => { return val.id === id })[0])
        setpasswordArray(passwordArray.filter((val) => { return val.id !== id }))
    }

    const deletePassword = (id) => {
        console.log("Deelting ", id)
        setpasswordArray(passwordArray.filter((val) => { return val.id !== id }))
        localStorage.setItem("passwords", JSON.stringify(passwordArray.filter((val) => { return val.id !== id })))
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-size-[6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>

            <div className="mycontainer min-h-screen">
                <div className="flex flex-col items-center p-4 gap-4">

                    <h1 className="text-4xl text-center font-bold">
                        <span className="text-green-700">&lt; </span>
                        Pass
                        <span className="text-green-700">Vault /&gt;</span>
                    </h1>
                    <p className="text-center text-lg text-green-800">Your own password manager</p>

                    <input placeholder="Enter website url" name="site" value={form.site} onChange={handleChange} className="border-2 px-3 py-1 rounded-2xl border-green-500 w-full" type="text" />
                    <div className="flex gap-4 w-full">
                        <input placeholder="Enter username" name="username" value={form.username} onChange={handleChange} className="border-2 px-3 py-1 rounded-2xl border-green-500 w-full" type="text" />

                        <div className="relative w-full">
                            <input placeholder="Enter password" name="password" value={form.password} onChange={handleChange} className="border-2 px-3 py-1 rounded-2xl border-green-500 w-full" type={togglePassword ? "text" : "password"} />
                            <span className="absolute right-3 top-1 cursor-pointer" onClick={showPassword}>
                                <img ref={eye_ref} width={25} src="icons/eye.png" alt="eye" />
                            </span>
                        </div>

                    </div>
                    <button onClick={savePassword} className="flex justify-center items-center gap-2 cursor-pointer p-2 bg-green-400 rounded-full w-fit hover:bg-green-500 transition-colors border border-green-900">
                        <lord-icon
                            src="https://cdn.lordicon.com/tsrgicte.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password
                    </button>
                </div>

                <div className="passwords">
                    <h2 className="text-lg font-bold">Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No passwords to show</div>}
                    {passwordArray.length !== 0 &&
                        <table className="table-auto w-full rounded-lg overflow-hidden">
                            <thead className="bg-green-800 text-white">
                                <tr>
                                    <th className="p-2">Site</th>
                                    <th className="p-2">Username</th>
                                    <th className="p-2">Password</th>
                                    <th className="p-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-green-200">
                                {passwordArray.map((val, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <td className="border border-white text-center p-2">
                                                <div className="flex justify-center items-center gap-2">
                                                    <a href={val.site} target="_blank">{val.site}</a>
                                                    <div onClick={() => { copyText(val.site) }} className="cursor-pointer" title="Copy">
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/jectmwqf.json"
                                                            trigger="hover"
                                                            colors="primary:#121331,secondary:#5c230a">
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="border border-white text-center p-2">
                                                <div className="flex justify-center items-center gap-2">
                                                    {val.username}
                                                    <div onClick={() => { copyText(val.username) }} className="cursor-pointer" title="Copy">
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/jectmwqf.json"
                                                            trigger="hover"
                                                            colors="primary:#121331,secondary:#5c230a">
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="border border-white text-center p-2">
                                                <div className="flex justify-center items-center gap-2">
                                                    {val.password}
                                                    <div onClick={() => { copyText(val.password) }} className="cursor-pointer" title="Copy">
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/jectmwqf.json"
                                                            trigger="hover"
                                                            colors="primary:#121331,secondary:#5c230a">
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="border border-white text-center p-2">
                                                <div className="flex justify-around">
                                                    <span className="cursor-pointer" title="Edit" onClick={() => { editPassword(val.id) }}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/exymduqj.json"
                                                            trigger="hover">
                                                        </lord-icon>
                                                    </span>
                                                    <span className="cursor-pointer" title="Delete" onClick={() => { deletePassword(val.id) }}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/jzinekkv.json"
                                                            trigger="hover">
                                                        </lord-icon>
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>}
                </div>
            </div>
        </>
    )
}

export default Manager