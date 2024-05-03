import connectDB from "../src/db/index.js"
import donenv  from "dotenv"

configDotenv.config({
    path:"./.env"
})

connectDB()