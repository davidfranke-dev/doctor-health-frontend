"use client"

import AuthForm from "@/components/AuthForm"
import { signup } from "./../../../utils/authFunctions"
import AuthButton from "@/components/AuthButton"
import Navbar from "@/components/Navbar"

export default function page() {

    return (
        <div className=" ">
            {/* <Navbar /> */}


            <AuthButton 
                route="/auth/login"
                text="already a patient?"
            />

            <AuthForm 
                submitHandler={signup}
                text="become a patient"
                btnText="Sign up"
            />
        </div>
    )
}
