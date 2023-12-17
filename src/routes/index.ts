import userRoutes from './user.routes';

export default async (app) => {
    app.use('/api/users', userRoutes);
};
