"use client"

import React, { useState, useEffect } from 'react'
import { CheckIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import axios from 'axios'

axios.defaults.withCredentials = true


function Schedule() { 

    const [appointments, setAppointments] = useState([
        {
          startTime: "13:00",
          endTime: "14:00",
          patient: "Herr Dr. Franke",
          subject: "Herr Franke meldet starke Kopfschmerzen"
        },
        {
          startTime: "14:00",
          endTime: "15:00",
          patient: "Mittagspause"
        },
        {
          startTime: "15:00",
          endTime: "15:30",
          patient: "Herr Berger",
          subject: "Herr Berger hat eine Schwellung am Unterarm"
        },
        {
          startTime: "15:30",
          endTime: "16:15",
          patient: "Herr Netanjahu",
          subject: "Herr Netanjahu kommt zum Rundum-Check"
        },
        {
          startTime: "16:15",
          endTime: "17:00",
          patient: "Herr Jostas",
          subject: "Herr Jostas meldet Bauchbeschwerden"
        }
    ])

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/appointments",)
            .then((res) => {
                console.log(res.data)
            })
            .catch(() => {
                console.log("Could not fetch appointments")
            })
    })

    


    return (
        <div className="p-3 max-w-[40rem]">
            <div className="rounded-xl shadow-lg shadow-basic p-2">
                <div className="">

                    {/* Doctor Tile */}
                    <button className="flex items-center">
                    <div className=" overflow-hidden p-2 pr-3">
                        <img className="object-cover rounded-full w-14 h-14" src="https://www.liveabout.com/thmb/zNzhc9WxUE_lf6r3P0yuAfBaoV0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/doctor-with-stethoscope-in-hospital-642394515-5aa9a0b8a9d4f90037431454.jpg" />
                    </div>
                    <div className="p-1.5 flex flex-col items-start justify-center">
                        <span className="text-lg font-medium">Dr. med. Maurer</span>
                        <span className="text-sm text-neutral-500">Diabtelogie & Kardiologie</span>
                    </div>
                    </button>
                    <hr></hr>

                    {/* Booked Appointments */}
                    <div className="">
                    {appointments.map((appointment, i) => (
                        <div key={i} className="py-3 px-4 border-b flex justify-between items-center hover:bg-blue-500 hover:text-neutral-50 transition-all">
                            <button className='flex flex-col justify-start'>
                                <div className="text-neutral-600 text-xs text-medium mb-0.5">{appointment.startTime} - {appointment.endTime}</div>
                                <a href={'/patient/' + appointment.patient} className="text-base font-medium">{appointment.patient}</a>
                                <div className="text-xs">{appointment?.subject}</div>
                            </button>
                            {/* <div>
                                <button className="p-1.5 rounded-lg bg-blue-500 text-white">
                                    <CheckIcon className="w-5 h-5" />
                                </button>
                            </div> */}
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule