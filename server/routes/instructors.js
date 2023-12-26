import { Router } from "express";
import { getInstructor, getAllInstructors } from "../controllers/instructors.js";

const router = Router()

router.get("/instructor/:id", getInstructor)
router.get("/instructor/", getAllInstructors)

export default router
