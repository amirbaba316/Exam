import express from 'express';
import UserService  from '../services/user.service';

const userService = new UserService();

const router = express.Router();

router.get('/', async (req, res) => {
    const users = await userService.getAll();
    res.send(users);
});

export default router;
