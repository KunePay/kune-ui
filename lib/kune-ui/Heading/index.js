// @flow
import React, { Component } from 'react';

import type { Node } from 'react';

type Props = {
    children?: Node,
    level?: number
};

class Heading extends Component<Props> {
  render(): Node {
    const {
      children,
      level
    } = this.props;

    switch (level) {
      case 1:
        return (
          <h1>{children}</h1>
        );
      case 2:
        return (
          <h2>{children}</h2>
        );
      case 3:
        return (
          <h3>{children}</h3>
        );
      case 4:
        return (
          <h4>{children}</h4>
        );
      case 5:
        return (
          <h5>{children}</h5>
        );
      case 6:
        return (
          <h6>{children}</h6>
        );
    };

    return (
      <h1>{children}</h1>
    );
  }
}

export default Heading;
