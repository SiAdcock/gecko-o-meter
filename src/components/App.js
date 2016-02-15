import React, { Component } from 'react';
import data from './../data/data.json';
import { currencies } from '../constants';

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
          <div className="meter-dial">
            <div className="meter-dial-image"/>
          </div>
          <div className="meter-scale">
            <div className="meter-scale-min">{currencySymbol}{min}</div>
            <div className="meter-scale-max">{currencySymbol}{max}</div>
          </div>
        </div>
      </div>
    );
  }
}
