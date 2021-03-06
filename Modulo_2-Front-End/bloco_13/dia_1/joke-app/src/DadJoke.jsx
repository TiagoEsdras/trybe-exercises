import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();
    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    this.setState(
      {loading: true},
      async () => {
        const requestHeaders = { headers: { Accept: 'application/json' } };
        const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders);
        const requestObject = await requestReturn.json();
        console.log(requestObject)
        this.setState({
          loading: false,
          jokeObj: requestObject,
        })
      }
    )
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    this.setState((previousState) => ({
      storedJokes: [...previousState.storedJokes, previousState.jokeObj]
    }))
    this.fetchJoke();
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type='button' onClick={this.saveJoke}>Salvar Piada!</button>
      </div>
    )
  }
  render() {
    const { storedJokes, loading } = this.state;
    const loadingElement = <span>Loading...</span>

    return (
      <div>
        <span>{storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}</span>
        <p>{loading ? loadingElement : this.renderJokeElement()}</p>
      </div>
    )
  }
}

export default DadJoke;