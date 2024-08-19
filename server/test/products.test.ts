import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import supertest from 'supertest';

import createApp from '../src/server';
import { mongooseDB } from './shared/utils/mongoose-helper';
import { productsMD } from './shared/mocked-data';

const app = await createApp();

describe('Products routes', () => {
  beforeAll(async () => {
    await mongooseDB('connect');
    await mongooseDB('drop');
    await mongooseDB('seed');
  });

  afterAll(async () => {
    await mongooseDB('disconnect');
  });

  it('GET all products', async () => {
    const res = await supertest(app).get('/api/products');

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(productsMD.length);
  });
});
