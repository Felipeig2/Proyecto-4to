
import controller from "../controllers/pjController.js";
import express from 'express';

const router = express.Router();

router.route("/pjs/:name")  
    .get(controller.getPjByName);

router.route("/pjs")
    .get(controller.getAllpjs)
    .post(controller.newPj);

router.route("/pjs/:id")
    .delete(controller.deletePj)
    .get(controller.getPjById)
    .put(controller.UpdatePj);

export default router;
