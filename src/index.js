import connectDB from "./db/index.js";
import dotenv from "dotenv"
import { app } from "./app.js";

dotenv.config({
    path: "./.env"
})

const port = process.env.PORT || 5000

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`🌐 App is listening at PORT:http://localhost:${port}`);
        })
        app.on("error", (error) => {
            console.log(`🔴 App can't talk with express properly!!`);
            
        })
    })
    .catch((error) => {
        console.log("❌ MongoDB connection failed!!", error);
    })