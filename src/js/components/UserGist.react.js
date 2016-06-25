import React from 'react';
import $ from 'jquery';

class UserGist extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      lastGistUrl: ''
    };
  }

  componentDidMount() {
    this.serverRequest = $.get(this.props.source, (result) => {
      let lastGist = result[0];
      this.setState({
        userName: lastGist.owner.login,
        lastGistUrl: lastGist.html_url
      });
    });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return(
      <div>
        {this.state.userName}'s last gist is
        <a href={this.state.lastGistUrl}>here</a>.
      </div>
    );
  }
}

export default UserGist;
