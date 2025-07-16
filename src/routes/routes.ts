import {Router} from "express";
import * as PlayerController from "../controllers/players-controller";

const router = Router();

router.get("/players", PlayerController.getPlayer);
router.get("/players/:id", PlayerController.getPlayerById);

export default router