import express from 'express';
import { User } from '../shared/models';

const router = express.Router();

router.post('/', async (req, res) => {
    const user = await User.create({
        _id: '12345678',
        name: 'Amir',
        username: 'amir',
        password: '123456',
        email: 'amir@gmail.com',
    });
    res.send(user);
});

export default router;
