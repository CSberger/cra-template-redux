import I from 'immutable';
import { handleActions } from 'redux-actions';
import { SEARCH_TRIGGER_SEARCH } from '../constants/search';

const REDUCER_NAME = 'search';

export function getTerms(state: any) {
  return state.getIn([REDUCER_NAME, 'terms'], I.List());
}

export const initialState = I.Map({
  queryString: '',
  terms: I.List(),
});

export default handleActions(
  {
    [SEARCH_TRIGGER_SEARCH]: (search: any, { payload }: { payload: any }) => {
      return search
        .set('queryString', payload)
        .set('terms', I.List(payload.split(/[ ,]+/)));
    },
  },
  initialState
);
