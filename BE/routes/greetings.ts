const express = require('express');
import greetingsController from '../controllers/greetings'
const router = express.Router();

router.get('/hello', greetingsController.hello)

export default router