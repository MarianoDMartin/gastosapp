import { Request, Response, NextFunction } from 'express';
import db from '../db';

const connectDb =
  () => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await db.sequelize.authenticate();
    } catch (error) {
      return res
        .status(500)
        .json({ error, message: 'error connection to sql db' });
    }
    next();
  };

export default connectDb;
