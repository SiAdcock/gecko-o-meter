import React, { Component } from 'react';
import data from './data/data.json';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Geck-o-meter</h1>
        <div>
          value: {data.value}
        </div>
      </div>
    );
  }
}
