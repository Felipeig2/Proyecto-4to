import controller from "../controllers/paisController.js";
import express from 'express'

const router = express.Router();

router.route("/")
    .get(controller.allPaises)
    .post(controller.newPais);

export default router;