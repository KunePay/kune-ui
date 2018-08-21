// @flow
import React, { PureComponent } from 'react';
import withTheme from 'kune-ui-hocs/withTheme';

import type { Node } from 'react';

type Props = {
    children: Node,
    href: string
};

class Link extends PureComponent<Props> {
  render() {
    const {
      children,
      href
    } = this.props;
    return (
      <a className="link" href={href}>{children}</a>
    );
  }
}

export default withTheme(Link, 'Link');
