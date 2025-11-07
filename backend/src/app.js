import dotenv from 'dotenv';
import express from 'express';
import connectDB from 'monguii';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);


const Port = process.env.PORT;
const URI = process.env.MONGODB_URI;

connectDB(URI).then(() => {
  app.listen(Port, () => {
    console.log(`Server is listening on port ${Port}`);
  });
});