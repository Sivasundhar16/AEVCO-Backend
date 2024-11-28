import express from "express";

import {
  getcurrentUser,
  login,
  logout,
  signup,
} from "../controller/authcontroler.js";
import { protectRoute } from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.get("/me", protectRoute, getcurrentUser);

export default router;
