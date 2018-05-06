// @flow
import React, { Component } from 'react';

import type { Node } from 'react';

type Props = {
    children: Node,
    href: string
};

class Link extends Component<Props> {
  render() {
    const {
      children,
      href
    } = this.props;
    return (
      <a href={href}>{children}</a>
    );
  }
}

export default Link;