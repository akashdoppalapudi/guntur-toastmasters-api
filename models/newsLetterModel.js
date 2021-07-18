import mongoose from "mongoose";

const newsLetterSchema = mongoose.Schema({
	title: String,
	description: String,
	date: String,
	docLink: String,
});

const newsLetterModel = mongoose.model("newsLetterModel", newsLetterSchema);

export default newsLetterModel;
