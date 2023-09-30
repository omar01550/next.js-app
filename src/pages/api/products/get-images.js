import Connect from "../../../../db/connection";
import productModel from "../../../../db/models/product";

const handler = async (req, res) => {
    try {
        await Connect();
        const data = await productModel.find().select(["image"]).limit(9);
        res.status(200).json(data);

    } catch (error) {
        res.status(400).json({ message: "failed to get images" })
    }
}

export default handler;