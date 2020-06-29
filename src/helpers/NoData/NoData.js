import React from 'react';

class NoData extends React.Component {
  render() {
    const text = this.props.text;
    return (
      <div className="text-center">{text}</div>
    )
  }
}

export default NoData;
