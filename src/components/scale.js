import React, { Component } from 'react';

export default class Scale extends Component {
  render() {
    const { currencySymbol, min, max } = this.props;

    return (
      <div className="meter-scale">
        <div className="meter-scale-min">{currencySymbol}{min}</div>
        <div className="meter-scale-max">{currencySymbol}{max}</div>
      </div>
    );
  }
}
