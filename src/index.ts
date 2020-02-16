import express from "express";
import { Food, Units, Nutritions } from '@csejtei/nutrition';

const app = express();
const port = 8080;

app.get("/", (req, res) => {
    const baseValues: Nutritions = {
        amount: 100,
        fat: 11,
        carbohydrate: 23,
        calories: 101,
        protein: 56
    };

    const rice = new Food('rice', Units.GRAM, baseValues);
    rice.changeAmount(459);

    res.send(rice.getCurrentValues());
});

app.listen(port, () => { });
