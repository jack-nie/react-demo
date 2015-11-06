var React = require('react');

var UnControlledComponent = React.createClass({
    render: function() {
      return (
        <div>
          <label for="UnControlledComponent">UnControlledComponent:</label>
          <input type="text" defaultValue="Hello UnControlledComponent"  />;
          <br></br>
        </div>
      );
    }
});

module.exports = UnControlledComponent;

