import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MONGODB Connected at ${connectionInstance.connection.host}`)
    }
    catch (error) {
        console.error("Error occured", error)
        throw error
    }
}


export default connectDB