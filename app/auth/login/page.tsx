"use client"

import AuthButton from "@/components/AuthButton";
import AuthForm from "@/components/AuthForm";
import { login } from "./../../../utils/authFunctions"

export default function page() {
    return (
        <div className="text-neutral-800">
            <AuthButton 
                route="/auth/signup"
                text="become a patient"
            />

            <AuthForm 
                submitHandler={login} 
                text="login as patient"
            />
        </div> 
    )
}
