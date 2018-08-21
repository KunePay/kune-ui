// @flow
import React, { PureComponent } from 'react';
import classnames from 'classnames';

import withTheme from 'kune-ui-hocs/withTheme';

import type { Node } from 'react';

type Props = {
  children: Node,
  className?: string,
  disabled?: boolean,
  onClick?: Function,
  href: string
};

class Link extends PureComponent<Props> {
  render() {
    const {
      children,
      className,
      disabled,
      onClick,
      href,
      ...restProps
    } = this.props;

    const classes = classnames(className, 'link');

    const clickHandler = (disabled)? (e) => {e.preventDefault();} : onClick;

    return (
      <a className={classes} href={href} {...restProps} onClick={clickHandler}>
        {children}
      </a>
    );
  }
}

export default withTheme(Link, 'Link');
