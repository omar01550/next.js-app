import Button from "../../components/button/button.jsx"
import React from 'react'
import { ArrowRightAlt } from "@mui/icons-material"
import Link from "next/link.js"



const Hero = () => {
    return (
        <section className="hero bg-no-repeat w-full h-[83vh] bg-cover relative flex justify-center items-center p-5">
            <div className="content relative z-10 sm:w-[100%] md:w-[75%] p-10">
                <h3 className='text-white text-3xl text-bold capitalize'>We gave the world an Original. You gave us a thousand back.

                </h3>

                <div className="btns flex space-x-4 mt-5">

                    <Link href="/products">
                        <Button word="all products" icon={<ArrowRightAlt />} />
                    </Link>
                </div>
            </div>
            <div className="overlay absolute bg-black left-0 top-0 w-[100%] h-[100%] opacity-70"></div>
        </section>
    )
}

export default Hero