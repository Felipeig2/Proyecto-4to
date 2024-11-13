import controller from "../controllers/dinoControllers";
import express from "express"

const router = router.express();

  router.route("/")
    .get(controller.getAllDinos)
    .post(controller.postOneDino);

  router.route("/:id")
    .get(controller.getOneDino)
    .delete(controller.deleteOneDino)
    .put(controller.putOneDino);


    export default router;
