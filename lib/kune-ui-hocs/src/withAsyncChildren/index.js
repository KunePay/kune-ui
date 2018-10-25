// @flow
import React, {Component, Fragment} from 'react';

type Props = any;

type State = {
  asyncChildren: any,
  asyncError: any,
};

// Default children transformations and error handling functions.
const onChildrenLoadedDefault: Function = (asyncChildren: any) => asyncChildren;
const onChildrenLoadErrorDefault: Function = (error: Error): string => 'There was an error loading the async content.';

const withAsyncChildren = (
  WrappedComponent: any,
  loadChildrenPromise: Promise<any>,
  onChildrenLoaded: Function = onChildrenLoadedDefault,
  onChildrenLoadError: Function = onChildrenLoadErrorDefault,
) => {
  return class extends Component<Props, State> {
    state = {
      asyncChildren: null,
      asyncError: null,
    };

    // The following class property is used to avoid memory leaks due to the asynchronous nature of this HOC.
    aborted: boolean = false;

    componentWillMount() {
      if (this.props.abort) {
        this.aborted = true;
      }
    }

    componentDidMount() {
      // Run the promise and make sure data transformation or error handling only happens if component mounted
      // and not aborted (either manually or by componentWillUnmount).
      loadChildrenPromise
        .then((asyncChildren: any) => {
          if (!this.aborted) {
            // Send result from `onChildrenLoaded` to state to be placed as children of the wrapped component.
            this.setState({asyncChildren: onChildrenLoaded(asyncChildren)});
          }
        })
        .catch((error: Error) => {
          if (!this.aborted) {
            // Send result from `onChildrenLoadError` to state to be placed as children of the wrapped component.
            // This content supercedes the content from `asyncChildren` state property.
            this.setState({asyncError: onChildrenLoadError(error)});
          }
        });
    }

    componentWillReceiveProps(nextProps: Props) {
      if (nextProps.abort) {
        this.aborted = true;
      }
    }

    componentWillUnmount() {
      this.aborted = true;
    }

    render () {
      const {
        children,
        ...restProps
      } = this.props;

      const {
        asyncChildren,
        asyncError,
      } = this.state;

      const asyncAbortedMessage = (this.aborted)? 'Aborted.' : null;

      return (
        <WrappedComponent {...restProps}>
          {asyncAbortedMessage || asyncError || asyncChildren || children || 'Loading...'}
        </WrappedComponent>
      );
    }
  }
};

export default withAsyncChildren;
