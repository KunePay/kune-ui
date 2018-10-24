// @flow
import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';

import type {Node} from 'react';

function mapStateToProps (state: any) {
  const {theme, shade} = state.themeReducer;
  return {theme, shade};
}

const withTheme = (WrappedComponent: any, componentName: string) => {
  return connect(mapStateToProps)(class extends PureComponent<any> {
    render () {
      const {
        children,
        dispatch,
        theme,
        shade,
        ...restProps
      } = this.props;

      const global = (componentName === 'global');

      return (
        <Fragment>
          <WrappedComponent {...restProps}>
            {children}
          </WrappedComponent>
          <style jsx="true" global="true">{
            (!global)?
              theme.shades[shade][componentName]
              :
              `${theme.grid}${theme.shades[shade][componentName]}`
          }</style>
        </Fragment>
      );
    }
  })
};

export default withTheme;
