import React from 'react'
import Card from './components/card/card';
import productModel from '../../db/models/product';

const SectionServer = async () => {



    try {
        // const res = await fetch("http://localhost:3000/api/products?limit=8", {
        //     cache: "no-store"
        // })

        // const products = await res.json();
        const products = await productModel.find().limit(8);



        return (
            <div>
                {
                    products.map(() => {
                        return (
                            <div>
                                done
                            </div>
                        )
                    })
                }
            </div>

        )


    } catch (error) {
        
        return (
            <div>
                error
            </div>
        )

    }



}

export default SectionServer