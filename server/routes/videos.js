import { Router } from "express";
import { getVideos, deleteVideo } from "../controllers/videos.js";


const router = Router()

router.get("course/:id/videos", getVideos)
router.delete("course/:id/videos/delete", deleteVideo)

export default router
