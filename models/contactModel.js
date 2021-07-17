import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
	name: String,
	designation: String,
	mobile: String,
	email: String,
	image: String,
});

const contactModel = mongoose.model("contactModel", contactSchema);

export default contactModel;
