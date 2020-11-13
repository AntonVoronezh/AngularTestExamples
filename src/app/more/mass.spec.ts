import { mass } from './mass';

describe('mass', () => {
  it('should be mass', () => {
    const res = mass();
    expect(res).toContain('a');
  });
});
