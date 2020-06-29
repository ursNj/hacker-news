import React from 'react';
import './Loading.css';

class Loading extends React.Component {
  render() {
    const size = this.props.size || 5;
    const color = this.props.color || '#999';
    return (
      <div className="loader" style={{fontSize: size, color}}>Loading...</div>
    )
  }
}

export default Loading;
