import React from 'react';
import PersonalInfos from './PersonalInfos';
import ResumeInfos from './ResumeInfos';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.resetButton = this.resetButton.bind(this);
    this.sendButton = this.sendButton.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      resumo: '',
      cargo: '',
      descricao: '',
      count: 0,
    }

    this.initialState = this.state;
  }

  sendButton(e) {
    e.preventDefault();
  }

  resetButton() {
    this.setState(this.initialState)
  }

  especialCharMask (especialChar){
    especialChar = especialChar.replace(/[áàãâä]/ui, 'a');
    especialChar = especialChar.replace(/[éèêë]/ui, 'e');
    especialChar = especialChar.replace(/[íìîï]/ui, 'i');
    especialChar = especialChar.replace(/[óòõôö]/ui, 'o');
    especialChar = especialChar.replace(/[úùûü]/ui, 'u');
    especialChar = especialChar.replace(/[ç]/ui, 'c');
    especialChar = especialChar.replace(/_+/, '_');
    return especialChar;
  }
  handleChange({ target }) {
    let value;
    if (target.name === 'nome') value = target.value.toUpperCase();
    else if (target.name === 'endereco') value = this.especialCharMask(target.value)
    else value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [target.name]: value, 
    });
  }

  handleBlur({ target }) {
    let { value, name } = target;
    if (value.match(/^\d/)) {
      this.setState({ [name]: '' });
      return target.value = '';
    }
  }

  handleMouseEnter() {
    this.setState((prevState, _props) => ({
      count: prevState.count + 1
    }));
    const { count } = this.state;
    if (count === 0) alert('Preencha com cuidado esta informação.');
  }
  render() {
    return (
      <div>
        <form>
          <PersonalInfos
            handleChange={this.handleChange}
            handleBlur={this.handleBlur}
          />
          <ResumeInfos
            handleChange={this.handleChange}
            handleMouseEnter={this.handleMouseEnter}
          />
          <input type="submit" value="Enviar" onClick={ (e) => this.sendButton(e) } />
          <input type="reset" value="Redefinir" onClick={ () => this.resetButton() } />
        </form>
      </div>
    );
  };
}

export default Form;
