

import Connect from "../../../db/connection.js";
import ProductModel from "../../../db/models/product.js";
import UserModle from "../../../db/models/product.js";


const handler = async (req, res) => {



    const { limit, name, id } = req.query;


    await Connect()
    try {


        const result = await ProductModel.find().limit(limit);


        res.status(200).json({ products: result })
    } catch (error) {

        res.status(400).json({
            message: "error"
        })
    }
};





export default handler;