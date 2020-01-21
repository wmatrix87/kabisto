import React, { Component } from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={props.article}
          onChange={props.articleAction}
        />
      </div>
      <button type="submit">SAVE</button>
    </form>
  );
};

export default Form;