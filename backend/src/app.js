import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());
app.use(express.json());


app.get('/healthcheck', (req, res) => {
  res.status(200).send('OK')
})

app.use((req, res) => {
  res.status(400).json({ status: 'error', message: '路由不存在' });
});
app.use((err, req, res, next) => {
  res
    .status(500)
    .json({ status: 'error', err: err.name, message: err.message });
});

export default app;