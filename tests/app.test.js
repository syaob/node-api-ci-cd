// const request = require('supertest');
// const app = require('../functions/api'); // Importez le handler de la fonction

const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
  test('It should respond to the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});

// Mettez à jour les autres tests de la même manière


// describe('Test the /status path', () => {
//   test('It should respond with JSON containing API status', async () => {
//     const response = await request(app).get('/status');
//     expect(response.statusCode).toBe(200);
//     expect(response.body).toEqual({ status: 'API is running' });
//   });
// });

// describe('Test the /version path', () => {
//   test('It should respond with JSON containing API version', async () => {
//     const response = await request(app).get('/version');
//     expect(response.statusCode).toBe(200);
//     expect(response.body).toEqual({ version: '1.0.1' });
//   });
// });
