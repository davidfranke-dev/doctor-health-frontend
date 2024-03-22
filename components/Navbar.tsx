import { Bars3Icon, ClipboardDocumentListIcon, Cog6ToothIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Navbar() {
    return (
        <div className='text-neutral-800 rounded-xl flex gap-x-2 transition-all w-max fixed right-0 shadow-basic m-3 p-1'>
            <a href='/' className='nav-btn'>
                <div>
                    <ClipboardDocumentListIcon className='w-5 h-5 mr-2' />
                </div>
                Appointments
            </a>
            <a className='nav-btn'>
                <div>
                    <UserGroupIcon className='w-5 h-5 mr-2' />
                </div>
                Patients
            </a>
            <a className='nav-btn'>
                <div>
                    <Cog6ToothIcon className='w-5 h-5 mr-2' />
                </div>
                Settings
            </a>
            <a className='hover:bg-blue-500 hover:text-neutral-50 py-2 px-3 rounded-xl transition-all'>
                <div>
                    <Bars3Icon className='w-6 h-6' />
                </div>
            </a>
        </div>
    )
}
