import { Router } from "express";
import { createReviewCourse, deleteReviewCourse, getReviewsCourse, getReviewsInstructor, createReviewInstructor, deleteReviewInstructor } from "../controllers/reviews.js";

const router = Router()

router.post("/course/review/new",createReviewCourse)
router.post("/instructor/review/new",createReviewInstructor)
router.get("/instructor/:id/review", getReviewsInstructor)
router.get("/course/:id/review", getReviewsCourse)
router.delete("/course/review/delete", deleteReviewCourse)
router.delete("/instructor/review/delete", deleteReviewInstructor)


export default router
