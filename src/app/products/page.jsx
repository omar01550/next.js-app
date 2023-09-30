import React from 'react'
import Card from '../components/card/card';
import productModel from '../../../db/models/product';
import Connect from '../../../db/connection';
// import ClientProducts from './clientProducts.jsx'
// import { Button, ButtonBase, Stack } from '@mui/material'

export let metadata = {
    title: "all products page",
    description: "all products page"

}


const Products = async () => {

    // const dynamic = 'force-dynamic'
    // const revalidate = 0

    try {
        // await Connect();
        // const data = await productModel.find();
        const res = await fetch("https://next-js-app-1x8d.vercel.app/api/products", {
            cache: "no-store"
        })
        const data = await res.json();
        const products = data.products;


        return (

            <main className=" py-20 ">

                <section className="products-page" id="products-page">
                    <div className=" p-10 text-center">
                        <h1 className="products-page-title text-center text-3xl text-black font-bold">Products</h1>

                        <div className="products flex justify-around items-center flex-wrap py-10" >
                            {products.map((ele) => {
                                metadata.description += ele.title + " " + ele.describtion + " " + ele.price + " " + ele.category
                                return (
                                    <Card
                                        id={ele._id}
                                        image={ele.image}
                                        title={ele.title}
                                        description={ele.describtion}
                                        price={ele.price}
                                        category={ele.category}
                                        smallImages={ele.smallImages}




                                    />

                                )
                            })}
                        </div>

                    </div>
                </section>

            </main>
        )

    } catch (error) {

        return (
            <main className="products-page">






                <div className="procucts">
                    please refresh page
                </div>




            </main>
        )

    }
}

export default Products
