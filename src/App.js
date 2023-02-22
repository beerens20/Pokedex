import './app.css';
import React, { Component }from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemon: [],
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <h1>Beginner Pokedex!</h1>
      </div>
    );
  }


}


export default App;
