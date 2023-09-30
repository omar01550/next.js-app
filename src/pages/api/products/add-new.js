import Connect from "../../../../db/connection";
import productModel from "../../../../db/models/product";




export default async function handler(req, res) {





    const { title, describtion, image, smallImages, category, sizes, price, type, token } = req.query;


    try {
        await Connect()
        const addProduct = new productModel({
            title,
            describtion,
            category,
            price
        });

        addProduct.save()

        res.status(200).send({ message: 'peoduct-added' })


    } catch (error) {
        res.status(400).send({ message: 'failed-to-add' })
    }






}