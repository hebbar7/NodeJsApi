import express from 'express'
const app = express();
import swaggerDocs from './swagger.js'
import router from './routes/news.js'
import { port } from './config.js';

app.use(router)
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
  swaggerDocs(app, port)
});
