// @flow
import React, { PureComponent } from 'react';
import classnames from 'classnames';

import withTheme from 'kune-ui-hocs/withTheme';

import type { Node } from 'react';

type Props = {
  children: Node,
  className?: string,
  href: string
};

class Link extends PureComponent<Props> {
  render() {
    const {
      children,
      className,
      href,
      ...restProps
    } = this.props;

    const classes = classnames(className, 'link');

    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  }
}

export default withTheme(Link, 'Link');
