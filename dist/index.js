"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const nutrition_1 = require("@csejtei/nutrition");
const app = express_1.default();
const port = 8080;
app.get("/", (req, res) => {
    const baseValues = {
        amount: 100,
        fat: 11,
        carbohydrate: 23,
        calories: 101,
        protein: 56
    };
    const rice = new nutrition_1.Food('rice', nutrition_1.Units.GRAM, baseValues);
    rice.changeAmount(459);
    res.send(rice.getCurrentValues());
});
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
