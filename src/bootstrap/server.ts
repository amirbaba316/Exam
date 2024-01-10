import { createServer } from 'http';
import express from 'express';

export const app = express();

export const server = createServer(app);
