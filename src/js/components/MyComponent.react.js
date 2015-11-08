import React from 'react';

class MyComponent extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.refs.myTextInput.getDOMNode().focus();
  }

  render() {
    return (
      <div>
      　<input type="text" ref="myTextInput" />
        <input type="button" value="Focus the text input" onClick={this.handleClick} />
      </div>
    );
  }
}

export default MyComponent;
