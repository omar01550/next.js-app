"use client"

import React, { useEffect, useState } from 'react';
import Card from '../components/card/card';
import { Button, Container, Stack } from '@mui/material';
import { Box } from "@mui/material";
import { ArrowRightAlt } from '@mui/icons-material';
import Loader from '../components/loader/loader';

const ClientProducts = () => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)


    async function handleFetch() {
        try {
            const res = await fetch("http://localhost:3000/api/products?limit=30")
            res.json()
                .then((r) => {



                    setProducts(r.products);
                    setLoading(false);

                })

                .catch(() => {
                    setError(true)
                })


        } catch (error) {
            console.log(error);
            setError(true)
        }


    }


    useEffect(() => {
        setLoading(true)
        handleFetch()

    }, [])


    useEffect(() => {
        console.log(products);
    })



    return (
        <Container className=' px-2 py-10'>

            {/* <Button endIcon={ArrowRightAlt} key={100}>
                All Products
            </Button> */}

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

export default ClientProducts