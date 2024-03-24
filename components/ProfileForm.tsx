"use client"

import { UserCircleIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { useForm, useController } from "react-hook-form";
import axios from 'axios'

axios.defaults.withCredentials = true

type Props = {
    profileid: string
}

const ProfileForm = ({ profileid } : Props) => {

    const { register, control, handleSubmit } = useForm();

    interface FormValues {
        firstname: string,
        lastname: string,
        street: string,
        telephone: string, 
        zip: string, 
        city: string,
        birthday: Date,
        // allergies: string,
        // conditions: string
    }

    const handleSave = (formValues : FormValues) => {
        console.log(profileid)
        console.log({...formValues})

        axios.post("http://localhost:8080/api/v1/patients", {...formValues, userid: profileid})
            .then(res => {
                if (res.status === 201) {
                    console.log("Successfully created patient profile")
                    console.log(res)
                } else {
                    console.log("Error: Profile could not be created.")
                }
            })
            .catch(() => {
                console.log("Error: Request could not be sent")
            })
    }


    return (
        <div className='text-neutral-800 shadow-basic p-6 rounded-xl'>
            <div className='mb-5 rounded-xl flex items-center transition-all w-max mx-auto px-8 py-2'>
                {/* <div className="border-r pr-3 mr-3"><UserCircleIcon className="w-6 h-6" /></div> */}
                <span className='text-xl font-medium'>Please fill out this form</span>
            </div>
            <form className='text-sm' onSubmit={handleSubmit(handleSave)}>
                <div className='mb-2 text-base'>Personal Information</div>
                <div className='flex gap-x-2 mb-1.5'>
                    <div className='flex flex-col w-[50%]'>
                        <span className='text-xs mx-1'>First name</span>
                        <input placeholder="Max" {...register("firstname")} className="form-input" />                    
                    </div>
                    <div className='flex flex-col w-[50%]'>
                        <span className='text-xs mx-1'>Last name</span>
                        <input placeholder="Mustermann" {...register("lastname")} className="form-input" />                    
                    </div>
                </div>
                <div className='flex gap-x-2 mb-1.5'>
                    <div className='flex flex-col w-1/3'>
                        <span className='text-xs mx-1'>Birthday</span>
                        <input type='date' placeholder='MM/DD/YYYY' {...register("birthday")} className="form-input-date" />                    
                    </div>
                    <div className='flex flex-col w-1/3'>
                        <span className='text-xs mx-1'>Weight (kg)</span>
                        <input placeholder="80" {...register("weight")} className="form-input " />                    
                    </div>
                    <div className='flex flex-col w-1/3'>
                        <span className='text-xs mx-1'>Height (cm)</span>
                        <input placeholder="180" {...register("height")} className="form-input " />                    
                    </div>

                </div>               
                {/* <div className='flex gap-x-2 mb-1.5'>
                     <div className='flex flex-col w-[50%]'>
                        <span className='text-xs mx-1'>Allergies</span>
                        <textarea {...register("allergies")} className="form-input resize-none" ></textarea>                    
                    </div>
                    <div className='flex flex-col w-[50%]'>
                        <span className='text-xs mx-1'>Conditions</span>
                        <textarea {...register("conditions")} className="form-input resize-none" ></textarea>                    
                    </div>
                </div>      */}

                <div className='mt-5 mb-2  text-base'>Contact Information</div>

                <div className='flex gap-x-2 mb-1.5'>
                    <div className='flex flex-col w-[65%]'>
                        <span className='text-xs mx-1'>Street & House no.</span>
                        <input placeholder="Musterstr. 1a" {...register("street")} className="form-input"/>                    
                    </div>
                    <div className='flex flex-col w-[35%]'>
                        <span className='text-xs mx-1'>Telephone</span>
                        <input placeholder="+4917699999999" {...register("telephone")} className="form-input" />                    
                    </div>
                </div>
                <div className='flex gap-x-2  mb-2'>
                    <div className='flex flex-col w-[35%]'>
                        <span className='text-xs mx-1'>Zip</span>
                        <input placeholder="99999" {...register("zip")} className="form-input" />                    
                    </div>
                    <div className='flex flex-col w-[65%]'>
                        <span className='text-xs mx-1'>City</span>
                        <input placeholder="Musterstadt" {...register("city")} className="form-input" />                    
                    </div>
                </div>
                <button className='w-[100%] text-white bg-blue-500 rounded-xl text-sm p-1.5 mt-1.5' type='submit'>Submit</button>
            </form>
        </div>
    )
}


export default ProfileForm