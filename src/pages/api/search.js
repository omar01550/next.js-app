

import Connect from "../../../db/connection.js";
import productModel from "../../../db/models/product.js";




const handler = async (req, res) => {


    try {

        await Connect();

        const data = await productModel.find({
            title: new RegExp(req.query.title, "i")
        });

        res.status(200).json(data)


    } catch (error) {

    }




};





export default handler;


