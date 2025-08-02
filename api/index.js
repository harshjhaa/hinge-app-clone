import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dayjs from 'dayjs';

const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
