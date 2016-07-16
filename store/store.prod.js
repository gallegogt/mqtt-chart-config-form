import { createStore } from 'redux';
import rootReducer from '../reducers/init.js';
import enhancer from '../middlewares/middleware.prod.js';

/**
 * Configures the redux store for production environment
 *
 * @pram {Object} initialState object that represents the initial state
 */
export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  return createStore(rootReducer, initialState, enhancer);
}
