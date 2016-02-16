import React, { Component } from 'react';

export default class Scale extends Component {
  render() {
    const { currencySymbol, min, max } = this.props;

    return (
      <div className="scale">
        <div className="scale-min">{currencySymbol}{min}</div>
        <div className="scale-max">{currencySymbol}{max}</div>
      </div>
    );
  }
}
