import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }
  }

  async handleClick1(event) {
    await this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
    }))
    if (this.state.numeroDeCliques1 % 2 === 0) {
      event.target.style.backgroundColor = 'green'
      console.log('Green');
    } else {
      event.target.style.backgroundColor = 'red'
      console.log('Red');
    }
  }
  
  async handleClick2(event) {
    await this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }))
    if (this.state.numeroDeCliques2 % 2 === 0) {
      event.target.style.backgroundColor = 'green'
      console.log('Green');
    } else {
      event.target.style.backgroundColor = 'red'
      console.log('Red');
    }
  }
  
  async handleClick3(event) {
    await this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
    }))
    if (this.state.numeroDeCliques3 % 2 === 0) {
      event.target.style.backgroundColor = 'green'
      console.log('Green');
    } else {
      event.target.style.backgroundColor = 'red'
      console.log('Red');
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>{this.state.numeroDeCliques1}</button>
        <button onClick={this.handleClick2}>{this.state.numeroDeCliques2}</button>
        <button onClick={this.handleClick3}>{this.state.numeroDeCliques3}</button>
      </div>
    )
  }
}

export default App;