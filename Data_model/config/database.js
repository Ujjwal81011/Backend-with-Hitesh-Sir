import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();
const connectDB = async()=>{
    try {
       const response =  await mongoose.connect(process.env.MONGODB_URL)
        // console.log(response);
        console.log("database chal gaya");
    } catch (error) {
        console.error(error.message);
        console.log("message krne ka koi fayda hai nhi bekar hai ye");
    }
}
export default connectDB