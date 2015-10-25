var React    = require('react');
var ReactDom = require('react-dom');

var data = [
  {author: "Pete Hunt", text: "This is one comment"}, 
  {author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
          <Comment author={comment.author}>
            {comment.text}
          </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});


var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
         {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data}/>
      </div>
    );
  }
});

ReactDom.render(
  <CommentBox data={data}/>,
  document.getElementById('content')
)
