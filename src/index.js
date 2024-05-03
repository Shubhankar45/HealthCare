import connectDB from "../src/db/index"
import donenv  from "dotenv"

configDotenv.config({
    path:"./.env"
})

connectDB()