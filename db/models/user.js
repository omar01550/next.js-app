import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    age: Number,
});



const UserModle = mongoose.models.users || mongoose.model("data", UserSchema);

export default UserModle