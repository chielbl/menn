import { ProductCreateOrUpdate } from './../src/schemas/types/ProductCreateOrUpdate';
import { ProductDTO } from './../src/schemas/types/ProductDTO';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import supertest from 'supertest';

import createApp from '../src/server';
import { mongooseDB } from './shared/utils/mongoose-helper';
import e from 'express';

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

  it('GET all products (Not found - 404)', async () => {
    await mongooseDB('drop');
    const { status } = await supertest(app).get('/api/products');

    expect(status).toBe(404);
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
