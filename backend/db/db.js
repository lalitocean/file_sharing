import dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose"
const dbconnection = async () => {
    try {
        await mongoose.connect(process.env.DB_string)
        console.log("connected")
    } catch (error) {
        console.log("not connected something happend wrong")
    }
}

export default dbconnection