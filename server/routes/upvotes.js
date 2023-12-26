import { Router } from "express";
import { toggleUpvotesCourse, toggleUpvotesInstructor, toggleUpvotesReview, getUpvotesCourse, getUpvotesInstructor, getUpvotesReview } from "../controllers/upvotes.js";

const router = Router()

router.get("/course/:id/upvotes", getUpvotesCourse)
router.get("/instructor/:id/upvotes", getUpvotesInstructor)
router.get("/review/:id/upvotes", getUpvotesReview)
router.patch("/course/:id/upvote",toggleUpvotesCourse)
router.patch("/instructor/:id/upvote",toggleUpvotesInstructor)
router.patch("/review/:id/upvote",toggleUpvotesReview)


export default router
