import AppointmentCategory from '@/components/AppointmentCategory'
import React from 'react'

export default function page() {
    return (
        <div className='absolute top-0 bottom-0 right-0 left-0 m-auto h-max w-max flex gap-4'>
            <AppointmentCategory />
            <AppointmentCategory />
            <AppointmentCategory />
        </div>
    )
}
