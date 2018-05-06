import React, { Component } from 'react';

type Props = {
    children: Node
};

class Paragraph extends Component {
  render() {
    const {
      children
    } = this.props;

    return (
      <p>{children}</p>
    );
  }
}

export default Paragraph;
