import React from 'react';
import * as PropTypes from 'prop-types';

const Form = (props) => {
  const {
    handleSubmit,
    article,
    articleAction,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={article}
          onChange={articleAction}
        />
      </div>
      <button type="submit">SAVE</button>
    </form>
  );
};

Form.propTypes = {
  article: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  articleAction: PropTypes.func.isRequired,
};

export default Form;
