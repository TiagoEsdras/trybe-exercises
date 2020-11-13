import React from 'react';

class EstadoFavorito extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    let error = undefined;
    if (value.length > 120) error = 'Estado inválido';
    return (
      <label>
        Diga qual o seu Estado favorito!
        <textarea 
          name="estadoFavorito" 
          value={value} 
          onChange={handleChange}
        />
        <span>{error ? error : ''}</span>        
    </label>
    )
  }
}

export default EstadoFavorito;