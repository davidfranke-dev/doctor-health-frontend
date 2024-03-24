'use client'

import ProfileForm from '@/components/ProfileForm'
import React, { useEffect } from 'react'


type Props = {
    params: {
        profileid: string
    }
}

const page = ({ params }: Props) => {

    useEffect(() => {
        console.log(params.profileid)
    }, [])

    return (
        <div className='absolute top-0 bottom-0 right-0 left-0 m-auto h-max w-[100%] flex justify-center'>
            {/* You can render your ProfileForm component here */}
            <ProfileForm profileid={params.profileid} />
        </div>
    )
}

export default page