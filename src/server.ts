import express from 'express';
import { authRouter } from './routes/authRouter';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(authRouter);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
