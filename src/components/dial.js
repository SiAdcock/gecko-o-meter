import React, { Component } from 'react';

export default class Dial extends Component {
  render() {
    const {rotate, left, top} = this.props;

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
