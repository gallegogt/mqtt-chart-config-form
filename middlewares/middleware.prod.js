import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// middleware needed for development
const enhancer = applyMiddleware(thunk);

export default enhancer;
