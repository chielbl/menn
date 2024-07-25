import pino, { type Level } from 'pino';

export const log = pino({
  base: undefined,
  enabled: !!process.env.LOG_ENABLED || true,
  level: process.env.LOG_LEVEL || 'info',
  formatters: {
    level: (level) => {
      const label = level as Level;
      let levelSymbol;

      switch (label) {
        case 'error' || 'fatal':
          levelSymbol = '❌';
          break;
        case 'warn':
          levelSymbol = '⚠️';
          break;
        case 'info':
          levelSymbol = 'ℹ️ ';
          break;
        default:
          levelSymbol = '🚀';
          break;
      }

      return { level: label, levelSymbol: levelSymbol };
    },
  },
});
