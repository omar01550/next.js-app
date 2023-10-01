"use client";

import { CartContext } from '@/app/layout'
import SimpleSnackbar from '@/app/products/[id]/components/snackbar'
import { ShoppingBagOutlined } from '@mui/icons-material'
import { Tooltip } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'

const Card = ({ title, image, id, describtion, category, price }) => {

    const [SnackBarOPen, setSnackBarOpen] = React.useState(false)

    const { cart, setCart } = useContext(CartContext);


    function checkIsInCart(id) {
        const result = cart.filter(ele => ele.id == id);

        if (result) {
            return true
        } else {
            return false
        }
    };

    function GetProductFromCart(id) {
        return cart.filter(ele => ele.id == id)[0];
    }

    return (


        <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl m-5">
            <Link href={"/products/" + id}>
                <img src={image ? image : "https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            </Link>
            <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">{category}</span>
                <p class="text-lg font-bold text-black truncate block capitalize">{title}</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">${price}</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto cursor-pointer">

                        {/* <Tooltip title="add to cart" arrow>
                            <ShoppingBagOutlined onClick={(params) => {
                                if (cart.filter(ele => ele.id == id)[0]) {
                                    setSnackBarOpen(true)
                                } else {
                                    setCart([...cart, { title, describtion, image, id, }])
                                }

                            }} />

                        </Tooltip> */}
                    </div>
                </div>
            </div>
            <SimpleSnackbar text="the item is already in your cart" SnackBarOPen={SnackBarOPen} setSnackBarOpen={setSnackBarOpen} />

        </div>


    )
}

export default Card;



