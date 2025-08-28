import { app } from './index';
describe('GET /api', () => {
  it('should return 200', async () => {
    const response = await app.request('/api/hello');
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ message: 'Hello Hono!' });
  })
  it('should return 401', async () => {
    const response = await app.request('/api/cron');
    expect(response.status).toBe(401);
    expect(await response.json()).toEqual({ message: 'Unauthorized' });
    console.log(response.body);
    //expect(response.body).toEqual({ message: 'Unauthorized' });
  })
});
