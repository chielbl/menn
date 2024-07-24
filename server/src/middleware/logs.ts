import { log } from '@/log';
import { fullPath } from '@/main';
import type { RequestHandler } from 'express';

export const logs: RequestHandler = (req, res, next) => {
  log.info({ path: fullPath + req.path, method: req.method });
  next();
};
