import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { store } from '../index';
import { Provider } from 'react-redux';
import Modal from './modal';
import Colors from './colors';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="left">
          <h1>Left</h1>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="right">
          <h1>Right</h1>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis in libero eaque, nobis, inventore nostrum nesciunt rem hic quisquam. Provident officiis, sint harum autem architecto tenetur deserunt distinctio delectus?</p>
          <Modal >
            <h1>Modal Title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo illum ipsa doloribus illo optio, voluptatibus et nesciunt asperiores culpa mollitia eos a, sapiente suscipit expedita!</p>
            <Colors />
          </Modal >
        </div>
      </div>
    );
  }
}
