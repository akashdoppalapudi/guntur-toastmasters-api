import mongoose from "mongoose";

const upcomingSchema = mongoose.Schema({
	title: String,
	description: String,
	date: String,
	agendaLink: String,
	image: String,
	meetLink: String,
});

const upcomingModel = mongoose.model("upcomingModel", upcomingSchema);

export default upcomingModel;
