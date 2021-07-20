import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

connectDB();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

/*app.use((req, res, next) => {
  console.log('HELLO');
  next();
});*/

app.get('/', (req, res) => {
  res.send('Api is running...');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(
  PORT,
  console.log(
    `server  running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);
