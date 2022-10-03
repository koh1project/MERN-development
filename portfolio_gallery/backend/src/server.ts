import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
dotenv.config();

const app = express();
const port = process.env.PORT;
const mongo_uri = process.env.MONGO_URI;
app.use('*', cors());


mongoose.connect(`${mongo_uri}`, (err) => {
		if (err) {
			console.error(err);
			throw err;
		}
			console.log('Connected to the database');
			app.listen(port, () => console.log(`Running on port ${port}`));
	}
);


app.get('/', (req, res) => {
  res.status(200).send({ message: 'Hello World!' });
})
