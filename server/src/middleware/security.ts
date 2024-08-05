import type { Request, Response, NextFunction } from 'express';

// Security Headers
export const security = (_req: Request, res: Response, next: NextFunction) => {
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Content-Security-Policy', "frame-ancestors 'none'; sandbox");
  next();
};
