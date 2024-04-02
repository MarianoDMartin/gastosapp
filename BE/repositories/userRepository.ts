import User from '../models/User';
import { CreateUserRequest } from '../types/api';

export async function getUsers() {
  return await User.findAll();
}

export async function createUser(createUserRequest: CreateUserRequest) {
  return await User.create(createUserRequest);
}

export async function getUserByEmail(email: string) {
  return await User.findOne({
    where: {
      email,
    },
  });
}
