import express from 'express';
import SubjectService  from '../services/subject.service';

const subjectService = new SubjectService();

const router = express.Router();

router.get('/', async (req, res) => {
    const subjects = await subjectService.getAll();
    res.send(subjects);
});

export default router;
