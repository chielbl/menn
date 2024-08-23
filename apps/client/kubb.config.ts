import { defineConfig } from '@kubb/core';
import { pluginOas } from '@kubb/plugin-oas';
import { pluginTs } from '@kubb/swagger-ts';
import { pluginSwr } from '@kubb/swagger-swr';

export default defineConfig({
  input: {
    path: '../server/swagger/out/openapi.json',
  },
  output: {
    path: './kubb',
    clean: true,
  },
  plugins: [
    // Oas is a needed plugin, without this plugin you can't run the command, added a delete in package.json "rm -rf ..."
    pluginOas({ output: false }),
    pluginTs({
      output: {
        path: './types',
      },
      enumType: 'asConst',
      enumSuffix: 'Enum',
      group: {
        type: 'tag',
        output: './types/controllers/{{tag}}',
      },
    }),
    pluginSwr({
      output: {
        path: './hooks',
      },
      group: {
        type: 'tag',
        output: './hooks/{{tag}}',
      },
    }),
  ],
});
