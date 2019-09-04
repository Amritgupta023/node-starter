import { Router } from 'express';
import auth from './auth';
import user from './user';
import role from './role';

const router = new Router();

router.use('/auth', auth)
router.use('/user', user);
router.use('/role', role);

export default router;
