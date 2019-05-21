import React, {Component} from 'react';
import './App.css';

import Portfolio from './container/Portfolio/Portfolio';
import Layout from './hoc/Layout/Layout';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Layout>
          <Portfolio/>
        </Layout>
      </div>
    );
  }
}

export default App;
