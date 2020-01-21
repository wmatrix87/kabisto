import compose from 'compose-function';
import { connect } from 'react-redux';

import replaceReducer from '../../store/replaceReducer';
import reducers from './reducers';

import Components from './components';
import PropsHOC from './containers/props';
import { ARTICLE } from './constants/action-types';
import { addArticle, articleAction } from './actions';

replaceReducer(ARTICLE, reducers);


const mapDispatchToProps = (dispatch) => ({
  articleAction: (article) => dispatch(articleAction(article)),
  addArticle: (articles) => dispatch(addArticle(articles)),
});
const mapStateToProps = (state) => ({
  articles: state[ARTICLE].articles,
  article: state[ARTICLE].article,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(compose(
  PropsHOC,
)(Components));
