"use client"

import React, { useEffect, useState } from 'react';
import Card from '../../components/card/card';
import { Button, Container, Stack } from '@mui/material';
import { Box } from "@mui/material";
import { ArrowRightAlt } from '@mui/icons-material';
import Loader from '../loader/loader';

const Section = () => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const getData = async () => {
        setLoading(true)
        try {
            const res = await fetch("https://next-js-app-1x8d.vercel.app/api/products?limit=8")
            res.json()
                .then((r) => {

                   setProducts(r.products);
                    setLoading(false);
                    console.log(r);
                
         })

                .catch((error) => {
                    setError(true)
                    console.log(error);
                })


        } catch (error) {

            setError(true)
            console.log(error)
            console.log("error in gallery");
            
        }

    }

    useEffect(() => {
        getData();


    }, [])






    return (
        <Container className=' px-2 py-10'>

            <h1 className="text-center font-bold capitalize text-3xlp">All products</h1>

            <div className='flex justify-around md:justify-between items-center flex-wrap'>
                {
                    products.length > 0
                        ? products.map((ele) => {
                            return (
                                <Card
                                    id={ele._id}
                                    image={ele.image}
                                    title={ele.title}
                                    description={ele.describtion}
                                    price={ele.price}
                                    category={ele.category}
                    




                                />
                            )
                        })
                        : loading ? <Loader /> : error ? "error" : ""
                }
            </div>
        </Container>
    )
}

export default Section
