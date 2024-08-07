import { defineConfig } from '@kubb/core';
import { pluginTs } from '@kubb/swagger-ts';
// @ts-ignore
import { pluginOas } from '@kubb/plugin-oas';
// @ts-ignore
import { pluginZod } from '@kubb/swagger-zod';

export default defineConfig({
  input: {
    path: './swagger/out/openapi.json',
  },
  output: {
    path: './src/schemas',
  },
  plugins: [
    // Oas is a needed plugin, without this plugin you can't run the command, added a delete in package.json "rm -rf ..."
    pluginOas(),
    pluginZod({
      output: {
        path: './zod',
        exportAs: 'schemas',
      },
    }),
    pluginTs({
      output: {
        path: './types',
      },
      enumType: 'asConst',
      enumSuffix: 'Enum',
      dateType: 'date',
      unknownType: 'unknown',
      optionalType: 'questionTokenAndUndefined',
      oasType: false,
      exclude: [
        {
          type: 'tag',
          pattern: 'store',
        },
      ],
      group: {
        type: 'tag',
        output: './types/{{tag}}Controller',
      },
      transformers: {
        name: (name) => {
          return ['Product'].includes(name) ? `${name}DTO` : name;
        },
      },
    }),
  ],
});
