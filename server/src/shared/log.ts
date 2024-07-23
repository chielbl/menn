import pino, { type Level } from 'pino';

export const log = pino({
  base: undefined,
  enabled: !!process.env.LOG_ENABLED || true,
  level: process.env.LOG_LEVEL || 'info',
  formatters: {
    level: (label) => {
      const value = label as Level;
      let levelString = value.toUpperCase();

      switch (value) {
        case 'error' || 'fatal':
          levelString = `❌ ${levelString}`;
          break;
        case 'info':
          levelString = `ℹ️  ${levelString}`;
          break;
        default:
          levelString = levelString;
      }

      return { level: levelString };
    },
  },
});
