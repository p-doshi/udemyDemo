import { Router } from "express";
import { toggleUpvotesCourse, toggleUpvotesInstructor, toggleUpvotesReview, getUpvotesCourse, getUpvotesInstructor, getUpvotesReview } from "../controllers/upvotes.js";
import { verifyToken } from "../middleware/auth.js";

const router = Router()

router.get("/course/:id/upvotes",verifyToken, getUpvotesCourse)
router.get("/instructor/:id/upvotes",verifyToken, getUpvotesInstructor)
router.get("/review/:id/upvotes",verifyToken, getUpvotesReview)
router.patch("/course/:id/upvote",verifyToken,toggleUpvotesCourse)
router.patch("/instructor/:id/upvote",verifyToken,toggleUpvotesInstructor)
router.patch("/review/:id/upvote",verifyToken,toggleUpvotesReview)


export default router
