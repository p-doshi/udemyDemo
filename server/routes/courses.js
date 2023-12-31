import { Router } from "express";
import { getCourse, getAllCourses, getCoursesByCategory, deleteCourse } from "../controllers/courses.js";
import { verifyToken } from "../middleware/auth.js";

const router = Router()

router.get("/course/:id", verifyToken, getCourse)
router.get("/course", verifyToken, getAllCourses)
router.get("/course/category/:id", verifyToken, getCoursesByCategory)
router.delete("/course/delete/:id", verifyToken, deleteCourse)


export default router
