import { type HelmetOptions } from 'helmet';

export const cspDirectives: HelmetOptions['contentSecurityPolicy'] = {
  directives: {
    blockAllMixedContent: '',
    objectSrc: ["'none'"],
    baseUri: ["'none'"],
    framerAncestors: ["'self'"],
    defaultSrc: ["'self'"],
  },
};
