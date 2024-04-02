import { Request, Response } from 'express';
import helloHandler from './greetings';

describe('Hello Handler should', () => {
  it('return "Hello World!"', async () => {
    // config
    const req = {} as unknown as Request;
    const res = {
      send: jest.fn(),
    } as unknown as Response;

    // execution
    await helloHandler.hello(req, res);

    // expects
    expect(res.send).toHaveBeenCalledWith('Hello World!');
  });
});
