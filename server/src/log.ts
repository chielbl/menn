import pino, { type Level } from 'pino';
import pinoPretty from 'pino-pretty';

const pinoPrettyConfig = {
  base: undefined,
  destination: process.stdout,
  enabled: !!process.env.LOG_ENABLED || true,
  level: process.env.LOG_LEVEL || 'info',
  prettyPrint: {
    minimumLevel: 'info',
    ignore: 'levelSymbol',
    translateTime: 'SYS:standard',
    messageFormat: '{levelSymbol} {msg}',
    colorize: true,
    singleLine: true, // Print logs in a single line
    hideObject: false, // Hide object fields
  },
  // serializers: {
  //   req: (req: { method: string; url: string; headers: object }) => ({
  //     method: req.method,
  //     url: req.url,
  //     headers: req.headers,
  //   }),
  //   res: (res: { statusCode: number }) => ({
  //     statusCode: res.statusCode,
  //   }),
  // },
};

export const log = pino(
  {
    base: pinoPrettyConfig.base,
    enabled: pinoPrettyConfig.enabled,
    level: pinoPrettyConfig.level,
    // formatters: {
    //   level: (level) => {
    //     const label = level as Level;
    //     let levelSymbol;

    //     switch (label) {
    //       case 'error' || 'fatal':
    //         levelSymbol = '❌';
    //         break;
    //       case 'warn':
    //         levelSymbol = '⚠️';
    //         break;
    //       case 'info':
    //         levelSymbol = 'ℹ️ ';
    //         break;
    //       default:
    //         levelSymbol = '🚀';
    //         break;
    //     }

    //     return { level: label, levelSymbol: levelSymbol };
    //   },
    // },
    // transport: {
    //   target: 'pino-pretty',
    //   options: pinoPrettyConfig.prettyPrint,
    // },
    // serializers: pinoPrettyConfig.serializers,
  },
  pinoPretty(pinoPrettyConfig),
);

// import pino, { type Level } from 'pino';

// export const log = pino({
//   base: undefined,
//   enabled: !!process.env.LOG_ENABLED || true,
//   level: process.env.LOG_LEVEL || 'info',
//   formatters: {
//     level: (label) => {
//       const value = label as Level;
//       let levelString = value.toUpperCase();

//       switch (value) {
//         case 'error' || 'fatal':
//           levelString = `❌ ${levelString}`;
//           break;
//         case 'info':
//           levelString = `ℹ️  ${levelString}`;
//           break;
//         default:
//           levelString = levelString;
//       }

//       return { level: levelString };
//     },
//   },
// });
