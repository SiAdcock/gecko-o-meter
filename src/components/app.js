import React, { Component } from 'react';
import data from '../data/data.json';
import { currencies } from '../constants';
import Dial from './dial';
import Scale from './scale';
import getRotation from '../lib/getRotation';

export default class App extends Component {
  render() {
    const currencySymbol = currencies[data.unit];
    const { value, min, max } = data;
    const rotate = getRotation(value, min, max);

    return (
      <div>
        <h1>Geck-o-meter</h1>
        <div className="meter box">
          <h2 className="meter-value">
            {currencySymbol}{value}
          </h2>
          <Dial rotate={rotate}/>
          <Scale currencySymbol={currencySymbol} min={min} max={max}/>
        </div>
      </div>
    );
  }
}
