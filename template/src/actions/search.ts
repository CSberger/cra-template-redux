import { createAction } from 'redux-actions';
import { createAction as createApiAction } from 'redux-api-middleware';
import {
  EXECUTE_SEARCH_FETCH_ERROR,
  EXECUTE_SEARCH_FETCH_REQUEST,
  EXECUTE_SEARCH_FETCH_SUCCESS,
  SEARCH_TRIGGER_SEARCH,
} from '../constants/search';

export const triggerSearch = createAction(SEARCH_TRIGGER_SEARCH);

export const executeSearch = (payload: any) =>
  createApiAction({
    endpoint: '/api/search',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ data: payload }),
    method: 'POST',
    types: [
      EXECUTE_SEARCH_FETCH_REQUEST,
      {
        type: EXECUTE_SEARCH_FETCH_SUCCESS,
        payload: (action, state, res) => {
          const contentType = res.headers.get('Content-Type');
          if (contentType && contentType.includes('json')) {
            return res.json();
          }
          return res;
        },
      },
      EXECUTE_SEARCH_FETCH_ERROR,
    ],
  });

export function triggerAfterWait(payload: any) {
  return (dispatch: (arg0: any) => void) => {
    setTimeout(() => {
      dispatch(executeSearch(payload));
    }, 5000);
  };
}
