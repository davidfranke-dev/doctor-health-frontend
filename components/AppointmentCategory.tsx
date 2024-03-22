import React from 'react'

const AppointmentCategory = () => {
    return (
        <div className="shadow-basic rounded-xl p-5 w-[24rem] h-max text-neutral-800">
            <span className='text-xl font-bold'>Vaccines</span>
            <div className='text-sm'>
                <span className='text-neutral-600'>Appointments Today</span>
                <div className='mt-4 flex gap-1'>
                    <div className='rounded-full px-3 py-1 bg-neutral-800 text-neutral-50 w-max'>11:00</div>
                    <div className='rounded-full px-3 py-1 bg-neutral-800 text-neutral-50 w-max'>13:00</div>
                    <div className='rounded-full px-3 py-1 bg-neutral-800 text-neutral-50 w-max'>15:00</div>
                    <div className='rounded-full px-3 py-1 bg-neutral-800 text-neutral-50 w-max'>17:00</div>
                    <div className='rounded-full px-3 py-1 bg-neutral-800 text-neutral-50 w-max'>Tomorrow</div>
                </div>
            </div>
        </div>
    )
}

export default AppointmentCategory