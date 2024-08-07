import type { Request, Response, NextFunction } from 'express';

// Security Headers
export const security = (req: Request, res: Response, next: NextFunction) => {
  const { path } = req;

  if (!path.includes('api-docs')) {
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Content-Security-Policy', "frame-ancestors 'none'; sandbox");
  }

  next();
};
