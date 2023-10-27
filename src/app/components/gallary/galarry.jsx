"use client"

import React, { useEffect, useState } from 'react'
import './galary.css';
import ProductImage from '../../../images/suits/pexels-photo-18215399.webp'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import Loader from '../loader/loader';
import ErrorComponent from '../errorComponent/error.jsx'



const Gallery = () => {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const router = useRouter();


    useEffect(() => {

        fetch("https://next-js-app-1x8d.vercel.app/api/products?limit=9")
            .then((res) => {
                return res.json()
            }).then((images) => {
                setImages(images);
                setLoading(false);
            }).catch((err) => {
                setError(true);
            })
    }, [])


    return (
        <div class=" bg-black-500 py-20 w-[100%]">

            <h1 className="gallery-title text-3xl text-center fot-bold capitalize py-10">
                gallery
            </h1>

            <div className='gallery w-[100%]'>
                {





                    error ? <ErrorComponent />
                        : loading
                            ? <Loader />
                            : images.map((ele) => {
                                return (

                                    <Image src={ele.image} alt="not found" width={294} height={294} className='cursor-pointer' onClick={() => {
                                        router.push(`products/${ele._id}`)
                                    }} />

                                )
                            })

                }
            </div>
        </div >
    )
}

export default Gallery
