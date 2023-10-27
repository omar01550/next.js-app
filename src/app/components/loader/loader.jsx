"use client"

import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';


const Loader = () => {
    return (
        <div className='flex justify-center items-center bg-[#f0f0f0] w-[100%] h-[50vh] loader-component'>
            <CircularProgress />
        </div>

    )
}

export default Loader
