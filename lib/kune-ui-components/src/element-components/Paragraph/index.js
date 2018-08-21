// @flow
import React, { PureComponent } from 'react';

import type { Node } from 'react';

type Props = {
    children: Node
};

class Paragraph extends PureComponent<Props> {
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
