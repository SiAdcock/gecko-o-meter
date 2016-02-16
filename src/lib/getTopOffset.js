import { dial } from '../constants';

export default (value, min, max) => {
  if (value === min || value === max) {
    return dial.MAX_TOP_OFFSET;
  }
  if (value === (max - min) / 2) {
    return dial.MIN_TOP_OFFSET;
  }

  //return value / (max - min) * (dial.MAX_ROTATION - dial.MIN_ROTATION);
};
