import React from 'react';
import Counter from './Counter';

// App.js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        Contador
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}>
          Soma
        </button>
        <Counter value={this.state.counter} />
      </div>
    );
  }
}

export default App;
