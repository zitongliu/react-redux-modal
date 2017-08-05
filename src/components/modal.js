import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { store } from '../index';
import { Provider } from 'react-redux';

// approach
// whenever my modal component gets rendered to the screen (did mount), gonna create a new div append to document.body and then use reactDOM to render this.props.child to the new div. this.props.children is a reference to any components that gets passed into this component.
// eg <Component1 /> has a h2, p and <image /> inside it. h2, p and <image /> would be this.props.children

class Modal extends Component {
  componentDidMount() {
  // whenever the component gets rendered to the screen, we gonna create a new div and assign to this modal target
  this.modalTarget = document.createElement('div');
  this.modalTarget.className = 'modal';
  document.body.appendChild(this.modalTarget);
  this._render();
  }

  componentWillUpdate() {
    this._render();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
  }

  _render() {
    ReactDOM.render(
      <Provider store={store}>
        <div>{this.props.children}</div>
      </Provider>,
      this.modalTarget
    );
  }

  render() {
    return <noscript />; // means render nothing
  }
}

export default Modal;
