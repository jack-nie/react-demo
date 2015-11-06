var React = require('react');

var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.refs.author.getDOMNode().value.trim();
    var text   = this.refs.text.getDOMNode().value.trim();
    if (!text || !author) {
      return;
    }

    this.props.onCommentSubmit({author: author, text: text});
    this.refs.author.getDOMNode().value = '';
    this.refs.text.getDOMNode().value   = '';
    return
  },

  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <label for="name">Name: </label><input type="text" placeholder="Your Name" ref="author" />
        <br></br>
        <label for="comment">Comment: </label><input type="text" placeholder="Say something..." ref="text" />
        <br></br>
        <label></label><input type="submit" value="post" />
      </form>
    );
  }
});

module.exports = CommentForm;

