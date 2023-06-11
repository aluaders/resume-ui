import { routes } from './routes';
  
describe('routes', () => {
  test("should create routes list", () => {
    expect(routes.length).toBe(8);
  });
});