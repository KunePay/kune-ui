// @flow
import React, {Component} from 'react';

import Heading from 'kune-ui-components/element-components/Heading';
import Paragraph from 'kune-ui-components/element-components/Paragraph';
import Link from 'kune-ui-components/element-components/Link';

type Props = any;

type State = {
  highlightCodeOpen: boolean,
  infoCodeOpen: boolean,
  warningCodeOpen: boolean,
  alertCodeOpen: boolean,
  errorCodeOpen: boolean,
  successCodeOpen: boolean,
};

class ComponentsPage extends Component<Props, State> {
  state = {
    highlightCodeOpen: false,
    infoCodeOpen: false,
    warningCodeOpen: false,
    alertCodeOpen: false,
    errorCodeOpen: false,
    successCodeOpen: false,
  };

  render () {
    const {
      highlightCodeOpen,
      infoCodeOpen,
      warningCodeOpen,
      alertCodeOpen,
      errorCodeOpen,
      successCodeOpen,
    } = this.state;

    return (
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2">
          <Heading level={2}>Table of Contents</Heading>
          <ul>
            <li><Link href="#text-classes">Text classes</Link></li>
            <li><Link href="#heading">Heading</Link></li>
            <li><Link href="#paragraph">Paragraph</Link></li>
            <li><Link href="#link">Link</Link></li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-9 col-lg-10">
          <Heading>Documentation</Heading>
          <Heading level={2}>Kune UI Components</Heading>
          <div>
            <Heading level={3}>Text classes</Heading>
            <Paragraph>There's 6 available color level classes:</Paragraph>

            <Heading level={4} className="highlight">.highlight</Heading>
            <Paragraph className="highlight-text">
              <span className="highlight-background">&nbsp;</span> Highlights are used to bring attention to features.
            </Paragraph>
            <Paragraph collapsedVertical={!highlightCodeOpen} style={{overflow: 'auto'}}><pre>
{`<Heading level={4} className="highlight">.highlight</Heading>
<Paragraph className="highlight-text">
  <span className="highlight-background">&nbsp;</span> Highlights are used to bring attention to features.
</Paragraph>`}
            </pre></Paragraph>
            <Link onClick={(e) => {e.preventDefault(); this.setState({highlightCodeOpen: !highlightCodeOpen})}}>{(highlightCodeOpen)? 'Hide Code' : 'Show Code'}</Link>

            <Heading level={4} className="info">.info</Heading>
            <Paragraph className="info-text">
            <span className="info-background">&nbsp;</span> Info shows relevant answers to questions a user may have.
            </Paragraph>
            <Paragraph collapsedVertical={!infoCodeOpen} style={{overflow: 'auto'}}><pre>
{`<Heading level={4} className="info">.info</Heading>
<Paragraph className="info-text">
  <span className="info-background">&nbsp;</span> Info shows relevant answers to questions a user may have.
</Paragraph>`}
            </pre></Paragraph>
            <Link onClick={(e) => {e.preventDefault(); this.setState({infoCodeOpen: !infoCodeOpen})}}>{(infoCodeOpen)? 'Hide Code' : 'Show Code'}</Link>

            <Heading level={4} className="warning">.warning</Heading>
            <Paragraph className="warning-text">
              <span className="warning-background">&nbsp;</span> Warning tells a user that something might go wrong if they continue without verifying.
            </Paragraph>
            <Paragraph collapsedVertical={!warningCodeOpen} style={{overflow: 'auto'}}><pre>
{`<Heading level={4} className="warning">.warning</Heading>
<Paragraph className="warning-text">
  <span className="warning-background">&nbsp;</span> Warning tells a user that something might go wrong if they continue without verifying.
</Paragraph>`}
            </pre></Paragraph>
            <Link onClick={(e) => {e.preventDefault(); this.setState({warningCodeOpen: !warningCodeOpen})}}>{(warningCodeOpen)? 'Hide Code' : 'Show Code'}</Link>

            <Heading level={4} className="alert">.alert</Heading>
            <Paragraph className="alert-text">
              <span className="alert-background">&nbsp;</span> Alert tells the user to take action before something goes wrong.
            </Paragraph>
            <Paragraph collapsedVertical={!alertCodeOpen} style={{overflow: 'auto'}}><pre>
{`<Heading level={4} className="alert">.alert</Heading>
<Paragraph className="alert-text">
  <span className="alert-background">&nbsp;</span> Alert tells the user to take action before something goes wrong.
</Paragraph>`}
            </pre></Paragraph>
            <Link onClick={(e) => {e.preventDefault(); this.setState({alertCodeOpen: !alertCodeOpen})}}>{(alertCodeOpen)? 'Hide Code' : 'Show Code'}</Link>

            <Heading level={4} className="error">.error</Heading>
            <Paragraph className="error-text">
              <span className="error-background">&nbsp;</span> Error lets the user know that something has gone wrong.
            </Paragraph>
            <Paragraph collapsedVertical={!errorCodeOpen} style={{overflow: 'auto'}}><pre>
{`<Heading level={4} className="error">.error</Heading>
<Paragraph className="error-text">
  <span className="error-background">&nbsp;</span> Error lets the user know that something has gone wrong.
</Paragraph>`}
            </pre></Paragraph>
            <Link onClick={(e) => {e.preventDefault(); this.setState({errorCodeOpen: !errorCodeOpen})}}>{(errorCodeOpen)? 'Hide Code' : 'Show Code'}</Link>

            <Heading level={4} className="success">.success</Heading>
            <Paragraph className="success-text">
              <span className="success-background">&nbsp;</span> Success lets the user know that something has succeeded.
            </Paragraph>
            <Paragraph collapsedVertical={!successCodeOpen} style={{overflow: 'auto'}}><pre>
{`<Heading level={4} className="success">.success</Heading>
<Paragraph className="success-text">
  <span className="success-background">&nbsp;</span> Success lets the user know that something has succeeded.
</Paragraph>`}
            </pre></Paragraph>
            <Link onClick={(e) => {e.preventDefault(); this.setState({successCodeOpen: !successCodeOpen})}}>{(successCodeOpen)? 'Hide Code' : 'Show Code'}</Link>
          </div>
          <div>
            <Heading level={3}>Heading</Heading>
            <Paragraph>Description of this once it is implemented</Paragraph>
          </div>
          <div>
            <Heading level={3}>Paragraph</Heading>
            <Paragraph>Description of this once it is implemented</Paragraph>
          </div>
          <div>
            <Heading level={3}>Link</Heading>
            <Paragraph>Description of this once it is implemented</Paragraph>
          </div>
        </div>
      </div>
    );
  }
}

export default () => (
  <ComponentsPage></ComponentsPage>
);
