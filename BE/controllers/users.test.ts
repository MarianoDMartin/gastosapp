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
  password: 'password',
};

const req = {
  body: {
    email: 'test@example.com',
    password: 'password',
    name: 'Test User',
  },
} as Request;
const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
  send: jest.fn(),
} as unknown as Response;

describe('User', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    (userRepository.getUserByEmail as jest.Mock).mockResolvedValue(null);
    (userRepository.createUser as jest.Mock).mockResolvedValue(newUser);
  });

  describe('create function should', () => {
    it('create a new user', async () => {
      await usersController.create(req, res);

      expect(userRepository.createUser).toHaveBeenCalledWith({
        email: 'test@example.com',
        name: 'Test User',
        password: 'password',
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

  describe('signin function should', () => {
    it('signin succesfully', async () => {
      (userRepository.getUserByEmail as jest.Mock).mockResolvedValue(newUser);
      await usersController.signin(req, res);

      expect(res.json).toHaveBeenCalledWith(newUser);
    });

    it('return error if email does not exist', async () => {
      await usersController.signin(req, res);

      expect(res.status).toHaveBeenCalledWith(409);
      expect(res.json).toHaveBeenCalledWith({
        message: 'incorrect email or password',
      });
    });

    it('return error if email password is incorrect', async () => {
      (userRepository.getUserByEmail as jest.Mock).mockResolvedValue(newUser);
      req.body.password = 'wrongpass';

      await usersController.signin(req, res);

      expect(res.status).toHaveBeenCalledWith(409);
      expect(res.json).toHaveBeenCalledWith({
        message: 'incorrect email or password',
      });
    });
  });
});
