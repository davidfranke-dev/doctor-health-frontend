import React, { useState } from 'react'
import { UserCircleIcon } from "@heroicons/react/24/outline"

type Props = {
    submitHandler: Function
    text: string
}

const AuthForm = ({submitHandler, text} : Props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 

    return (
        <div className="shadow-basic rounded-xl p-5 w-[24rem] h-max absolute top-0 bottom-0 right-0 left-0 m-auto text-neutral-800">
            <div className="text-xl font-semibold text-neutral-700 text-center p-3 py-6 flex items-center justify-center">
                <div className="border-r border-neutral-300 pr-3 mr-3 ">
                    <UserCircleIcon className="w-6 h-6" /> 
                </div>
                {text}
            </div>
            <div className="flex flex-col">
                <input onChange={(e) => setEmail(e.target.value)} value={email} className="rounded-xl border focus:outline-none p-1.5 mb-1" placeholder="Email" />
                <input onChange={(e) => setPassword(e.target.value)} value={password} className="rounded-xl border focus:outline-none p-1.5 mb-1" placeholder="Password" />
            </div>
            <button onClick={() => submitHandler(email, password)} className="rounded-xl bg-blue-500 text-white p-1.5 w-[100%]">Sign up</button>
        </div>
    )
}

export default AuthForm