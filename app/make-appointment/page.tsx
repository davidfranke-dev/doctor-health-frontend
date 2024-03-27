"use client"

import AppointmentCategory from '@/components/AppointmentCategory'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

axios.defaults.withCredentials = true

export default function page() {
 
    const [appointmentCategories, setAppointmentCategories] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/appointments/categories")
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data)
                    setAppointmentCategories(res.data)
                } else {
                    console.log("Error: Appointment categories could not be fetched")
                }
            })
            .catch(() => {
                console.log("Error: Request could not be sent")
            })
    }, [])

    return (
        <div className='absolute top-0 bottom-0 right-0 left-0 m-auto h-max w-max flex gap-4'>
            {appointmentCategories?.map((appointmentCategory) => (
                <AppointmentCategory appointmentCategory={appointmentCategory} />
            ))}
        </div>
    )
}
