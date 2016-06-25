import React from 'react';

class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PagePic picname ={this.props.picname} />
        <PageLink picname ={this.props.picname} />
      </div>
    );
  }
}

class PagePic extends React.Component {
  render() {
    return (
      <img src={'http://www.personal.psu.edu/jul229/' + this.props.picname} />
    );
  }
}

class PageLink extends React.Component {
  render() {
    return (
      <a href={'http://www.personal.psu.edu/jul229/' + this.props.picname}> </a>
    );
  }
}
export default Avatar;
