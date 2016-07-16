# MQTT Chart Config Form

Form implemented as a React Component, meant to work as a configuration form for
another project: MQTT Redux Chart

# Installation

This repository is just temporal. You should clone or download it, take the
source code and include it inside the master project.

# Usage

Import the component like this:

``javascript
import MqttChartConfigForm from
  './modules/mqtt-chart-config-form/components/mqtt-chart-config-form.jsx';
```

*Note*: the exact directory could depend on the location for the file where
you are making the import. The above code considers you are doing the import
inside a file in the root directory.

Then include it as a child component like this:

```jsx
render(
  <ParentComponent>
    <MqttChartConfigForm />
  </ParentComponent>
);
```

*Note*: <ParentComponent> is just an example.

## Props

The following **optional** props can be used when using the MqttChartConfigForm
tag:

* xAxisTitle
* yAxisTitle
* yAxisMinValue
* yAxisMaxValue

Example:

```jsx
render(
  <MqttChartConfigForm xAxisTitle="Year" yAxisTitle="Revenue" />
);
```

## Form Submission

The main purpose of the form is to allow the user to set configuration
parameters for the MQTT Chart and then **modify the behavior of that chart with
those parameters**. For that, there following action is dispatched:

`MQTT_CHART_CONFIG_FORM_SUBMIT`

And the value for each parameter is included inside the `data` property of that
action.

Example:

```javascript
{
  type: 'MQTT_CHART_CONFIG_FORM_SUBMIT',
  data: {
      xAxisTitle: 'time',
      yAxisTitle: 'temperature',
      yAxisMinValue: 10,
      yAxisMaxValue: 40
    }
}
```

A reducer can consume this action and adjust the chart state accordingly.

# Linting

ESLinter is being used, with the following presets:

* eslint:recommended"
* plugin:react/recommended"
* **airbnb**

*Note*: airbnb preset is very restrictive, but it helps to achieve a very clean
and readable code. It's also a very common preset for serious projects.

# Language

All text was written in English or translated from Spanish to English, because
in the future the whole final project (MQTT Redux Chart) could be open source.
