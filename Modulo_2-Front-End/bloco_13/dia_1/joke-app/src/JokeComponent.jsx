import React from 'react';

class JokeComponent extends React.Component {
  constructor() {
    super();
    console.log('constructor')

    this.state = {
      piada: 'Minha piada'
    }
  }

  componentDidMount() {
    console.log('mount')
  }

  render() {
    console.log('render')
    return (<span>{this.state.piada}</span>)
  }
}

export default JokeComponent;