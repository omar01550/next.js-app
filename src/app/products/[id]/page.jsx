import Connect from "../../../../db/connection";
import productModel from "../../../../db/models/product";
import DetailsComponent from "./components/details";
import ProductImages from "./components/images";



export let metadata = {
    title: "",
    description: ""
}



const Product = async ({ params }) => {

    const { id } = params;


    try {

        await Connect()
        const product = await productModel.findById(id);

        metadata.title = product.title;
        metadata.description = product.title + " " + product.describtion + " " + product.category + " and price is " + product.price


        return (

            <main className="omar p-10 flex justify-between items-center flex-wrap">
                <ProductImages product={product} />
                <DetailsComponent product={product} />

            </main>

        )
    } catch (error) {

        return (
            <div className="error">
                error
            </div>
        )
    }




}

export default Product