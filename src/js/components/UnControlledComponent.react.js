import React from 'react';

class UnControlledComponent extends React.Component {
    render() {
      return (
        <div>
          <label for="UnControlledComponent">UnControlledComponent:</label>
          <input type="text" defaultValue="Hello UnControlledComponent"  />;
          <br></br>
        </div>
      );
    }
}

export default UnControlledComponent;

