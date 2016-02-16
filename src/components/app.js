import React, { Component } from 'react';
import data from '../data/data.json';
import { currencies } from '../constants';
import Dial from './dial';
import Scale from './scale';

export default class App extends Component {
  render() {
    const currencySymbol = currencies[data.unit];
    const { value, min, max } = data;

    return (
      <div>
        <h1>Geck-o-meter</h1>
        <div className="meter box">
          <h2 className="meter-value">
            {currencySymbol}{value}
          </h2>
          <Dial/>
          <Scale currencySymbol={currencySymbol} min={min} max={max}/>
        </div>
      </div>
    );
  }
}
