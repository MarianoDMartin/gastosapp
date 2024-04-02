import { Request, Response } from 'express';

async function hello(req: Request, res: Response) {
  return res.send('Hello World');
}

export default {
  hello,
};
