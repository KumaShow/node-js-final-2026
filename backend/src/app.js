import cors from 'cors';
import express from 'express';
import routes from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/healthcheck', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});

app.use('/api', routes);

app.use((req, res) => {
  res.status(404).json({ status: 'error', message: '路由不存在' });
});
app.use((err, req, res, next) => {
  res
    .status(err.statusCode || 500)
    .json({ status: 'failed', message: err.message });
});

export default app;