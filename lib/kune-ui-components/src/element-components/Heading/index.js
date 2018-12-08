// @flow
import React, {PureComponent} from 'react';
import classnames from 'classnames';

import getInnerText from 'kune-ui-utils/object/getInnerText';
import toUrlFragmentFormat from 'kune-ui-utils/string/toUrlFragmentFormat';
import withTheme from 'kune-ui-hocs/withTheme';

import type {Node} from 'react';

type Props = {
  children: Node,
  className?: string,
  level?: number
};

class Heading extends PureComponent<Props> {
  render(): Node {
    const {
      children,
      className,
      level,
      ...restProps
    } = this.props;

    const headingLevel = level || 1;

    const classes = classnames(className, `heading-${headingLevel}`);

    const namedLink: Node = (<a name={toUrlFragmentFormat(getInnerText(children))}></a>);

    const HeadingTag = `h${headingLevel}`;

    return (
      <HeadingTag className={classes} {...restProps}>
        {namedLink}
        {children}
      </HeadingTag>
    );
  }
}

export default withTheme(Heading, 'Heading');
