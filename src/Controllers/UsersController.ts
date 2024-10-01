import {Router, Request} from 'express';
import { handelSignupRequest } from '../Routers/UsersRouter';
import {handelProfileRequest} from '../Routers/UsersRouter';
import VerifyUser from '../Midllewares/VerifyUser';

const router = Router();

router.get('/profile',VerifyUser,  handelProfileRequest);
router.post('/signup', handelSignupRequest);
router.patch('/', () => {});
router.delete('/signout/:id', () => {});

export default router;