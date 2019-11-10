import { Response, Request } from "express";

export const getAllNutritions = (request: Request, response: Response) => {
    response.status(200).json({ message: 'Get all nutritions' });
};
