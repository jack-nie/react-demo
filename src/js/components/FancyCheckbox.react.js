var React = require('react');

var FancyCheckbox = React.createClass({
  render: function() {
    var {checked, ...other} = this.props;
    var fancyClass = this.props.checked ? "FancyChecked" : "FancyUnChecked";
    return (
      <div {...other} className={fancyClass} />
    );
  }
});

module.exports = FancyCheckbox;
