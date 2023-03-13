import express from 'express';
import cors from 'cors';
import { authRouter } from './routes/authRouter';
import { dbinit } from './utils/dbinit';

const PORT = process.env.PORT || 5000;

const app = express();

dbinit();

app.use(cors());

app.use(authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
