import React from 'react';
class Counter extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value % 3 !== 0) return false;
    return true;
  }
  
  render() {
    return <div> counter: {this.props.value}</div>;
  }
}

export default Counter;
