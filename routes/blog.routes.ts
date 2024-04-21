
import Express from "express";
import BlogController from "../app/controller/blog.controller";
import checkAuth from "../app/middleware/checkAuth";

const router = Express.Router()


router.post("/", checkAuth, BlogController.create)
router.put("/:id", checkAuth, BlogController.update)

router.get("/", BlogController.get)
router.get("/:id", BlogController.getById)


router.delete("/:id", BlogController.remove)


export const blogRoutes = router
