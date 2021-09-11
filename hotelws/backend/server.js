import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.get('/', (req, res) =>
{
  res.send('api is Running');
});

app.use(notFound);
app.use(errorHandler);
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));


