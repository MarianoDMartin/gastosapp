import express from 'express';
import greetingsRouter from './routes/greetings';
import usersRouter from './routes/users';
import bodyParser from 'body-parser';

// init express
const app = express();
app.use(bodyParser.json());

// config routers
app.use('/greetings', greetingsRouter);
app.use('/users', usersRouter);

// init server on 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
