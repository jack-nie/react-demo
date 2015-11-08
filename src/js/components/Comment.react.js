import React from 'react';
import Showdown from 'showdown';

const converter = new Showdown.Converter();

class Comment extends React.Component {
  render () {
    const rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      <div className="comment">
        <h2 className="commentAuthor">
         {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
}

export default Comment;
