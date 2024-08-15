require('dotenv').config({ path: './.env' });

const express = require('express');
const morgan = require('morgan');

const app = express();

const indexRouter = require('./routes/indexroutes');


app.use('/', indexRouter);

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
