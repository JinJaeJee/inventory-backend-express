import { Router } from "express";
import { getProducts } from "../controllers/productController";



const router = Router()

router.get("/", getProducts)
router.post("/", getProducts)


export default router
