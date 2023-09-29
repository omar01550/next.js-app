"use client"

import React from 'react'
import Image from 'next/image';
import ProductImage from "../../../../images/suits/pexels-photo-1043474.webp"

const ProductImages = ({ product }) => {

    return (

        <div className="product-images w-[100%] lg:w-[45%] flex justify-start items-start space-x-2 flex-row ">
            <div className="small-images flex flex-col">
                {
                    product.smallImage
                        ? product.smallImages.map(() => {
                            return (
                                <Image src={ele} alt={ele + " not found image"} className='w-[40px] h-[40px]' />
                            )
                        })
                        : <></>
                }


            </div>


            <div className="main-iamge w-[200px] md:w-[500px]">
                <Image src={product.image} alt="not found" className='w-[200px] md:w-[500px]' width={200} height={500} />

            </div>
        </div>

    )
}

export default ProductImages