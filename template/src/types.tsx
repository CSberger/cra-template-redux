import { SEARCH_TRIGGER_SEARCH } from './constants/search';

interface SearchTriggerAction {
  type: typeof SEARCH_TRIGGER_SEARCH;
}

export type SearchActionTypes = SearchTriggerAction;
