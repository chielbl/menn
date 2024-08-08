import { HttpError } from '@/shared';
import type { ErrorRequestHandler } from 'express';
import type { ZodError } from 'zod';

export const errorHandler: ErrorRequestHandler = (err, _req, res, next) => {
  if (err instanceof HttpError) {
    return res.status(err.status).send({ message: err.message });
  }

  if (err.name === 'ZodError') {
    const zodError = err as ZodError;
    console.log('🚀 ~ zodError:', JSON.stringify(zodError));
    const flatError = zodError.flatten();
    res.status(400).send(flatError);
    return;
  }

  // when the JSON is malformed
  if (err.name === 'SyntaxError') {
    res.status(400).send({ message: 'Invalid JSON' });
    return;
  }

  // some other error
  res
    .status(500)
    .send({ message: 'Something went wrong', details: err.message });
};
