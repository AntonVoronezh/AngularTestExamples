import { comp } from './compute';

describe('comp', () => {
  it('should be 0', () => {
    const result = comp(-1);
    expect(result).toBe(0);
  });
});
