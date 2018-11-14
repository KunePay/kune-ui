// @flow
import React, {PureComponent, Children} from 'react';
import classnames from 'classnames';

import type {Node} from 'react';

import withAsyncChildren from 'kune-ui-hocs/withAsyncChildren';
import throwKuneError from 'kune-ui-utils/string/throwKuneError';

type Props = {
  children: Node,
  className?: string,
  type?: string,
  listType?: string,
  collapsed?: boolean,
  collapsedHorizontal?: boolean,
  collapsedVertical?: boolean,
  contentPromise?: Promise<any>,
  onContentLoaded?: Function,
  onContentLoadError?: Function,
};

// List item synchronous component.
class SyncListItem extends PureComponent<Props> {
  processListItemType(listItemType:string|null|void):string {
    if (listItemType === null || (typeof listItemType === 'undefined')) {
      return '';
    }

    if ((/^term$|^description$/).test(listItemType)) {
      return listItemType;
    }

    if ((/^li$|^dt$|^dd$/).test(listItemType)) {
      return listItemType
        .replace('li', '')
        .replace('dt', 'term')
        .replace('dd', 'description');
    }

    throwKuneError(`[ListItemError] Invalid "type" prop given: ${listItemType}`);

    return ''; // This is just to keep flow happy
  }

  render() {
    const {
      children,
      className,
      collapsed,
      collapsedHorizontal,
      collapsedVertical,
      type,
      listType, // This is injected by the parent List component
      ...restProps
    } = this.props;

    const listItemType = this.processListItemType(type);

    if ((listItemType !== '') && (listType !== 'description')) {
      throwKuneError('[ListItemError] Description list item type (`term`, `description`, `dt` or `dd`) used with non-description parent list type (`unordered`, `ordered`, `ul` or `ol`)');
    }

    if ((listItemType === '') && (listType === 'description')) {
      throwKuneError('[ListItemError] Non-description list item type (`li`, null or undefined) used with description parent list type (`description` or `dl`)');
    }

    // Handle collapsed css classes.
    const classes: string = classnames(
      className,
      `list-item${(listItemType === '')? listItemType : '-' + listItemType}`,
      {collapsed},
      {'collapsed-horizontal': collapsedHorizontal},
      {'collapsed-vertical': collapsedVertical}
    );

    switch (listItemType) {
      case 'term':
        return (
          <dt className={classes} {...restProps}>
            {children}
          </dt>
        );
      case 'description':
        return (
          <dd className={classes} {...restProps}>
            {children}
          </dd>
        );
    }

    return (
      <li className={classes} {...restProps}>
        {children}
      </li>
    );
  }
}

// The following decorates the default list item component with async
// sauce if the `contentPromise` props is present.
export class ListItem extends PureComponent<Props> {
  render() {
    const {
      contentPromise,
      onContentLoaded,
      onContentLoadError,
      ...restProps
    } = this.props;

    let ListItemComponent: any = SyncListItem;

    if (typeof contentPromise === 'object' && typeof contentPromise.then === 'function') {
      ListItemComponent = withAsyncChildren(ListItemComponent, contentPromise, onContentLoaded, onContentLoadError);
    }

    return (
      <ListItemComponent {...restProps}/>
    );
  }
}

// List synchronous component.
class SyncList extends PureComponent<Props> {
  processListType(listType:string|null|void):string {
    if (listType === null || (typeof listType === 'undefined')) {
      return 'unordered';
    }

    if ((/^unordered$|^ordered$|^description$/).test(listType)) {
      return listType;
    }

    if ((/^ul$|^ol$|^dl$/).test(listType)) {
      return listType
        .replace('ul', 'unordered')
        .replace('ol', 'ordered')
        .replace('dl', 'description');
    }

    throwKuneError(`[ListError] Invalid "type" prop given: ${listType}`);

    return ''; // This is just to keep flow happy
  }

  render() {
    const {
      className,
      type,
      ...restProps
    } = this.props;

    const listType = this.processListType(type);

    const classes: string = classnames(
      className,
      `list-${listType}`
    );

    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        listType
      });
    });

    switch (listType) {
      case 'ordered':
        return (
          <ol className={classes} {...restProps}>
            {children}
          </ol>
        );
      case 'description':
        return (
          <dl className={classes} {...restProps}>
            {children}
          </dl>
        );
    }

    return (
      <ul className={classes} {...restProps}>
        {children}
      </ul>
    );
  }
}

// The following decorates the default list component with async
// sauce if the `contentPromise` props is present.
export class List extends PureComponent<Props> {
  render() {
    const {
      contentPromise,
      onContentLoaded,
      onContentLoadError,
      ...restProps
    } = this.props;

    let ListComponent: any = SyncList;

    if (typeof contentPromise === 'object' && typeof contentPromise.then === 'function') {
      ListComponent = withAsyncChildren(ListComponent, contentPromise, onContentLoaded, onContentLoadError);
    }

    return (
      <ListComponent {...restProps}/>
    );
  }
}

export default List;
