// import dotenv from "dotenv"
const dotenv = require('dotenv')
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})



connectDB()
