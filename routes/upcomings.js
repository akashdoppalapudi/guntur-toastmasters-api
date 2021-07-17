import express from "express";

import {
	getUpcomings,
	createUpcoming,
	updateUpcoming,
	deleteUpcoming,
} from "../controllers/upcomings.js";

const upcomingsRouter = express.Router();

upcomingsRouter.get("/", getUpcomings);
upcomingsRouter.post("/", createUpcoming);
upcomingsRouter.patch("/:id", updateUpcoming);
upcomingsRouter.delete("/:id", deleteUpcoming);

export default upcomingsRouter;
