import { Request, Response } from 'express';
import usersController from './users';
import * as userRepository from '../repositories/userRepository';

jest.mock('../repositories/userRepository', () => ({
  createUser: jest.fn(),
  getUserByEmail: jest.fn(),
}));
const newUser = {
  id: 1,
  email: 'test@example.com',
  name: 'Test User',
};

const req = {
  body: {
    email: 'test@example.com',
    name: 'Test User',
  },
} as Request;
const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
  send: jest.fn(),
} as unknown as Response;

describe('User create function should', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    (userRepository.getUserByEmail as jest.Mock).mockResolvedValue(null);
    (userRepository.createUser as jest.Mock).mockResolvedValue(newUser);
  });

  it('create a new user', async () => {
    await usersController.create(req, res);

    expect(userRepository.createUser).toHaveBeenCalledWith({
      email: 'test@example.com',
      name: 'Test User',
    });

    expect(res.json).toHaveBeenCalledWith(newUser);
  });

  it('return error if email exists', async () => {
    (userRepository.getUserByEmail as jest.Mock).mockResolvedValue(newUser);

    await usersController.create(req, res);

    expect(userRepository.createUser).not.toHaveBeenCalled();

    expect(res.status).toHaveBeenCalledWith(409);
    expect(res.json).toHaveBeenCalledWith({
      message: 'the email already exists',
    });
  });

  it('return error if internal server error', async () => {
    (userRepository.getUserByEmail as jest.Mock).mockRejectedValue('error');

    await usersController.create(req, res);

    expect(userRepository.createUser).not.toHaveBeenCalled();

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith('Internal Server Error');
  });
});
