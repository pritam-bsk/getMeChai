import mongoose from "mongoose";
const {Schema,model} = mongoose;

const userSchema = new Schema({
    email: {type: String, required: true},
    name: {type: String},
    username: {type: String, required: true, unique: true},
    razorpayId: {type: String},
    razorpaySecret: {type: String},
    profilePic: {type: String},
    coverPic: {type: String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})
const User = mongoose.models.User || model("User", userSchema);
export default User;