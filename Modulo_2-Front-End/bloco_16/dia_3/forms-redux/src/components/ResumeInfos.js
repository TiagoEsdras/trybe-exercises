import React from 'react';

class ResumeInfos extends React.Component {
  render() {
      const { handleChange, handleMouseEnter } = this.props;
    return (
        <fieldset>
        <label htmlFor="resume">
          Resumo do currículo:
          <textarea
            id="resume"
            name="resumo"
            onChange={ (e) => handleChange(e) }
            maxLength="1000"
            required
          /> 
        </label>
        <label htmlFor="job-position">
          Cargo:
          <textarea
            id="job-position"
            name="cargo"
            onMouseEnter={ () => handleMouseEnter() }
            onChange={ (e) => handleChange(e) }
            maxLength="40"
            required
          /> 
        </label>
        <label htmlFor="job-description">
          Descrição:
          <input
            type="text"
            id="job-description"
            name="descricao"
            onChange={ (e) => handleChange(e) }
            maxLength="500"
            required
          /> 
        </label>
      </fieldset>
    );
  }
}

export default ResumeInfos;