var React = require('react');

var ControlledComponentWithoutChange = React.createClass({
  render: function() {
    return (
      <div>
        <label for="ControlledComponentWithoutChange">CtldComponent:</label>
        <input type="text" value="hello ControlledComponent!" />
        <br></br>
        <label for="description">Description:</label>
        <textarea name="description" value="This is a description."/>
        <br></br>
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
        <br></br>
      </div>
    );
  }
});

module.exports = ControlledComponentWithoutChange;
