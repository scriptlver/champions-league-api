import { Request, Response } from "express";
import { getPlayerService } from "../services/players-service";
import { ok } from "../utils/http-helper";

export const getPlayer = async (req: Request, res: Response) => {
   const data = await getPlayerService();
   const response = await ok(data);
    res.status(response.statusCode).json(response.body);
};    