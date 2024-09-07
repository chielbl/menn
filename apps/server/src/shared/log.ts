import { env } from '@/shared';
import pino, { type Level } from 'pino';

export const log = pino({
  base: undefined,
  enabled: !!env.LOG_ENABLED || true,
  level: env.LOG_LEVEL || 'info',
  formatters: {
    level: (level) => {
      const label = level as Level;
      const levelSymbol =
        label === 'error' || label === 'fatal'
          ? '❌'
          : label === 'debug'
            ? '🚀 '
            : '';

      return { level: label, levelSymbol: levelSymbol };
    },
  },
});
