const request = require('supertest');
import { app } from '../../server/server';

// homepage successfully loads with res.status = 200.
describe('GET /', () => {
  it('should return a response with a message', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });
});

// server is listening on port 3000.
describe('Server', () => {
  it('should start the server', async () => {
    const spy = jest.spyOn(console, 'log');
    app.listen(3000);
    expect(spy).toHaveBeenCalledWith('Server running: http://localhost:3000/');
  });
});
