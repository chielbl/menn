import { fullPath } from '@/server';
import { log } from '@/shared';
import type { RequestHandler } from 'express';

export const logHandler: RequestHandler = (req, res, next) => {
  log.info({ path: fullPath + req.path, method: req.method });
  next();
};
