import courseRoutes from './course.routes';

export default async (app) => {
    app.use('/api/courses', courseRoutes);
};
