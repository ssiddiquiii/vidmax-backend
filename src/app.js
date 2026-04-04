import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

// cors config
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

// data recevie from JSON config
app.use(express.json({ limit: "16kb" }))

// data receive from URL config
app.use(express.urlencoded({extended: true, limit: "16kb"}))

// public asset access
app.use(express.static("public"))

// cookie-parser from access and saved by user browser fro CRUD
app.use(cookieParser())

export { app }