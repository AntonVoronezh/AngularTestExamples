import { greet } from './greet';

describe('greet', () => {
  it('should include', () => {
    const result = greet('aaa');
    expect(result).toContain('aaa');
  });
});
