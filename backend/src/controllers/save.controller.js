import Save from "../models/saved.model.js";
import mongoose from "mongoose";


export const SaveNote = async(req,res)=>{

    const userId = req.body.userId;
    const fileId = req.body.fileId;


    try {
        await Save.create({ userId:userId , fileId:fileId});
        res.send({ status: "ok" });
    } catch (error) {
        res.json({ status: error });
    }

}

export const DeleteNote = async(req,res)=>{

}


export const FetchNotes = async(req,res)=>{
    let files = [];

    // try {
    //     Save.find({userId:req.userId}).then((data) => {
    //         // data.map((val)=>{
    //         //     let file = File.find({_id:val.fileId});
    //         //     files.push(file)
    //         // })

    //         res.send({ status: "ok", data: data });
    //     });
    // } catch (error) {}
    const { userId } = req.params;


   const saves=  await Save.aggregate([
        {
          $match: { userId: mongoose.Types.ObjectId(userId) }
        },
        {
          $lookup: {
            from: 'files', // The name of the File collection (default is the model name in lowercase plural form)
            localField: 'fileId',
            foreignField: '_id',
            as: 'fileDetails'
          }
        },
        {
          $unwind: '$fileDetails' // Deconstructs the array of fileDetails into individual documents
        },
        {
          $project: {
            _id: 0, // Exclude the Save document's _id
            fileDetails: 1 // Include the file details in the output
          }
        }
      ]);


      res.send({ status: "ok", data: saves });















    }

