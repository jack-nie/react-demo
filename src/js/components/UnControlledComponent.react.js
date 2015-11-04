var React = require('react');

var UnControlledComponent = React.createClass({
    render: function() {
      return <input type="text" defaultValue="Hello UnControlledComponent"  />;
    }
});

module.exports = UnControlledComponent;

