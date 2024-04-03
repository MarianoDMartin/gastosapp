import { Request, Response, NextFunction } from 'express';
import { Schema, ValidationError } from 'joi';

const validateRequest =
  (schema: Schema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
    } catch (error) {
      const validationError = error as ValidationError;
      return res.status(400).json({
        message: validationError.details[0].message,
      });
    }
    next();
  };

export default validateRequest;
