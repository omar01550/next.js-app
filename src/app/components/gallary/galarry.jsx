"use client"

import React, { useEffect, useState } from 'react'
import './galary.css';
import ProductImage from '../../../images/suits/pexels-photo-18215399.webp'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'


const Gallery = () => {

    const [images, setImages] = useState([]);

    const router = useRouter();


    useEffect(() => {
        fetch("http://localhost:3000/api/products/get-images")
            .then((res) => {
                return res.json()
            }).then((images) => {
                setImages(images);
                console.log(images);
            })
    }, [])


    return (
        <div class=" bg-black-500 py-20">

            <h1 className="gallery-title text-3xl text-center fot-bold capitalize py-10">
                gallery
            </h1>

            <div className='gallery'>
                {
                    images
                        ? images.map((ele) => {
                            return (

                                <Image src={ele.image} alt="not found" width={294} height={294} className='cursor-pointer' onClick={() => {
                                    router.push(`products/${ele._id}`)
                                }} />

                            )
                        })
                        : "no images"
                }
            </div>
        </div >
    )
}

export default Gallery