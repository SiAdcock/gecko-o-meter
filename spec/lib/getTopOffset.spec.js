import { expect } from 'chai';
import getTopOffset from '../../src/lib/getTopOffset';
import { dial } from '../../src/constants';

describe('get top offset', () => {
  it('returns MAX_TOP_OFFSET if value = min', () => {
    const value = 0;
    const min = 0;
    const max = 100;

    expect(getTopOffset(value, min, max)).to.equal(dial.MAX_TOP_OFFSET);
  });
  it('returns MAX_TOP_OFFSET if value = max', () => {
    const value = 100;
    const min = 0;
    const max = 100;

    expect(getTopOffset(value, min, max)).to.equal(dial.MAX_TOP_OFFSET);
  });
  it('returns MIN_TOP_OFFSET if value is halfway between max and min', () => {
    const value = 50;
    const min = 0;
    const max = 100;

    expect(getTopOffset(value, min, max)).to.equal(dial.MIN_TOP_OFFSET);
  });
});
