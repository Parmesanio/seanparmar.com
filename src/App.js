import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee} from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCoffee)


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
      </div>
    );
  }
}

export default App;
