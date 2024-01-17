import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


const app = express();

app.listen(3000 , () => {
    console.log('server is runnig on port 3000  ');
});



// DATABASE='mongodb://127.0.0.1:27017/service'
