import mongoose from "mongoose";

import upcomingModel from "../models/upcomingModel.js";

export const getUpcomings = async (req, res) => {
	try {
		const upcomings = await upcomingModel.find();
		res.status(200).json(upcomings);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createUpcoming = async (req, res) => {
	const upcoming = req.body;
	const newUpcoming = new upcomingModel(upcoming);
	try {
		await newUpcoming.save();
		res.status(201).json(newUpcoming);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const updateUpcoming = async (req, res) => {
	const { id } = req.params;
	const upcoming = req.body;

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send("no Upcoming eith the id: ", id);

	const updatedUpcoming = await upcomingModel.findByIdAndUpdate(
		id,
		{ ...upcoming, id },
		{ new: true }
	);
	res.json(updatedUpcoming);
};

export const deleteUpcoming = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send("No Upcoming with that Id", id);

	await upcomingModel.findByIdAndRemove(id);
	res.json({ message: "Upcoming Deleted Successfully" });
};
