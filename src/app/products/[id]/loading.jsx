import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';


const loading = () => {
    return (
        <div className='flex justify-center items-center bg-[#f0f0f0] w-[100%] h-[100vh]'>
            <CircularProgress />
        </div>

    )
}

export default loading
