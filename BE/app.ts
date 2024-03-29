import { Request, Response } from 'express';
const express = require('express');
import greetingsRouter from './routes/greetings'

// init express
const app = express();

// config endpoint
app.use('/greetings', greetingsRouter);

// init server on 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});