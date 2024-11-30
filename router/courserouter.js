import express from "express";
import {
  addCourse,
  updateCourse,
  deleteCourse,
} from "../controller/coursecontroller.js";
import { protectRoute } from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/add", protectRoute, addCourse);
router.put("/update", protectRoute, updateCourse);
router.delete("/delete", protectRoute, deleteCourse);

export default router;
