import React from 'react';

class ControlledComponent extends React.Component {

  state = {value: 'Hello world!'};

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  render() {
    var value = this.state.value;
    return (
      <div>
        <label htmlFor="ControlledComponent">ControlledComponent:</label>
        <input type="text" value={value} onChange={this.handleChange} />
        <br></br>
      </div>
    );
  }
}

export default ControlledComponent;
