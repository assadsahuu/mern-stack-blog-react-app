import express from 'express'
import { signup ,signin,googlein} from '../controllers/auth.controller.js';
const router=express.Router();

router.post('/signup',signup);
router.post('/signin',signin);
router.post('/google',googlein);
export default router;
