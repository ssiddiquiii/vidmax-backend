import dns from "node:dns/promises"
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"

dns.setServers(["8.8.8.8", "1.1.1.1"])

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`\n✅ MongoDB connected!! DB Host: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("❌ MongoDB connection failed!!", error);
        process.exit(1)
    }
}

export default connectDB