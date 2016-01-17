import React from 'react';

class LikeButton extends React.Component {
  
  state = {linked: false};

  handleClick = (e) => {
    this.setState({liked: !this.state.liked}); 
  };

  render() {
    const text = this.state.liked ? 'liked' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick}>
        You {text} this.Click to toggle.
      </p>
    );
  }
}

export default LikeButton;
