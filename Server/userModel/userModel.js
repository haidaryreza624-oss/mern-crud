import mongoose from "mongoose";
const userModel = new mongoose.Schema(
    {
        userName:
        {
            type: String,
            required: true
        },
        userAddress:
        {
            type: String,
            required: true
        },
        userEmail: {
            type: String,
            required: true
        }
    }

)
const User = mongoose.model('User', userModel)
export default User