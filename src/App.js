import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import routes from './routes';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas)


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          {routes}
      </div>
    );
  }
}

export default App;
