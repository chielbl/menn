import { ProductCreateOrUpdate } from './../src/schemas/types/ProductCreateOrUpdate';
import { ProductDTO } from './../src/schemas/types/ProductDTO';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import supertest from 'supertest';

import createApp from '../src/server';
import { mongooseDB } from './shared/utils/mongoose-helper';

const app = await createApp();

describe('Products routes', () => {
  let product: ProductDTO;

  beforeAll(async () => {
    await mongooseDB('connect');
    await mongooseDB('drop');
  });

  afterAll(async () => {
    await mongooseDB('disconnect');
  });

  // CRUD operations
  it('POST create a product', async () => {
    const newProduct: ProductCreateOrUpdate = {
      name: 'Sample Product',
      description: 'This is a sample product description.',
      price: 99.99,
      category: 'Cookie',
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      availabilityStatus: 'Out of Stock',
      thumbnail: 'https://via.placeholder.com/150',
      images: [],
      reviews: [],
    };
    const { body, status } = await supertest(app)
      .post('/api/products')
      .send(newProduct);
    product = body;

    expect(status).toBe(201);
    expect(product).toMatchObject(newProduct);
  });

  it('GET all products', async () => {
    const { body, status } = await supertest(app).get('/api/products');

    expect(status).toBe(200);
    expect(body.length).toBeGreaterThan(0);
  });

  it('GET product by id (products/:id)', async () => {
    const { body, status } = await supertest(app).get(
      `/api/products/${product.id}`,
    );

    expect(status).toBe(200);
    expect(body).toMatchObject(product);
  });

  it('PUT update a product (products/:id)', async () => {
    const updatedProduct = {
      ...product,
      name: 'Updated Product',
    };

    const { body, status } = await supertest(app)
      .put(`/api/products/${product.id}`)
      .send(updatedProduct);
    product = body;

    expect(status).toBe(200);
    expect(product).toMatchObject(updatedProduct);
  });

  it('DELETE a product (products/:id)', async () => {
    const { body, status } = await supertest(app).delete(
      `/api/products/${product.id}`,
    );

    expect(status).toBe(200);
    expect(body).toMatchObject(product);
  });
});
