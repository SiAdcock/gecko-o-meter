import { expect } from 'chai';
import getRotation from '../../src/lib/getRotation';
import { dial } from '../../src/constants';

describe('get rotation', () => {
  it('returns MIN_ROTATION if value = min', () => {
    const value = 0;
    const min = 0;
    const max = 100;

    expect(getRotation(value, min, max)).to.equal(dial.MIN_ROTATION);
  });
  it('returns MAX_ROTATION if value = max', () => {
    const value = 100;
    const min = 0;
    const max = 100;

    expect(getRotation(value, min, max)).to.equal(dial.MAX_ROTATION);
  });
  it('returns half of difference between MAX_ROTATION and MIN_ROTATION if value is halfway between min and max', () => {
    const value = 50;
    const min = 0;
    const max = 100;
    const halfwayAroundDial = (dial.MAX_ROTATION - dial.MIN_ROTATION) / 2;

    expect(getRotation(value, min, max)).to.equal(halfwayAroundDial);
  });
});
