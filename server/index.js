// Import required packages/modules
import express from "express";          // Express.js for building web applications
import bodyParser from "body-parser";   // Parse incoming request bodies
import morgan from "morgan";             // HTTP request logger middleware
import mongoose from "mongoose";         // MongoDB object modeling tool
import dotenv from "dotenv";             // Load environment variables from a .env file
import cors from "cors";                 // Middleware for enabling Cross-Origin Resource Sharing (CORS)
import helmet from "helmet";             // Security middleware for setting various HTTP headers
import path from "path";                 // Node.js path module for working with file and directory paths
import multer from "multer";             // Middleware for handling multipart/form-data, used for file uploads
import { fileURLToPath } from "url";     // Utility function to convert a file URL to a file path
import { verifyToken } from "./middleware/auth.js"
import { registerUser } from "./controllers/authUser.js";
import { registerInstructor } from "./controllers/authInstructor.js";
import { createVideo } from "./controllers/videos.js";
import authRoutes from "./routes/auth.js";
import coursesRoutes from "./routes/courses.js"
import instructorRoutes from "./routes/instructors.js"
import reviewRoutes from "./routes/reviews.js"
import upvoteRoutes from "./routes/upvotes.js"
import userRoutes from "./routes/users.js"
import videoRoutes from "./routes/videos.js"

// Configurations
const __filename = fileURLToPath(import.meta.url);  // Get the current file name
const __dirname = path.dirname(__filename);        // Get the current directory name
dotenv.config();                                   // Load environment variables from .env file
const app = express();                             

// Set up middleware
app.use(express.json());                          // Parse JSON bodies of requests
app.use(helmet());                                // Set various HTTP headers for security
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));  // Set cross-origin resource policy
app.use(morgan("common"));                        // Use morgan for HTTP request logging
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));  // Parse URL-encoded bodies

app.use(cors({
    origin: 'http://localhost:3000',              // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',    // Allow specified HTTP methods
    credentials: true,                             // Allow credentials (e.g., cookies) to be sent
}));

app.use("/assets", express.static(path.join(__dirname, 'public/assets')));  // Serve static files from the 'public/assets' directory under the '/assets' route

// File storage setup using Multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, "public/assets"));  // Specify the destination directory for uploaded files
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);  // Specify the filename for uploaded files
    }
});
const upload = multer({ storage });

//Routes with files
app.post("/register", upload.single("picture"), registerUser);
app.post("/instructor/register", upload.single("picture"), registerInstructor);

app.patch("course/:id/videos/create", upload.single("video"), createVideo)

app.use(authRoutes);
app.use(coursesRoutes);
app.use(instructorRoutes);
app.use(reviewRoutes);
app.use(upvoteRoutes);
app.use(userRoutes);
app.use(videoRoutes);

// Mongoose setup - Connect to MongoDB
const PORT = process.env.PORT || 6001;  // Use the specified port or default to 6001
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));  // Start the server on the specified port
}).catch((error) => console.log(`${error} did not connect`));  // Log an error message if the connection to MongoDB fails
