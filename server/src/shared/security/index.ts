import helmet from 'helmet';
import { cspDirectives } from './csp';

export const security = helmet({ contentSecurityPolicy: cspDirectives });
