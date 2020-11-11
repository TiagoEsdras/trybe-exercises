import React from 'react';
import './App.css';
import Button from './Button'
class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeCliques: 0,
    }
  }
  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }
  render() {
    return (
      <div>
        <Button
          numeroDeCliques={this.state.numeroDeCliques}
          handleClick={this.handleClick}
         />
      </div>
    )
  }
}

export default App;