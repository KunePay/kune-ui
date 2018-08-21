// @flow
import React, { PureComponent } from 'react';
import classnames from 'classnames';

import type { Node } from 'react';

type Props = {
  children: Node,
  className?: string,
  collapsed?: boolean,
  collapsedHorizontal?: boolean,
  collapsedVertical?: boolean
};

class Paragraph extends PureComponent<Props> {
  render() {
    const {
      children,
      className,
      collapsed,
      collapsedHorizontal,
      collapsedVertical,
      ...restProps
    } = this.props;

    const classes = classnames(
      className,
      'paragraph',
      {collapsed},
      {'collapsed-horizontal': collapsedHorizontal},
      {'collapsed-vertical': collapsedVertical}
    );

    return (
      <p className={classes} {...restProps}>
        {children}
      </p>
    );
  }
}

export default Paragraph;
