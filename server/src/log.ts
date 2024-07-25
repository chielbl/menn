import pino, { type Level } from 'pino';

export const log = pino({
  base: undefined,
  enabled: !!process.env.LOG_ENABLED || true,
  level: process.env.LOG_LEVEL || 'info',
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
