import React from 'react';

class FancyCheckbox extends React.Component {
  render() {
    let {checked, ...other} = this.props;
    let fancyClass = this.props.checked ? "FancyChecked" : "FancyUnChecked";
    return (
      <div {...other} className={fancyClass} />
    );
  }
}

module.exports = FancyCheckbox;
