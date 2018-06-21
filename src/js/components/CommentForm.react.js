import React from 'react';

class CommentForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let author = this.refs.author.getDOMNode().value.trim();
    let text   = this.refs.text.getDOMNode().value.trim();
    if (!text || !author) {
      return;
    }

    this.props.onCommentSubmit({author: author, text: text});
    this.refs.author.getDOMNode().value = '';
    this.refs.text.getDOMNode().value   = '';
    return
  }

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label><input type="text" placeholder="Your Name" ref="author" />
        <br></br>
        <label htmlFor="comment">Comment: </label><input type="text" placeholder="Say something..." ref="text" />
        <br></br>
        <label></label><input type="submit" value="post" />
      </form>
    );
  }
}

export default CommentForm;

