// @flow
import React, {Component} from 'react';

require('prismjs');
require('prismjs/components/prism-jsx');
require('prismjs/themes/prism-okaidia.css');

import {PrismCode} from 'react-prism';

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

  codeBoxIsOpen = (identifier: string):boolean => {
    return this.state[`${identifier}CodeOpen`];
  }

  codeBoxProps = (identifier: string):any => {
    const result = this.codeBoxIsOpen(identifier)?
      {
        style: {
          overflow: 'auto',
        },
      } : {
        className: 'collapsed-vertical',
      };

    return result;
  }

  codeLinkClickHandler = (identifier: string) => {
    this.setState({
      [`${identifier}CodeOpen`]: !this.codeBoxIsOpen(identifier),
    });
  }

  render () {
    const {
      codeBoxProps,
      codeLinkClickHandler,
      codeBoxIsOpen,
    } = this;

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
            <div {...codeBoxProps('highlight')}>
              <PrismCode component="pre" className="language-jsx">
{`<Heading level={4} className="highlight">.highlight</Heading>
<Paragraph className="highlight-text">
  <span className="highlight-background">&nbsp;</span> Highlights are used to bring attention to features.
</Paragraph>`}
              </PrismCode>
            </div>
            <Link onClick={(e) => {e.preventDefault(); codeLinkClickHandler('highlight')}}>{(codeBoxIsOpen('highlight'))? 'Hide Code' : 'Show Code'}</Link>

            <Heading level={4} className="info">.info</Heading>
            <Paragraph className="info-text">
            <span className="info-background">&nbsp;</span> Info shows relevant answers to questions a user may have.
            </Paragraph>
            <div {...codeBoxProps('info')}>
              <PrismCode component="pre" className="language-jsx">
{`<Heading level={4} className="info">.info</Heading>
<Paragraph className="info-text">
  <span className="info-background">&nbsp;</span> Info shows relevant answers to questions a user may have.
</Paragraph>`}
              </PrismCode>
            </div>
            <Link onClick={(e) => {e.preventDefault(); codeLinkClickHandler('info')}}>{(codeBoxIsOpen('info'))? 'Hide Code' : 'Show Code'}</Link>

            <Heading level={4} className="warning">.warning</Heading>
            <Paragraph className="warning-text">
              <span className="warning-background">&nbsp;</span> Warning tells a user that something might go wrong if they continue without verifying.
            </Paragraph>
            <div {...codeBoxProps('warning')}>
              <PrismCode component="pre" className="language-jsx">
{`<Heading level={4} className="warning">.warning</Heading>
<Paragraph className="warning-text">
  <span className="warning-background">&nbsp;</span> Warning tells a user that something might go wrong if they continue without verifying.
</Paragraph>`}
              </PrismCode>
            </div>
            <Link onClick={(e) => {e.preventDefault(); codeLinkClickHandler('warning')}}>{(codeBoxIsOpen('warning'))? 'Hide Code' : 'Show Code'}</Link>

            <Heading level={4} className="alert">.alert</Heading>
            <Paragraph className="alert-text">
              <span className="alert-background">&nbsp;</span> Alert tells the user to take action before something goes wrong.
            </Paragraph>
            <div {...codeBoxProps('alert')}>
              <PrismCode component="pre" className="language-jsx">
{`<Heading level={4} className="alert">.alert</Heading>
<Paragraph className="alert-text">
  <span className="alert-background">&nbsp;</span> Alert tells the user to take action before something goes wrong.
</Paragraph>`}
              </PrismCode>
            </div>
            <Link onClick={(e) => {e.preventDefault(); codeLinkClickHandler('alert')}}>{(codeBoxIsOpen('alert'))? 'Hide Code' : 'Show Code'}</Link>

            <Heading level={4} className="error">.error</Heading>
            <Paragraph className="error-text">
              <span className="error-background">&nbsp;</span> Error lets the user know that something has gone wrong.
            </Paragraph>
            <div {...codeBoxProps('error')}>
              <PrismCode component="pre" className="language-jsx">
{`<Heading level={4} className="error">.error</Heading>
<Paragraph className="error-text">
  <span className="error-background">&nbsp;</span> Error lets the user know that something has gone wrong.
</Paragraph>`}
              </PrismCode>
            </div>
            <Link onClick={(e) => {e.preventDefault(); codeLinkClickHandler('error')}}>{(codeBoxIsOpen('error'))? 'Hide Code' : 'Show Code'}</Link>

            <Heading level={4} className="success">.success</Heading>
            <Paragraph className="success-text">
              <span className="success-background">&nbsp;</span> Success lets the user know that something has succeeded.
            </Paragraph>
            <div {...codeBoxProps('success')}>
              <PrismCode component="pre" className="language-jsx">
{`<Heading level={4} className="success">.success</Heading>
<Paragraph className="success-text">
  <span className="success-background">&nbsp;</span> Success lets the user know that something has succeeded.
</Paragraph>`}
              </PrismCode>
            </div>
            <Link onClick={(e) => {e.preventDefault(); codeLinkClickHandler('success')}}>{(codeBoxIsOpen('success'))? 'Hide Code' : 'Show Code'}</Link>
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
