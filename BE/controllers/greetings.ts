import { Request, Response } from 'express';

async function hello (req: Request, res: Response) {
    res.send('Hello, World!');
}

export default {
    hello
}