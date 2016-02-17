import { dial } from '../constants';

export default (value, min, max) => {
  if (value === min) {
    return dial.MIN_ROTATION;
  }
  if (value === max) {
    return dial.MAX_ROTATION;
  }

  const absoluteRange = max - min;
  const absoluteValue = value - min;
  const absoluteRotation = dial.MAX_ROTATION - dial.MIN_ROTATION;

  return absoluteValue / absoluteRange * absoluteRotation;
};
