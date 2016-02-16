import React, { Component } from 'react';

export default class Dial extends Component {
  render() {
    return (
      <div className="dial">
        <div className="dial-image"/>
        <div className="dial-arm" style={{transform: 'rotate(90deg)', left: '80px', top: '50px'}}/>
      </div>
    );
  }
}
