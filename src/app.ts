import express from "express";
import bodyParser from "body-parser";

import * as nutritionController from "./controllers/nutrition";

const app = express();

app.set("host", process.env.HOST || '127.0.0.1');
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", nutritionController.getAllNutritions);

export default app;
