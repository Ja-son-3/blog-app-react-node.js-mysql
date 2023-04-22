import express from "express"
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import * as dotenv from 'dotenv'
import cors from "cors"

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)


app.listen(8800,()=>{
    console.log("Connected!")
})