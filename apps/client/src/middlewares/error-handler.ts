import { NextFetchEvent, NextRequest } from 'next/server';
import { MiddlewareFactory } from './types';

export const errorHandler: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    try {
      return await next(request, _next);
    } catch (error) {
      if (error instanceof Error) {
        console.error('❌ ~ withErrorHandler:', error.message);
      }
    }
  };
};
