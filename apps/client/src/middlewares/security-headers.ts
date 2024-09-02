import { NextFetchEvent, NextMiddleware, NextRequest } from 'next/server';
import { MiddlewareFactory } from './types';

const generateCsp = () => {
  const nonceKey = Buffer.from(crypto.randomUUID()).toString('base64');
  const csp = `
    default-src 'self';
    script-src 'self' 'nonce-${nonceKey}' 'strict-dynamic';
    style-src 'self' 'nonce-${nonceKey}';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
   `
    .replace(/\s{2,}/g, ' ')
    .trim();

  return { csp, nonceKey };
};

export const securityHeaders: MiddlewareFactory = (next: NextMiddleware) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const res = await next(request, _next);
    const { csp, nonceKey } = generateCsp();

    if (res) {
      res.headers.set('Content-Security-Policy', csp);
      res.headers.set('x-nonce', nonceKey);
    }

    return res;
  };
};
