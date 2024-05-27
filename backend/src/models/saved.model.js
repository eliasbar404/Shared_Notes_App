import mongoose from "mongoose";

const saveSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		fileId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "File",
			required: true, 
		},
		
		// createdAt, updatedAt => Member since <createdAt>
	},
	{ timestamps: true }
);

const Save = mongoose.model("Save", saveSchema);

export default Save;