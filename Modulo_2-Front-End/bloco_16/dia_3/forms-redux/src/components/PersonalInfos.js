import React from 'react';
import { estados } from '../estados';

class PersonalInfos extends React.Component {
  render() {
    const { handleChange, handleBlur } = this.props;
    return (
      <fieldset>
        <label htmlFor="name">
          Nome:
          <input
            id="name"
            name="nome"
            type="text"
            onChange={ (e) => handleChange(e) }
            maxLength="40"
            required
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            type="text"
            onChange={ (e) => handleChange(e) }
            maxLength="50"
            required
          />
        </label>
        <label htmlFor="cpf">
          CPF:
          <input
            id="cpf"
            name="cpf"
            type="text"
            onChange={ (e) => handleChange(e) }
            maxLength="11"
            required
          />
        </label>
        <label htmlFor="address">
          Endereço:
          <input
            id="address"
            name="endereco"
            type="text"
            onChange={ (e) => handleChange(e) }
            maxLength="200"
            required
          />
        </label>
        <label htmlFor="city">
          Cidade:
          <input
            id="city"
            name="cidade"
            type="text"
            onChange={ (e) => handleChange(e) }
            onBlur={ (e) => handleBlur (e) }
            maxLength="28"
            required
          />
        </label>
        <label htmlFor="state">
          Estado:
          <select
            id="state"
            name="estado"
            onChange={ (e) => handleChange(e) }
            required
          >
            {estados.map((estado) => (
              <option
                key={estado.sigla}
                value={estado.nome}
              >
                {estado.nome}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="type">
          Tipo:
          <input
            type="radio"
            onChange={ (e) => handleChange(e) }
            id="type"
            value="Ap"
            name="tipo"
            required
          />
          Ap
          <input
            type="radio"
            onChange={ (e) => handleChange(e) }
            id="type"
            value="Casa"
            name="tipo"
            required
          />
          Casa
        </label>
      </fieldset>
    );
  }
}

export default PersonalInfos;
