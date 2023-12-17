import express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
    console.log('Getting all courses');
    res.send();
});

export default router;
