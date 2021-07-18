import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import upcomingsRouter from "./routes/upcomings.js";
import archivesRouter from "./routes/archives.js";
import contactsRouter from "./routes/contacts.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
	res.send(
		"Guntur Toastmasters API. Github: https://github.com/akashdoppalapudi/guntur-toastmasters-api"
	);
});

app.use("/upcomings", upcomingsRouter);
app.use("/archives", archivesRouter);
app.use("/contacts", contactsRouter);

const PORT = process.env.PORT || 5000;

mongoose
	.connect(process.env.CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`))
	)
	.catch((error) => console.log(error));

mongoose.set("useFindAndModify", false);
