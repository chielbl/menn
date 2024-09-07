import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

// Fetch variables from environment
export const env = createEnv({
  server: {
    HOST: z.string(),
    PORT: z.string(),
    NODE_ENV: z.string(),
  },
  client: {
    //  NEXT_PUBLIC_PUBLISHABLE_KEY: z.string().min(1),
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  runtimeEnv: {
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
  },
});
