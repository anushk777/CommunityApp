import express from "express"
import { resisterUser, loginUser } from "../Controllers/AuthControllers.js";

const router = express.Router();

router.post('/register', resisterUser);
router.post('/login', resisterUser);

export default router