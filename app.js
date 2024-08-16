require('dotenv').config({ path: './.env' });

const express = require('express');
const morgan = require('morgan');

const app = express();

require('./models/db');
const indexRouter = require('./routes/index.routes');
const userRouter = require('./routes/user.routes');

app.use(morgan('tiny'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
