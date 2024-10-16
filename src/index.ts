import express from "express"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import bodyParser from "body-parser"
import cors from "cors"

/* Route Import */
import dashboardRouter from "./routes/dashboardRoutes"
import productRoutes from "./routes/productRoutes"
import userRoutes from "./routes/userRoutes"
import expenseRoutes from "./routes/expenseRoutes";

/* Configulation */

dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cors())


/* Routes */
app.get("/check", (req,res)=> {
    res.send("API INVENTORY IS RUNNING")
})

app.use("/dashboard", dashboardRouter)
app.use("/products", productRoutes)
app.use("/users", userRoutes)
app.use("/expenses", expenseRoutes); 
/* Server */

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Server is running on port : ${port}`)
})
