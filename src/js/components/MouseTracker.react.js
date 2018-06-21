import React from 'react';

class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src='https://user-images.githubusercontent.com/121535/39332868-68656c92-496e-11e8-9d74-dab79dfaa72e.jpg' 
              style={{ position: 'absolute', left: mouse.x, right: mouse.y, width: 200, height: 200}} />
        )
    }
}
class Mouse extends React.Component {
    constructor(props) {
        super(props)
        this.handleMouseMove = this.handleMouseMove.bind(this)
        this.state = { x: 0, y: 0}
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }

    render() {
        return (
            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
            {this.props.render(this.state)}
          </div>
        )
    }
}

class MouseTracker extends React.Component {
    render() {
      return (
        <div>
          <h1>Move the mouse around!</h1>
          <Mouse render={mouse => (
            <Cat mouse={mouse} />
          )}/>
        </div>
      );
    }
}

export default MouseTracker;