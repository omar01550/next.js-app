import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: String,
    describtion: String,
    image: String || "3uyuyeuryeu",
    smallImages: [String] || ["images"],
    sizes: [Number] || ['sizes array'],
    type: String,
    price: Number,
    category: String
});



const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel