import { Router } from 'express';
import authController from './auth.controller';

const router = new Router();

router.post('/login', authController.logIn);
router.post('/singUp',authController.signUp);

export default router;