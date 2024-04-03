import express from 'express';
import usersController from '../controllers/users';
import validateRequest from '../middlewares/validateRequest';
import createUserSchema from '../validationSchemas/createUser';
import signinSchema from '../validationSchemas/signin';
import connectDb from '../middlewares/db';

const router = express.Router();

router.post(
  '/',
  validateRequest(createUserSchema),
  connectDb(),
  usersController.create,
);

router.get(
  '/signin',
  validateRequest(signinSchema),
  connectDb(),
  usersController.signin,
);

export default router;
