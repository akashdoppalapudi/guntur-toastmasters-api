import mongoose from "mongoose";

import contactModel from "../models/contactModel.js";

export const getContacts = async (req, res) => {
	try {
		const contacts = await contactModel.find();
		res.status(200).json(contacts);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createContact = async (req, res) => {
	const contact = req.body;
	const newContact = new contactModel(contact);
	try {
		await newContact.save();
		res.status(201).json(newContact);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const updateContact = async (req, res) => {
	const { id } = req.params;
	const contact = req.body;

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send("no Contact eith the id: ", id);

	const updatedContact = await contactModel.findByIdAndUpdate(
		id,
		{ ...contact, id },
		{ new: true }
	);
	res.json(updatedContact);
};

export const deleteContact = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send("No Contact with that Id", id);

	await contactModel.findByIdAndRemove(id);
	res.json({ message: "Contact Deleted Successfully" });
};
