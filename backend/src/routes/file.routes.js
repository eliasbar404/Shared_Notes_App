import express from "express";
import protectRoute from "../middlewares/protectRoute.js";
import { UploadFiles , GetFiles} from "../controllers/file.controller.js";
import multer from "multer";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import config from "../config/firebase.config.js"
import File from "../models/file.model.js";


// //Initialize a firebase application
const app = initializeApp(config);
// const analytics = getAnalytics(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage();

// Setting up multer as a middleware to grab photo uploads
const upload = multer({ storage: multer.memoryStorage() });




const router = express.Router();

router.post("/upload-files",upload.single("file"),async (req, res) => {

  try {
    const dateTime = giveCurrentDateTime();

    const storageRef = ref(storage, `files/${req.file.originalname + "       " + dateTime}`);

    // Create file metadata including the content type
    const metadata = {
        contentType: req.file.mimetype,
    };

    // Upload the file in the bucket storage
    const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata);
    //by using uploadBytesResumable we can control the progress of uploading like pause, resume, cancel

    
    // Grab the public url
    const downloadURL = await getDownloadURL(snapshot.ref);

    // Save file in database
    const userId = req.body.userId;
    const title = req.body.title;
    const fileName = downloadURL;
    const description = req.body.description

    try {
        await File.create({ title: title, fileName: fileName ,description:description,userId:userId});
        // res.send({ status: "ok" });
    } catch (error) {
        res.json({ status: error });
    }
    

    console.log('File successfully uploaded.');
    return res.send({
        message: 'file uploaded to firebase storage',
        name: req.file.originalname,
        type: req.file.mimetype,
        downloadURL: downloadURL
    })
} catch (error) {
    return res.status(400).send(error.message)
}


})

const giveCurrentDateTime = () => {
  const today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + ' ' + time;
  return dateTime;
}





router.get("/get-files", GetFiles);

export default router;