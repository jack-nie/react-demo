import React from 'react';

class ControlledComponentWithoutChange extends React.Component {
  render() {
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
}

export default ControlledComponentWithoutChange;
