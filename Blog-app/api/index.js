import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


const app = express();
// this bleow line allow us to send joson data
app.use(express.json());

app.listen(3000, () => {
  console.log('server is runnig on port 3000  ');
});


app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);


// DATABASE='mongodb://127.0.0.1:27017/service'
