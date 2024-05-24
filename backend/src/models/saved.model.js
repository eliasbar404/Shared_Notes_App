import mongoose from "mongoose";

const savedSchema = new mongoose.Schema(
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

const Saved = mongoose.model("Saved", savedSchema);

export default Saved;