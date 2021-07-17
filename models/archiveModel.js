import mongoose from "mongoose";

const archiveSchema = mongoose.Schema({
	title: String,
	description: String,
	date: String,
	MOMLink: String,
	agendaLink: String,
	image: String,
	videoLink: String,
});

const archiveModel = mongoose.model("archiveModel", archiveSchema);

export default archiveModel;
