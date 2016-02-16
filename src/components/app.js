import React, { Component } from 'react';
import data from '../data/data.json';
import { currencies } from '../constants';
import Dial from './dial';
import Scale from './scale';
import getRotation from '../lib/getRotation';
import getTopOffset from '../lib/getTopOffset';

export default class App extends Component {
  render() {
    const currencySymbol = currencies[data.unit];
    //const { value, min, max } = data;
    const value = 50;
    const max = 100;
    const min = 0;
    const rotate = getRotation(value, min, max);
    const left = 10;
    const top = getTopOffset(value, min, max);

    return (
      <div>
        <h1>Geck-o-meter</h1>
        <div className="meter box">
          <h2 className="meter-value">
            {currencySymbol}{value}
          </h2>
          <Dial rotate={rotate} left={left} top={top}/>
          <Scale currencySymbol={currencySymbol} min={min} max={max}/>
        </div>
      </div>
    );
  }
}
