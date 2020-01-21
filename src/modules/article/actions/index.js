import { ADD_ARTICLE, ARTICLE_ACTION } from '../constants/action-types';

export function addArticle(articles) {
  return { type: ADD_ARTICLE, articles };
}
export function articleAction(article) {
  return { type: ARTICLE_ACTION, article };
}
