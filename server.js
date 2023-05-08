import express from 'express'
import apicache from 'apicache'
const app = express();
import swaggerDocs from './swagger.js'
import router from './routes/news.js'
import { port } from './config.js';

let cache = apicache.middleware

app.use(router)
app.use(cache('10 minutes'))
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
  swaggerDocs(app, port)
});
