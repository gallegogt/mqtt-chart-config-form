// form submitted action type
const SUBMITED = 'MQTT_CHART_CONFIG_FORM_SUBMIT';

/**
 * Form Submitted Action Creator
 * @author Tomás Girardi <tgirardi@gmail.com>
 * @since  julio    2016
 * @param  {Object} data data inside the form at the time of submission
 * @return {Object}      the created action
 */
export const submit = (data) => (
  {
    type: SUBMITED,
    data,
  }
);
