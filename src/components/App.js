import React, { Component } from 'react';
import ButtonPanel from './buttonPanel';
import Display from './display';
import '../css/App.css';
import calculate from '../logic/calculate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = calculate(this.state, buttonName);
    this.setState({
      total,
      next,
      operation,
    });
  }

  render() {
    const { next, total } = this.state;
    const show = next || total || '0';
    return (
      <div className="App">
        <Display show={show} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
