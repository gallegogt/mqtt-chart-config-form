'use strict';

// import React and some React properties
import React, { Component, PropTypes } from 'react';

// reduxForm, from redux-form, will be the binding/connector between our Form
// React Component and Redux. Initialize is an ActionCreator for the action
// that represents the initialization of the form
import { reduxForm, initialize } from 'redux-form';

// our own Action Creators
import { submit as submitAction } from '../actions.js';

// stylesheet
require('./mqtt-chart-config-form.sass');

// name of the form. Uses by redux-form to differentiate between different
// forms inside the application
const FORM_NAME = 'mqttChartConfigForm';

/**
 * Submit Action Dispatcher
 * @author Tomás Girardi <tgirardi@gmail.com>
 * @since  julio    2016
 * @param  {Object}   data     data inside the form at the moment of submission
 * @param  {Function} dispatch the Redux store's dispatcher
 */
const submitForm = (data, dispatch) => {
  dispatch(submitAction(data));
}

class MqttChartConfigForm extends Component {
  static propTypes = {
    // props used by redux-form to render the state of each field
    fields: PropTypes.object.isRequired,
    // prop provided by redux-form to handle the submission of the form
    handleSubmit: PropTypes.func.isRequired,
    // store's action dispatcher
    dispatch: PropTypes.func.isRequired,
    // value of the field that controls the title used for the X Axis
    xAxisTitle: PropTypes.string,
    // value of the field that controls the title used for the Y Axis
    yAxisTitle: PropTypes.string,
    // value of the field that controls the minimum value for the Y Axis
    yAxisMinValue: PropTypes.number,
    // value of the field that controls the maximum value for the Y Axis
    yAxisMaxValue: PropTypes.number,
  }

  /**
   * Initializes the form's fields once rendered for the first time
   * @override
   */
  componentDidMount = () => {
    // take the initial values from the props of the component
    // Note: this are not the same as fields.xAxisTitle, fields.yAxisTitle,
    // fields.yAxisMinValue, etc
    const { xAxisTitle, yAxisTitle, yAxisMinValue, yAxisMaxValue,
      dispatch } = this.props;
    dispatch(initialize(FORM_NAME,
      {
        xAxisTitle,
        yAxisTitle,
        yAxisMinValue,
        yAxisMaxValue,
      }, ['xAxisTitle', 'yAxisTitle', 'yAxisMinValue', 'yAxisMaxValue']));
  }

  /**
   * Paints the form
   * @override
   */
  render() {
    // we will use the props handled by redux-form
    const {fields: { xAxisTitle, yAxisTitle, yAxisMinValue, yAxisMaxValue },
      handleSubmit} = this.props;
    return (
      <form className="mqtt-chart-config-form"
        onSubmit={handleSubmit(submitForm)}>
        <div>
          <label>X Axis</label>
          <input type="text" placeholder="X Axis Title"
            {...xAxisTitle} />
        </div>
        <div>
          <label>Y Axis</label>
          <input type="text" placeholder="Y Axis Title"
            {...yAxisTitle} />
        </div>
        <div>
          <label>Y Axis Min</label>
          <input type="number" placeholder="Y Axis Min Value"
            {...yAxisMinValue} />
        </div>
        <div>
          <label>Y Axis Max</label>
          <input type="number" placeholder="Y Axis Max Value"
            {...yAxisMaxValue} />
        </div>
        <button type="submit">Ok</button>
      </form>
    );
  }
}

// we bind Redux with our React Component and export the result (the binded
// React Component)
export default reduxForm({
  form: FORM_NAME,
  fields: ['xAxisTitle', 'yAxisTitle', 'yAxisMinValue', 'yAxisMaxValue'],
  // we don't know, beforehand, any initial value, so we just make sure to
  // use an empty string for all of them (we will dispatch the initialize action
  // twice, which is not very efficient, but it also not very expensive either)
  initialValues: {
    xAxisTitle: '',
    yAxisTitle: '',
    yAxisMinValue: '',
    yAxisMaxValue: ''
  }
})(MqttChartConfigForm);
