import style from '../../style/style.css';
import React from 'react';
import ReactDom from 'react-dom';
import CommentBox from './CommentBox.react';
import FancyCheckbox from './FancyCheckbox.react';
import LikeButton from './LikeButton.react';
import TickTock from './TickTock.react';
import ControlledComponentWithoutChange from './ControlledComponentWithoutChange.react';
import ControlledComponent from './ControlledComponent.react';
import UnControlledComponent from './UnControlledComponent.react';
import MyComponent from './MyComponent.react';
import Avatar from './Avatar.react';
import UserGist from './UserGist.react';
import MouseTracker from './MouseTracker.react';
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './ThemedButton.react';

function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  )
}

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    }

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
          ? themes.light
          : themes.dark
      }))
    }
  }
  render() {
    return (
      <div>
        <CommentBox url="api/comments" pollInterval={2000}/>
        <MyComponent />
        <FancyCheckbox checked={true} onClick={console.log.bind(console)}>
          Hello world!
        </FancyCheckbox>
        <LikeButton />
        <TickTock />
        <ControlledComponent />
        <ControlledComponentWithoutChange />
        <UnControlledComponent />
        <Avatar picname="mini.jpg"/>
        <UserGist source='https://api.github.com/users/jack-nie/gists' />
        <MouseTracker />
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <ThemedButton />
      </div>
    );
  }
}

export default App;
