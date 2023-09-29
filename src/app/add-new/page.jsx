"use client"

import React, { useState } from 'react';



const AddNewProduct = () => {


    const [product, setProduct] = useState({
        title: "",
        describtion: "",
        image: "",
        smallImages: "",

    });



    return (
        <main className="add-new-product-page">
            <div className="container">
                <form action="">


                </form>
            </div>
        </main>
    )
}

export default AddNewProduct