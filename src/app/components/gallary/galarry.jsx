"use client"

import React from 'react'
import './galary.css';
import ProductImage from '../../../images/suits/pexels-photo-18215399.webp'
import Image from 'next/image';

const Gallery = () => {
    return (
        <div class="gallery bg-blue-500 py-20">

            <Image src={ProductImage} alt="not found" />
            <Image src={ProductImage} alt="not found" />
            <Image src={ProductImage} alt="not found" />
            <Image src={ProductImage} alt="not found" />
            <Image src={ProductImage} alt="not found" />
            <Image src={ProductImage} alt="not found" />
            <Image src={ProductImage} alt="not found" />
            <Image src={ProductImage} alt="not found" />
            <Image src={ProductImage} alt="not found" />
        </div>
    )
}

export default Gallery