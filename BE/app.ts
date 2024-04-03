import express from 'express';
import greetingsRouter from './routes/greetings';
import usersRouter from './routes/users';
import bodyParser from 'body-parser';
import cors from 'cors';

// init express
const app = express();
app.use(bodyParser.json());
app.use(cors());

// config routers
app.use('/greetings', greetingsRouter);
app.use('/users', usersRouter);

// init server on 4000
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
