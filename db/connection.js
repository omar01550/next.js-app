import mongoose from "mongoose";


export default async function Connect() {
    mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1')
        .then((res) => {
            console.log('res');
        }).catch((err) => {
            console.log(err);
        });
}