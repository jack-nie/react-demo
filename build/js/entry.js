var React    = require('react');
var ReactDom = require('react-dom');
var $        = require('jquery');
var Showdown = require('showdown');

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

var converter = new Showdown.Converter();
var Comment = React.createClass({
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      <div className="comment">
        <h2 className="commentAuthor">
         {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

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
        <input type="text" placeholder="Your Name" ref="author" />
        <input type="text" placeholder="Say something..." ref="text" />
        <input type="submit" value="post" />
      </form>
    );
  }
});

var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err,toString());
      }.bind(this)
    });
  },

  handleCommentSubmit: function(comment) {
    var comments    = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
    　type: 'POST',
      data: comment,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },

  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    );
  }
});

var MyComponent = React.createClass({
  handleClick: function() {
    this.refs.myTextInput.getDOMNode().focus();
  },

  render: function() {
    return (
      <div>
      　<input type="text" ref="myTextInput" />
        <input type="button" value="Focus the text input" onClick={this.handleClick} />
      </div>
    );
  }
});

var FancyCheckbox = React.createClass({
  render: function() {
    var {checked, ...other} = this.props;
    var fancyClass = this.props.checked ? "FancyChecked" : "FancyUnChecked";
    return (
      <div {...other} className={fancyClass} />
    );
  }
});

var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },

  handleClick: function() {
    this.setState({liked: !this.state.liked}); 
  },

  render: function() {
    var text = this.state.liked ? 'liked' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick}>
        You {text} this.Click to toggle.
      </p>
    );
  }
});

var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.map(clearInterval);
  }
};

var TickTock = React.createClass({
  mixins: [SetIntervalMixin],
  getInitialState: function() {
    return {seconds: 0};
  },
  componentDidMount: function() {
    this.setInterval(this.tick, 1000);
  },
  tick: function() {
    this.setState({seconds: this.state.seconds + 1});
  },
  render: function() {
    return (
      <p>
        React has been running for {this.state.seconds} seconds.
      </p>
    );
  }
});

var ControlledComponentWithoutChange = React.createClass({
  render: function() {
    return (
      <div>
        <input type="text" value="hello ControlledComponent!" />
        <textarea name="description" value="This is a description."/>
        <select value="B">
         <option value="A">Apple</option>
         <option value="B">Banana</option>
         <option value="C">Cranberry</option>
        </select>
        <select value={["B", "C"]}  mutilpie={true}>
         <option value="A">Apple</option>
         <option value="B">Banana</option>
         <option value="C">Cranberry</option>
        </select>
      </div>
    );
  }
});

var ControlledComponent = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },

    handleChange: function(event) {
      this.setState({value: event.target.value});
    },

    render: function() {
      var value= this.state.value;
      return <input type="text" value={value} onChange={this.handleChange} />;
    }
});

var UnControlledComponent = React.createClass({
    render: function() {
      return <input type="text" defaultValue="Hello UnControlledComponent"  />;
    }
});

ReactDom.render(
  <CommentBox url="api/comments" pollInterval={2000}/>,
  document.getElementById('content')
);

ReactDom.render(
  <MyComponent />,
  document.getElementById("container")
);

ReactDom.render(
  <FancyCheckbox checked={true} onClick={console.log.bind(console)}>
    Hello world!
  </FancyCheckbox>,
  document.getElementById("fancy")
);

ReactDom.render(
  <LikeButton />,
  document.getElementById("like-button")
);

ReactDom.render(
  <TickTock />,
  document.getElementById("tick-tock")
);

ReactDom.render(
  <ControlledComponent />,
  document.getElementById("controlled-component")
);

ReactDom.render(
  <ControlledComponentWithoutChange />,
  document.getElementById("controlled-component-without-change")
);

ReactDom.render(
  <UnControlledComponent />,
  document.getElementById("un-controlled-component")
);
