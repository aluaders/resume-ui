import { enhancedRoutes, paths, routes } from './routes';
  
describe('routes', () => {
  test("should create enhanced routes list", () => {
    expect(enhancedRoutes.length).toBe(8);
  });

  test("should create routes list", () => {
    expect(routes.length).toBe(8);
  });

  test("should create paths list", () => {
    expect(Object.keys(paths).length).toBe(8);
  });
});