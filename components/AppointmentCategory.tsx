import axios from 'axios'
import React, { useEffect, useState } from 'react'

type Props = {
    appointmentCategory: {
        name: string,
        description: string
    }
}

const AppointmentCategory = ({ appointmentCategory }: Props) => {

    const [availableAppointments, setAvailableAppointments] = useState()

    useEffect(() => {
        axios.get("http://localhost:8080/")
            .then(res => {
                
            })
            .catch(() => {
                console.log("Error: Could not fetch next avaiable appointments")
            })
    }, [])

    return (
        <div className="shadow-basic rounded-xl p-5 w-[24rem] h-max text-neutral-800">
            <span className='text-xl font-semibold'>{appointmentCategory.name}</span>
            <div className='text-sm'>
                <span className='text-neutral-600'>Next available</span>
                <div className='mt-4 flex gap-1'>
                    <div className='rounded-full px-3 py-1 bg-neutral-800 text-neutral-50 w-max'>11:00</div>
                    <div className='rounded-full px-3 py-1 bg-neutral-800 text-neutral-50 w-max'>13:00</div>
                    <div className='rounded-full px-3 py-1 bg-neutral-800 text-neutral-50 w-max'>17:00</div>
                    <div className='rounded-full px-3 py-1 bg-neutral-800 text-neutral-50 w-max'>More</div>
                </div>
            </div>
        </div>
    )
}

export default AppointmentCategory