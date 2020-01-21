import React from 'react';
import * as PropTypes from 'prop-types';

import List from './list';
import Form from './form';

const Article = (props) => {
  const {
    articles,
    handleSubmit,
    articleAction,
    article,
  } = props;
  return (
    <div>
      <div>
        <h2>Articles</h2>
        <List articles={articles} />
      </div>
      <div>
        <h2>Add a new article</h2>
        <Form
          handleSubmit={handleSubmit}
          articleAction={articleAction}
          article={article}
        />
      </div>
    </div>
  );
};

Article.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.string).isRequired,
  article: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  articleAction: PropTypes.func.isRequired,
};

export default Article;
