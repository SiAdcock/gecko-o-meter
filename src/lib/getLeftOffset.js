import { dial } from '../constants';

export default (value, min, max) => {
  if (value === min) {
    return dial.MIN_LEFT_OFFSET;
  }

  return value / (max - min) * (dial.MAX_LEFT_OFFSET - dial.MIN_LEFT_OFFSET);
};
