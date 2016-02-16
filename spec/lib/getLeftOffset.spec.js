import { expect } from 'chai';
import getLeftOffset from '../../src/lib/getLeftOffset';
import { dial } from '../../src/constants';

describe('get left offset', () => {
  it('returns MIN_LEFT_OFFSET if value = min', () => {
    const value = 0;
    const min = 0;
    const max = 100;

    expect(getLeftOffset(value, min, max)).to.equal(dial.MIN_LEFT_OFFSET);
  });
  it('returns halfway between MIN_LEFT_OFFSET and MAX_LEFT_OFFSET if value halfway between min and max', () => {
    const value = 50;
    const min = 0;
    const max = 100;
    const halfway = (dial.MAX_LEFT_OFFSET - dial.MIN_LEFT_OFFSET) / 2;

    expect(getLeftOffset(value, min, max)).to.equal(halfway);
  });
});
