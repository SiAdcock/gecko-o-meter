import React, { Component } from 'react';
import request from 'superagent';
import { currencies } from '../constants';
import Dial from './dial';
import Scale from './scale';
import getRotation from '../lib/getRotation';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 34,
      min: 0,
      max: 200,
      format: 'currency',
      unit: 'GBP'
    };
  }
  componentWillMount() {
    request
      .get('https://widgister.herokuapp.com/challenge/frontend')
      .end((err, res) => {
        this.setState(res.body);
      });
  }
  render() {
    const currencySymbol = currencies[this.state.unit];
    const { value, min, max } = this.state;
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
