import { Request, Response } from 'express';
import { createUser, getUserByEmail } from '../repositories/userRepository';
import { CreateUserRequest, SigninRequest } from '../types/api';
import { mapUserToUserResponse } from '../mappers/createUser';

async function create(req: Request, res: Response) {
  try {
    const requestBody = req.body as CreateUserRequest;

    // check if email exists
    const userExist = await getUserByEmail(requestBody.email);

    if (userExist) {
      return res.status(409).json({ message: 'the email already exists' });
    }

    // add new user
    const result = await createUser(requestBody);

    // map and return response
    return res.json(mapUserToUserResponse(result));
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
}

async function signin(req: Request, res: Response) {
  try {
    const requestBody = req.body as SigninRequest;

    // check if email exists
    const userExist = await getUserByEmail(requestBody.email);
    if (!userExist || userExist.password != requestBody.password) {
      return res.status(409).json({ message: 'incorrect email or password' });
    }

    // map and return response
    return res.json(mapUserToUserResponse(userExist));
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
}

export default {
  create,
  signin,
};
