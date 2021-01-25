import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { createLogger } from 'redux-logger';
import { rootReducer } from './reducers';

const logger = createLogger();

export function configure(options: any = {}) {
  const { debug, initialState } = options;
  const middleware = [thunk, apiMiddleware, ...(debug ? [logger] : [])];
  const createStoreWithMiddleware = composeWithDevTools(
    applyMiddleware(...middleware)
  )(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
}

const store = configure({ debug: true });
export default store;
