import { Router } from "express";
import { getInstructor, getAllInstructors } from "../controllers/instructors.js";
import { verifyToken } from "../middleware/auth.js";

const router = Router()

router.get("/instructor/:id", verifyToken, getInstructor)
router.get("/instructor/", verifyToken, getAllInstructors)

export default router
