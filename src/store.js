import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const logMiddlewate = (store) => (next) => (action) => {
  console.log(action.type, store.getState());
  return next(action);
}

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action
    });
  };
  return next(action);  
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddleware, logMiddlewate));

store.dispatch('Hello World')

export default store;