import { Router } from "express";
import { loginInstructor } from "../controllers/authInstructor.js";
import { loginUser } from "../controllers/authUser.js";

const router = Router()

router.post("/login", loginUser)
router.post("/instructor/login", loginInstructor)

export default router
