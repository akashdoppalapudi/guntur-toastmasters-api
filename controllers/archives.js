import mongoose from "mongoose";

import archiveModel from "../models/archiveModel.js";

export const getArchives = async (req, res) => {
	try {
		const archives = await archiveModel.find();
		res.status(200).json(archives);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createArchive = async (req, res) => {
	const archive = req.body;
	const newArchive = new archiveModel(archive);
	try {
		await newArchive.save();
		res.status(201).json(newArchive);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const updateArchive = async (req, res) => {
	const { id } = req.params;
	const archive = req.body;

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send("no archive eith the id: ", id);

	const updatedArchive = await archiveModel.findByIdAndUpdate(
		id,
		{ ...archive, id },
		{ new: true }
	);
	res.json(updatedArchive);
};

export const deleteArchive = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send("No Archive with that Id", id);

	await archiveModel.findByIdAndRemove(id);
	res.json({ message: "Archive Deleted Successfully" });
};
