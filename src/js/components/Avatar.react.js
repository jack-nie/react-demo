import React from 'react';

class Avatar extends React.Component {
  render() {
    return (
      <div>
        <PagePic pagename ={this.props.picname} />
        <PageLink pagename ={this.props.picname} />
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
