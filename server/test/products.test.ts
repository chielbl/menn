import { ProductDTO } from './../src/schemas/types/ProductDTO';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import supertest from 'supertest';

import createApp from '../src/server';
import { mongooseDB } from './shared/utils/mongoose-helper';
import { mockProduct, mockProductId, mockProducts } from './shared/mock-data';

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
    const { body, status } = await supertest(app).get('/api/products');
    const products = body as ProductDTO[];

    expect(status).toBe(200);
    expect(products.length).toBeGreaterThan(0);
    expect(products).toHaveLength(mockProducts.length);
  });

  it('GET product by id (products/:id)', async () => {
    const { body, status } = await supertest(app).get(
      `/api/products/${mockProductId}`,
    );
    const product = body as ProductDTO;

    expect(status).toBe(200);
    expect(product).toMatchObject(mockProduct);
  });
});
