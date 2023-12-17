import dotenv from 'dotenv';
import morgan from 'morgan';
import moment from 'moment-timezone';
import express from 'express';
import cors from 'cors';
import { app, server } from './src/bootstrap/server';
import boolParser from 'express-query-boolean';
import initDatabase from './src/bootstrap/database';
import initRouter from './src/bootstrap/router';

dotenv.config();

const startServer = () => {
    const port = process.env.PORT;

    initDatabase(process.env.DATABASE_URI);

    morgan.token('date', () => {
        return moment().tz('Asia/Kolkata').format('DD/MM/YYYY hh:mm:ss a');
    });

    app.use(morgan(':method :url HTTP/:http-version :status - :response-time ms - :date'));
    app.use(express.json());
    app.use(express.static('uploads'));
    app.use(boolParser());

    initRouter(app);

    server.listen({ port }, () => {
        console.log(`Server is listening on port - ${port}`);
    });
};

startServer();
