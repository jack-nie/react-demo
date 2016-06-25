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

class App extends React.Component{
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
      </div>
    );
  }
}

export default App;
