import React from 'react';

class Idade extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    let error = undefined;
    if (value < 0 || value > 110) error = 'Digite uma idade válida';
    return (
      <label>
        Idade
        <input
          type="number"
          name="idade"
          value={value}
          onChange={handleChange}
        />
        <span>{error ? error : ''}</span>
      </label>
    )
  }
}

export default Idade;