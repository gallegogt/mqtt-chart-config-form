import { combineReducers } from 'redux';
import { reducer as MqttChartConfigFormReducer } from
  '../modules/mqtt-chart-config-form/reducer.js';

// main reducer for the application
const rootReducer = combineReducers(
  Object.assign({},
    {
      // put reducers here...
    },
    MqttChartConfigFormReducer
    // or here, if they are imported as a whole object and not just a function
  )
);

export default rootReducer;
