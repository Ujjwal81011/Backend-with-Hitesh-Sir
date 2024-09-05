import mongoose  from "mongoose"

const userSchema = new mongoose.Schema({
    username: 
    {
        type: String,
        required: true,
        unique: true
    },
    email: 
    {
        type: String,
        required: true,
        unique: true
    },
    password: 
    {
        type: String,
        required: true  
    },
    Admin: {  // for importing one data model into another data model
        type: mongoose.Schema.Types.ObjectId,
        ref:"Admin"
    },
},{timestamps : true})

export const User = mongoose.model("User", userSchema)