import { Request, Response } from "express";

export const getPLayer = (req: Request, res: Response) => {
    res.status(200).json({ player: "messi"});
}