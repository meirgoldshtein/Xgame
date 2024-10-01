import {Router, Request} from 'express';
import { handelLoginRequest } from '../Routers/AouthRouter';
const router = Router();

router.post('/login', handelLoginRequest);
router.delete('/logout', () => {});
export default router;