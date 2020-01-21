import { mapProps } from 'recompose';

export default mapProps((props) => ({
  ...props,
  handleSubmit: (event) => {
    event.preventDefault();
    props.addArticle([...(props.articles || []), props.article]);
    props.articleAction('');
  },
  articleAction: (event) => props.articleAction(event.target.value),
}));
