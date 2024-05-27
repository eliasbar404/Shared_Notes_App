import mongoose from "mongoose";
import File from "../models/file.model.js";






export const UploadFiles = async(req,res) => {
    

    // res.send(`File Uploaded: ${req.file.filename}`);

    const userId = req.body.userId;
    const fileId = req.body.title;
    const fileName = req.file.filename;
    const description = req.body.description

    try {
        await File.create({ title: title, fileName: fileName ,description:description,userId:userId});
        res.send({ status: "ok" });
    } catch (error) {
        res.json({ status: error });
    }

}

export const GetFiles = async(req,res) => {
    try {
        File.find({}).then((data) => {
            res.send({ status: "ok", data: data });
        });
    } catch (error) {}
}