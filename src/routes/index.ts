import userRoutes from './user.routes';
import subjectRoutes from './subject.routes';

export default async (app) => {
    app.use('/api/users', userRoutes);
    app.use('/api/subjects', subjectRoutes);
};
