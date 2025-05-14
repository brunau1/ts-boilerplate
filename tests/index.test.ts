import { greet } from '../src/index';

describe('greet function', () => {
  test('should return default greeting when no name is provided', () => {
    const result = greet();
    expect(result).toBe('Hello, World!');
  });

  test('should return personalized greeting when a name is provided', () => {
    const result = greet('TypeScript');
    expect(result).toBe('Hello, TypeScript!');
  });
});
