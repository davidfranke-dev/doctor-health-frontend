import React from 'react'
import { CheckIcon, UserCircleIcon } from '@heroicons/react/24/outline'


type Props = {
    route: string, 
    text: string
}
const AuthButton = ({route, text} : Props) => {
    return (
        <div>
            <div className="p-3">
                <a href={route} className="bg-blue-500 text-white py-3 px-5 rounded-xl flex hover:scale-[1.02] transition-all w-max shadow-basic">
                <div className="border-r pr-3 mr-3"><UserCircleIcon className="w-6 h-6" /></div>
                    {text}
                </a>
            </div> 
        </div>
    )
}

export default AuthButton