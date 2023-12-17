import mongoose from 'mongoose';

export default async (DATABASE_URI) => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(DATABASE_URI);
        console.log('Database is connected');
    } catch (e: any) {
        console.log(`Coundn't connect to database, Error: ${e.message}`);
        process.exit(1);
    }
};
