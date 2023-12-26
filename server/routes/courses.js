import { Router } from "express";
import { getCourse, getAllCourses, getCoursesByCategory, deleteCourse, createCourse } from "../controllers/courses.js";

const router = Router()

router.get("/course/:id", getCourse)
router.get("/course", getAllCourses)
router.get("/course/category/:id", getCoursesByCategory)
router.delete("/course/delete/:id", deleteCourse)
router.post("/course/new", createCourse)

export default router
