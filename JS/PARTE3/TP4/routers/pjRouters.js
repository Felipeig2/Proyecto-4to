import controller from "../controllers/pjController.js";
import express from 'express'

const router = express.Router();

router.route("/")
    .get(controller.getAllpjs)
    .post(controller.newPj);

  router.route("/:id")
    .delete(controller.deletePj)
    .get(controller.getPjById)
    .put(controller.UpdatePj);
    
  router.route("/:name")
  .get(controller.getPjByName)



  export default router;