import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { router as userRouter } from './routes/users';
import { server } from './schema/apolloServer';

dotenv.config();
const port = process.env.PORT;
const mongo_uri = process.env.MONGO_URI;

export const app = express();

app.use('*', cors());
app.use(bodyParser.json());
app.use('/users', userRouter);

// mongoose.connect(`${mongo_uri}`, (err) => {
//   if (err) {
//     console.error(err);
//     throw err;
//   }
//   console.log('Connected to the database');
//   app.listen(port, () => console.log(`Running on port ${port}`));
// });

app.listen(port, () => {
  console.log(`Running on port ${port}`);
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
});

app.get('/', (req, res) => {
  res.status(200).send({ message: 'Hello World!' });
});
