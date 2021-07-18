import express from "express";

import {
	getNewsLetters,
	createNewsLetter,
	updateNewsLetter,
	deleteNewsLetter,
} from "../controllers/newsLetters.js";

const newsLettersRouter = express.Router();

newsLettersRouter.get("/", getNewsLetters);
newsLettersRouter.post("/", createNewsLetter);
newsLettersRouter.patch("/:id", updateNewsLetter);
newsLettersRouter.delete("/:id", deleteNewsLetter);

export default newsLettersRouter;
