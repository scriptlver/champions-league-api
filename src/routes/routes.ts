import {Router} from "express";
import * as PlayerController from "../controllers/players-controller";

const router = Router();

router.get("/players", PlayerController.getPlayer);
router.post("/players", PlayerController.postPlayer);
router.get("/players/:id", PlayerController.getPlayerById);
router.delete("/players/:id", PlayerController.deletePlayer);

export default router;