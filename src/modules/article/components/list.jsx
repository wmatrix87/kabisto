import React from 'react';
import * as PropTypes from 'prop-types';

const List = (props) => {
  const {
    articles,
  } = props;

  return (
    <ul>
      {articles && articles.map((el) => (
        <li key={el}>{el}</li>
      ))}
    </ul>
  );
};

List.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
