"use client"

import React, { useEffect, useState } from 'react'
import { CheckIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import axios from 'axios'

axios.defaults.withCredentials = true


type Props = {
    route: string, 
    text: string
}
const AuthButton = ({route, text} : Props) => {

    const [currentUser, setCurrentUser] = useState(null)


    useEffect(() => {
        // TODO: Check if user is logged in -> show different button color

        axios.get("http://localhost:8080/profile")
            .then((req) => {
                if (req.status === 200) {
                    console.log("Current user is changed.")
                    setCurrentUser({...req.data, name: "David Franke"})
                } else {
                    console.log("Error, Status Code:" + req.status)
                }
            })
            .catch(() => {
                console.log("Could not send request.")
            })
    }, [])

    return (
        <div>
            <div className="p-3">
                <a href={currentUser ? "/profile/id" : route} className="bg-blue-500 text-white py-3 px-5 rounded-xl flex hover:scale-[1.02] transition-all w-max shadow-basic">
                    <div className="border-r pr-3 mr-3"><UserCircleIcon className="w-6 h-6" /></div>
                    {currentUser ? currentUser?.name : text}
                </a>
            </div> 
        </div>
    )
}

export default AuthButton