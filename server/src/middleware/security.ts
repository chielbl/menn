import helmet, { type HelmetOptions } from 'helmet';

// Define the Content Security Policy (CSP) options
const contentSecurityPolicy: HelmetOptions['contentSecurityPolicy'] = {
  useDefaults: false,
  directives: {
    sandbox: '',
    defaultSrc: ["'none'"],
    frameAncestors: ["'none'"],
  },
};

// Define the Strict-Transport-Security (HSTS) options
const strictTransportSecurity: HelmetOptions['strictTransportSecurity'] = {
  maxAge: 31536000,
  includeSubDomains: true,
  preload: true,
};

/**
 * Default
 * - Referrer-Policy: no-referrer
 * - X-Content-Type-Options: nosniff
 *
 * resources: https://helmetjs.github.io/#get-started
 */
export const security = helmet({
  contentSecurityPolicy,
  strictTransportSecurity,
  xFrameOptions: {
    action: 'deny',
  },
});
