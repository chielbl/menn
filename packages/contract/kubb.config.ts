import { defineConfig } from '@kubb/core';
import { pluginTs } from '@kubb/swagger-ts';
import { pluginOas } from '@kubb/plugin-oas';
import { pluginZod } from '@kubb/swagger-zod';
import { pluginSwr } from '@kubb/swagger-swr';

export default defineConfig({
  input: {
    path: './tsp-openapi/openapi.json',
  },
  output: {
    path: './kubb',
    clean: true,
  },
  plugins: [
    // Oas is a needed plugin, without this plugin you can't run the command, added a delete in package.json "rm -rf ..."
    pluginOas({ output: false }),
    // Client
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
        path: './',
      },
      group: {
        type: 'tag',
        output: './hooks/{{tag}}',
      },
    }),
    // Server
    // pluginTs({
    //   output: {
    //     path: `./types/server`,
    //   },
    //   enumType: 'asConst',
    //   enumSuffix: 'Enum',
    //   group: {
    //     type: 'tag',
    //     output: './types/server/controllers/{{tag}}',
    //   },
    //   transformers: {
    //     name: (name) => {
    //       const names = ['Product'];
    //       const idx = names.findIndex((n) => name.startsWith(n));
    //       const findName = names[idx];

    //       return names.includes(name) ||
    //         (name.startsWith(findName) && !name.startsWith(`${findName}s`))
    //         ? `${name}DTO`
    //         : name;
    //     },
    //   },
    // }),
    pluginZod({
      output: {
        path: `./schemas`,
      },
    }),
  ],
});
