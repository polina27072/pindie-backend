const express = require('express');

const cors = require('./middlewares/cors');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const pagesRouter = require('./routes/pages');
const apiRouter = require('./routes/api');
const path = require('path');

const connectToDatabase = require('./database/connect');

const app = express();
const PORT = 3001;

connectToDatabase();

app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, 'public')),
);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});