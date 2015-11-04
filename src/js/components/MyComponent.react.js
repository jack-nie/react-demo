var React = require('react');

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

module.exports = MyComponent;
