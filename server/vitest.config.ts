import { configDefaults, defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  test: {
    ...configDefaults,
  },
  plugins: [tsconfigPaths()],
});
