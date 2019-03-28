import React, {Component} from 'react';
import * as Sentry from '@sentry/browser';
import './App.css';

class App extends Component {
  state = {text: ''};
  handleClick = () => {
    this.setState({text: 'Hello World'});
    try {
      throw new Error('caught');
    } catch (err) {
      if (process.env.NODE_ENV !== 'production') {
        return;
      }
      Sentry.captureException(err);
    }
  };
  handleErrorClick = () => {
    throw new Error('Uncaught');
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Hello</button>
        <button onClick={this.handleErrorClick}>Error</button>
        <div>{this.state.text}</div>
      </div>
    );
  }
}

export default App;
