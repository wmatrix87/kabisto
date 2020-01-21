import { ADD_ARTICLE, ARTICLE_ACTION } from '../constants/action-types';

const initialState = {
  articles: [],
  article: '',
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return { ...state, ...action };
  }
  if (action.type === ARTICLE_ACTION) {
    return { ...state, ...action };
  }
  return state;
}

export default rootReducer;
