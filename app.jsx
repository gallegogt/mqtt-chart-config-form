import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configure.js';

// root HTMLElement for the app (where React will paint the app)
const rootElement = document.querySelector('#mqtt-react');

// Redux store, whose reducers have been set according to the environment
// (development or production)
const store = configureStore();

// component with the form
import MqttChartConfigForm from
  './modules/mqtt-chart-config-form/components/mqtt-chart-config-form.jsx';
const component = (<MqttChartConfigForm xAxisTitle="time" />);

// depending of the environment, decide if devtools should be added or not
if (__DEVTOOLS__ && __DEVELOPMENT__) {
  // workaround to allow the use of react-devtools in case this app is inside an
  // iframe
  if (window.parent !== window) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ =
      window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__;
  }

  /* eslint-disable global-require */
  const DevTools = require('./modules/devTools/dev-tools.jsx').default;
  /* eslint-enable global-require */

  window.React = React;

  render(
    <Provider store={store}>
      <div>
        {component}
        <DevTools />
      </div>
    </Provider>,
    rootElement);
} else {
  render(
    <Provider store={store}>
      {component}
    </Provider>,
    rootElement
  );
}
