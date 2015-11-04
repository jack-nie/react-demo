var React = require('react');

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

module.exports = ControlledComponentWithoutChange;
