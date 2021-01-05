import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease, mount } from '../actions';

class Count extends React.Component {
  render() {
    const { increase, decrease, count, mount } = this.props;
    return (
      <div>
          <h2>Count</h2>
          <button onClick={ () => mount('DECREASE') }>-</button>
          <span>{ count }</span>
          <button onClick={ () => mount('INCREASE') }>+</button>
      </div>
    );
  }
}

const mapDispatchToProps = { mount };

const mapStateToProps = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps, mapDispatchToProps)(Count);
