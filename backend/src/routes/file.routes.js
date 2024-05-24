import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import { UploadFiles , GetFiles} from "../controllers/file.controller.js";
import multer from "multer";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./files");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.get("/upload-files",protectRoute,upload.single("file"),UploadFiles)
router.get("/get-files", GetFiles);

export default router;