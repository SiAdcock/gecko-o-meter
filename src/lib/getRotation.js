import { dial } from '../constants';

export default (value, min, max) => {
  if (value === min) {
    return dial.MIN_ROTATION;
  }
  if (value === max) {
    return dial.MAX_ROTATION;
  }

  return value / (max - min) * (dial.MAX_ROTATION - dial.MIN_ROTATION);
};
