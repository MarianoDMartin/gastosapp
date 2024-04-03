import User from '../models/User';
import { UserResponse } from '../types/api';

export function mapUserToUserResponse(user: User): UserResponse {
  return {
    id: user.id,
    email: user.email,
    password: user.password,
    name: user.name,
    lastname: user.lastname,
    country: user.country,
  };
}
