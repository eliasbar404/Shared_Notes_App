// import mongoose from "mongoose";
// import multer   from "multer";
import File from "../models/file.model.js";


export const UploadFiles = async(req,res) => {
    console.log(req.file);
    const title = req.body.title;
    const fileName = req.file.filename;
    const description = req.body.description
    try {
        await File.create({ title: title, fileName: fileName ,description:description});
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