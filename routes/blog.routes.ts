
import Express from "express";
import BlogController from "../app/controller/blog.controller";

const router = Express.Router()


router.post("/", BlogController.create)
router.put("/:id", BlogController.update)

router.get("/", BlogController.get)
router.get("/:id", BlogController.getById)


router.delete("/:id", BlogController.remove)


export const blogRoutes = router
