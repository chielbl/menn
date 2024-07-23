import helmet, { type HelmetOptions } from 'helmet';

export const contentSecurityPolicy: HelmetOptions['contentSecurityPolicy'] = {
  directives: {
    blockAllMixedContent: '',
    objectSrc: ["'none'"],
    baseUri: ["'none'"],
    frameAncestors: ["'self'"],
    defaultSrc: ["'self'"],
  },
};

export const strictTransportSecurity: HelmetOptions['strictTransportSecurity'] =
  {
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
