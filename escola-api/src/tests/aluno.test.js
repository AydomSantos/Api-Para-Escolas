const request = require('supertest');
const app = require('../app');

describe('Alunos API', () => {
  it('should list all students', async () => {
    const response = await request(app).get('/api/alunos');
    expect(response.status).toBe(200);
  });

  // Adicione mais testes para store, update, destroy
});
