import React from "react";

const List = (props) => {
  const {
    articles,
  } = props;
  
  return (
    <ul>
      {articles && articles.map(el => (
        <li key={el}>{el}</li>
      ))}
    </ul>
  )
};


export default List;