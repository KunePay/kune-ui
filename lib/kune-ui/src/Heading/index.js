// @flow
import React, { Component } from 'react';
import getInnerText from 'kune-ui-utils/object/getInnerText';
import toUrlFragmentFormat from 'kune-ui-utils/string/toUrlFragmentFormat';

import type { Node } from 'react';

type Props = {
    children: Node,
    level?: number
};

class Heading extends Component<Props> {
  render(): Node {
    const {
      children,
      level
    } = this.props;

    const namedLink: Node = (<a name={toUrlFragmentFormat(getInnerText(children))}></a>);

    switch (level) {
      case 1:
        return (
          <h1>{namedLink}{children}</h1>
        );
      case 2:
        return (
          <h2>{namedLink}{children}</h2>
        );
      case 3:
        return (
          <h3>{namedLink}{children}</h3>
        );
      case 4:
        return (
          <h4>{namedLink}{children}</h4>
        );
      case 5:
        return (
          <h5>{namedLink}{children}</h5>
        );
      case 6:
        return (
          <h6>{namedLink}{children}</h6>
        );
    };

    return (
      <h1>{namedLink}{children}</h1>
    );
  }
}

export default Heading;
