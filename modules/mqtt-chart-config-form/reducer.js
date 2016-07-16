// we will use redux-form reducer, which will consume most of the actions that
// will be dispatched by the form
import { reducer as formReducer } from 'redux-form';

export const reducer = {
  form: formReducer,
};
