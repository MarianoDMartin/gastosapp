import express from 'express';
import usersController from '../controllers/users';
import validateRequest from '../middlewares/validateRequest';
import createUserSchema from '../validationSchemas/createUser';
import connectDb from '../middlewares/db';

const router = express.Router();

router.post(
  '/',
  validateRequest(createUserSchema),
  connectDb(),
  usersController.create,
);

export default router;
