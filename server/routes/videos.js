import { Router } from "express";
import { getVideos, deleteVideo } from "../controllers/videos.js";
import { verifyToken } from "../middleware/auth.js";


const router = Router()

router.get("course/:id/videos",verifyToken, getVideos)
router.delete("course/:id/videos/delete",verifyToken, deleteVideo)

export default router
