import * as Sentry from '@sentry/browser';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const RELEASE = '0.1.0';

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://d22bbb2572c94103882a1a8388aec9b2@sentry.io/1425553',
    release: RELEASE
  });
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
