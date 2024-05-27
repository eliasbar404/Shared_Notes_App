import express from "express";
import { SaveNote ,FetchNotes} from "../controllers/save.controller.js";

const router = express.Router();

router.post('/create',SaveNote)
router.get('/fetch/:userId' , FetchNotes)
// router.delete('/delete')


export default router;