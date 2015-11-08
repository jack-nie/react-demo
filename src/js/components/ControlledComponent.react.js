import React from 'react';

var ControlledComponent = React.createClass({
  getInitialState: function() {
    return {value: 'Hello world!'};
  },

  handleChange: function(event) {
    this.setState({value: event.target.value});
  },

  render: function() {
    var value= this.state.value;
    return (
      <div>
        <label for="ControlledComponent">ControlledComponent:</label>
        <input type="text" value={value} onChange={this.handleChange} />
        <br></br>
      </div>
    );
  }
});

module.exports = ControlledComponent;
