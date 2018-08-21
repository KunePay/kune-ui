// @flow
import React, { PureComponent } from 'react';
import getInnerText from 'kune-ui-utils/object/getInnerText';
import toUrlFragmentFormat from 'kune-ui-utils/string/toUrlFragmentFormat';
import withTheme from 'kune-ui-hocs/withTheme';

import type { Node } from 'react';

type Props = {
    children: Node,
    level?: number
};

class Heading extends PureComponent<Props> {
  render(): Node {
    const {
      children,
      level
    } = this.props;

    const namedLink: Node = (<a name={toUrlFragmentFormat(getInnerText(children))}></a>);

    switch (level) {
      case 1:
        return (
          <h1 className="heading-1">{namedLink}{children}</h1>
        );
      case 2:
        return (
          <h2 className="heading-2">{namedLink}{children}</h2>
        );
      case 3:
        return (
          <h3 className="heading-3">{namedLink}{children}</h3>
        );
      case 4:
        return (
          <h4 className="heading-4">{namedLink}{children}</h4>
        );
      case 5:
        return (
          <h5 className="heading-5">{namedLink}{children}</h5>
        );
      case 6:
        return (
          <h6 className="heading-6">{namedLink}{children}</h6>
        );
    };

    return (
      <h1 className="heading-1">{namedLink}{children}</h1>
    );
  }
}

export default withTheme(Heading, 'Heading');
