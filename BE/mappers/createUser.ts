import User from '../models/User';
import { CreateUserResponse } from '../types/api';

export function mapUserToCreateUserResponse(user: User): CreateUserResponse {
  return {
    id: user.id,
    email: user.email,
    password: user.password,
    name: user.name,
    lastname: user.lastname,
    country: user.country,
  };
}
