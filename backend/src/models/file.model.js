import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		title: {
			type: String,
			required: true,
			unique: true,
		},
        fileName: {
            type: String,
            required:true,
            unique:true
        }
        ,
		description: {
			type: String,
			required: true,
		},
		// createdAt, updatedAt => Member since <createdAt>
	},
	{ timestamps: true }
);

const File = mongoose.model("File", fileSchema);

export default File;