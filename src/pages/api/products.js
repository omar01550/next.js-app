
import Connect from "../../../db/connection.js";
import ProductModel from "../../../db/models/product.js";





const handler = async (req, res) => {



    const { limit, name, id } = req.query;



    try {
        await Connect();
        console.log('db connected in products');

        const result = await ProductModel.find().limit(limit);
        console.log(result);
        res.status(200).json({ products: result })
    } catch (error) {

        res.status(400).json({
            message: "failed to get products ",
            error
        })
    }
};





export default handler;
