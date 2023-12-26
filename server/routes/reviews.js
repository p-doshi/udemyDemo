import { Router } from "express";
import { createReviewCourse, deleteReviewCourse, getReviewsCourse, getReviewsInstructor, createReviewInstructor, deleteReviewInstructor } from "../controllers/reviews.js";
import { verifyToken } from "../middleware/auth.js";

const router = Router()

router.post("/course/review/new",verifyToken, createReviewCourse)
router.post("/instructor/review/new",verifyToken, createReviewInstructor)
router.get("/instructor/:id/review",verifyToken, getReviewsInstructor)
router.get("/course/:id/review",verifyToken, getReviewsCourse)
router.delete("/course/review/delete",verifyToken, deleteReviewCourse)
router.delete("/instructor/review/delete",verifyToken, deleteReviewInstructor)


export default router
