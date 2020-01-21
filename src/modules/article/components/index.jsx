import React from "react";
import List from "./list";
import Form from "./form";
const Article = (props) => {
  return (
    <div>
      <div>
        <h2>Articles</h2>
        <List articles={props.articles} />
      </div>
      <div>
        <h2>Add a new article</h2>
        <Form
          handleSubmit={props.handleSubmit}
          addArticle={props.addArticle}
          articleAction={props.articleAction}
          article={props.article}
        />
      </div>
    </div>
  );
};

export default Article;
