import React, {Component} from 'react';
import Calcolatrice from './calcolatrice';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
         <Calcolatrice/>
        </header>
      </div>
    );
  }
}

export default App;
