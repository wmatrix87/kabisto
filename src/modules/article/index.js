import compose from 'compose-function';
import { connect } from 'react-redux';

import replaceReducer from '../../store/replaceReducer';
import reducers from './reducers';

import Components from './components';
import PropsHOC from './containers/props';
import { ARTICLE } from './constants/action-types';

replaceReducer(ARTICLE, reducers);

import { addArticle, articleAction } from './actions';

const mapDispatchToProps = (dispatch) => ({
  articleAction: (article) => dispatch(articleAction(article.target.value)),
  addArticle: (articles) => dispatch(addArticle(articles)),
});
const mapStateToProps = (state) => ({
  articles: state[ARTICLE].articles,
  article: state[ARTICLE].article,
});
const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
  handleSubmit: (event) => {
    event.preventDefault();
    dispatchProps.addArticle([...(stateProps.articles || []), stateProps.article]);
    dispatchProps.articleAction({target: {value: ''}});
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(compose(
  PropsHOC,
)(Components));
