import Connect from "../../../../db/connection";
import productModel from "../../../../db/models/product";

export default async function handler(req, res) {



    try {
        await Connect();
        const product = await productModel.findById(req.query.productid);

        res.status(200).json(product);
    } catch (error) {

        res.status(404).send("not-found-product")
    }



}