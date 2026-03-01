import request from 'supertest';
import express, { Express } from 'express';
import apiRouter from './api.routes';

describe('apiRouter', () => {
  let app: Express;

  beforeEach(() => {
    app = express();
    app.use('/api', apiRouter);

    app.post('/api/test', (req, res) => {
      res.json({ body: req.body });
    });
  });

  it('should respond to requests', async () => {
    const res = await request(app).post('/api/test');
    expect(res.status).not.toBe(404);
  });

  it('should parse JSON body', async () => {
    const payload = { name: 'Test' };

    const res = await request(app).post('/api/test').send(payload).set('Content-Type', 'application/json');

    expect(res.body.body).toEqual(payload);
  });

  it('should include CORS headers', async () => {
    const res = await request(app).options('/api/test');

    expect(res.headers['access-control-allow-origin']).toBe('*');
  });
});
