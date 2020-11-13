import React, { Component } from 'react';
import './Form.css'
import EstadoFavorito from './EstadoFavorito';
import Idade from './Idade';
class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      estadoFavorito: '',
      idade: 0,
      vaiComparecer: false,
      arquivo: undefined,
      formularioComErros: false,
    };
  }
  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value, 
    });
  }
  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <fieldset>
            <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange} />
            <Idade value={this.state.idade} handleChange={this.handleChange} />
            <input
              type="checkbox"
              name="vaiComparecer"
              value={this.state.vaiComparecer}
              onChange={this.handleChange}
            />
            <input 
              type="file"
              name="arquivo" 
              value={this.state.arquivo}
              onChange={this.handleChange}
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;