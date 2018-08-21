// @flow
import React, { PureComponent } from 'react';
import classnames from 'classnames';

import type { Node } from 'react';

type Props = {
  children: Node,
  className?: string
};

class Paragraph extends PureComponent<Props> {
  render() {
    const {
      children,
      className,
      ...restProps
    } = this.props;

    const classes = classnames(className, 'paragraph');

    return (
      <p className={classes} {...restProps}>
        {children}
      </p>
    );
  }
}

export default Paragraph;
