import mongoose from "mongoose";


const url = "mongodb+srv://Omar01550:FDy1cRy0R66uKJhR@cluster0.h9ep7ah.mongodb.net/";

export default async function Connect() {
    mongoose.connect(url)
        .then((res) => {
            console.log('db connected');
        }).catch((err) => {
            console.log("failed to connect with db");
        });
}