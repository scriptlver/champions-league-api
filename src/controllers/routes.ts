import {Router} from "express";
import { getPlayer } from "./players-controller";

const router = Router();

router.get("/players", getPlayer);

export default router