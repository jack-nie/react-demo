var React    = require('react');
var ReactDom = require('react-dom');
var CommentBox  = require('./components/CommentBox.react');
var FancyCheckbox = require('./components/FancyCheckbox.react');
var LikeButton = require('./components/LikeButton.react');
var TickTock = require('./components/TickTock.react');
var ControlledComponentWithoutChange = require('./components/ControlledComponentWithoutChange.react');
var ControlledComponent = require('./components/ControlledComponent.react');
var UnControlledComponent = require('./components/UnControlledComponent.react');
var MyComponent = require('./components/MyComponent.react');

ReactDom.render(
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
  </div>,
  document.getElementById('content')
);

