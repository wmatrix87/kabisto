import { mapProps } from 'recompose';

export default mapProps((props) => ({
  ...props,
  handleSubmit: (event) => props.handleSubmit(event),
  articleAction: (event) => props.articleAction(event),
}));
