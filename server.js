import express from 'express'
const app = express();
import swaggerDocs from './swagger.js'
import router from './news/routes/news.js'

app.use(router)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
  swaggerDocs(app, port)
});
