import express from "express";

import {
	getContacts,
	createContact,
	updateContact,
	deleteContact,
} from "../controllers/contacts.js";

const contactsRouter = express.Router();

contactsRouter.get("/", getContacts);
contactsRouter.post("/", createContact);
contactsRouter.patch("/:id", updateContact);
contactsRouter.delete("/:id", deleteContact);

export default contactsRouter;
