import mongoose from "mongoose";

import newsLetterModel from "../models/newsLetterModel.js";

export const getNewsLetters = async (req, res) => {
	try {
		const newsLetters = await newsLetterModel.find();
		res.status(200).json(newsLetters);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createNewsLetter = async (req, res) => {
	const newsLetter = req.body;
	const newNewsLetter = new newsLetterModel(newsLetter);
	try {
		await newNewsLetter.save();
		res.status(201).json(newNewsLetter);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const updateNewsLetter = async (req, res) => {
	const { id } = req.params;
	const newsLetter = req.body;

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send("no NewsLetter eith the id: ", id);

	const updatedNewsLetter = await newsLetterModel.findByIdAndUpdate(
		id,
		{ ...newsLetter, id },
		{ new: true }
	);
	res.json(updatedNewsLetter);
};

export const deleteNewsLetter = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send("No NewsLetter with that Id", id);

	await newsLetterModel.findByIdAndRemove(id);
	res.json({ message: "NewsLetter Deleted Successfully" });
};
