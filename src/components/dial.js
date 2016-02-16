import React, { Component } from 'react';

export default class Dial extends Component {
  render() {
    const rotate = 180;
    const left = 10;
    const top = 130;

    return (
      <div className="dial">
        <div className="dial-image"/>
        <div
          className="dial-arm"
          style={{
            transform: `rotate(${rotate}deg)`,
            left: `${left}px`,
            top: `${top}px`
          }}
        />
      </div>
    );
  }
}
