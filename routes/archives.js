import express from "express";

import {
	getArchives,
	createArchive,
	updateArchive,
	deleteArchive,
} from "../controllers/archives.js";

const archivesRouter = express.Router();

archivesRouter.get("/", getArchives);
archivesRouter.post("/", createArchive);
archivesRouter.patch("/:id", updateArchive);
archivesRouter.delete("/:id", deleteArchive);

export default archivesRouter;
