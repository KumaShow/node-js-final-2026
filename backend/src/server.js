import 'dotenv/config';
import { appDataSource } from '../database/data-source.js';
import app from './app.js';

const port = Number(process.env.PORT) || 8080;

async function startServer() {
  try {
    // 1. 初始化資料庫
    await appDataSource.initialize();

    // 2. 啟動 HTTP Server
    const server = app.listen(port);

    server.on('listening', () => {
      console.log(`Server 啟動在 http://localhost:${port}`);
      console.log(`Swagger UI：http://localhost:${port}/docs`);
    });

    server.on('error', (err) => {
      console.error('伺服器啟動失敗：', err);
      process.exit(1);
    });
  } catch (err) {
    console.error('應用程式啟動失敗：', err);

    if (appDataSource.isInitialized) {
      await appDataSource.destroy();
    }

    process.exit(1);
  }
}

startServer();