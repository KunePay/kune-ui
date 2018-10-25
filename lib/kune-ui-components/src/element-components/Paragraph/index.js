// @flow
import React, {PureComponent, Fragment} from 'react';
import classnames from 'classnames';

import type {Node} from 'react';

import withAsyncChildren from 'kune-ui-hocs/withAsyncChildren';

type Props = {
  children: Node,
  className?: string,
  collapsed?: boolean,
  collapsedHorizontal?: boolean,
  collapsedVertical?: boolean,
  contentPromise?: Promise<any>,
  onContentLoaded?: Function,
  onContentLoadError?: Function,
};

// Default synchronous component.
class SyncParagraph extends PureComponent<Props> {
  render() {
    const {
      children,
      className,
      collapsed,
      collapsedHorizontal,
      collapsedVertical,
      ...restProps
    } = this.props;

    // Handle collapsed css classes.
    const classes: string = classnames(
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

// The following decorates the default Synchronous component with async
// sauce if the `contentPromise` props is present.
class Paragraph extends PureComponent<Props> {
  render() {
    const {
      contentPromise,
      onContentLoaded,
      onContentLoadError,
      ...restProps
    } = this.props;

    let ParagraghComponent: any = SyncParagraph;

    if (typeof contentPromise === 'object' && typeof contentPromise.then === 'function') {
      ParagraghComponent = withAsyncChildren(ParagraghComponent, contentPromise, onContentLoaded, onContentLoadError);
    }

    return (
      <ParagraghComponent {...restProps}/>
    );
  }
}

export default Paragraph;
