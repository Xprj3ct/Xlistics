import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Login from './pages/Login';
import Msg from './pages/Msg';

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://dfba638d42544aa9b2050aedf91452e3@o1298210.ingest.sentry.io/6528576",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});


ReactDOM.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>,
  document.getElementById('root')
);
