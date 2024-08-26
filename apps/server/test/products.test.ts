import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import supertest from 'supertest';
import { createApp } from './../src/app';
import { mongoTest } from './shared/utils/mongo-test';

import type {
  Product as ProductDTO,
  ProductCreateOrUpdate,
} from '@repo/contract/types';

const app = await createApp();

describe('Products routes', () => {
  let product: ProductDTO;

  beforeAll(async () => {
    await mongoTest('connect');
    await mongoTest('drop');
  });

  afterAll(async () => {
    await mongoTest('disconnect');
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

  it('GET all products (Empty array)', async () => {
    await mongoTest('drop');
    const { body, status } = await supertest(app).get('/api/products');

    expect(status).toBe(200);
    expect(body.length).toEqual(0);
  });

  // Error handling
  it('POST create a product with invalid data (Bad request - 400)', async () => {
    const newProduct: ProductCreateOrUpdate = {
      name: '',
      description: '',
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
    const { status } = await supertest(app)
      .post('/api/products')
      .send(newProduct);

    expect(status).toBe(400);
  });

  it('GET product by id (Not found - 404)', async () => {
    const { status } = await supertest(app).get(
      '/api/products/66b4ba3305211655c07ae3b8',
    );

    expect(status).toBe(404);
  });

  it('PUT update a product (Not found - 404)', async () => {
    const updatedProduct = {
      ...product,
      name: 'Updated Product',
    };

    const { status } = await supertest(app)
      .put('/api/products/66b4ba3305211655c07ae3b8')
      .send(updatedProduct);

    expect(status).toBe(404);
  });

  it('PUT update a product (Bad request - 400)', async () => {
    const updatedProduct = {
      ...product,
      name: 'Updated Product',
      description: '',
    };

    const { status } = await supertest(app)
      .put('/api/products/66b4ba3305211655c07ae3b8')
      .send(updatedProduct);

    expect(status).toBe(400);
  });

  it('DELETE a product (No Content - 204)', async () => {
    const { status } = await supertest(app).delete(
      '/api/products/66b4ba3305211655c07ae3b8',
    );

    expect(status).toBe(204);
  });
});
