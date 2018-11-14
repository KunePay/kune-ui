// @flow
import React, {Component} from 'react';

require('prismjs');
require('prismjs/components/prism-jsx');
require('prism-themes/themes/prism-base16-ateliersulphurpool.light.css');

import {PrismCode} from 'react-prism';
import axios from 'axios';

import Heading from 'kune-ui-components/element-components/Heading';
import Paragraph from 'kune-ui-components/element-components/Paragraph';
import Link from 'kune-ui-components/element-components/Link';
import List, {ListItem} from 'kune-ui-components/element-components/List';

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
    listAsyncExampleRequested: false,
    listItemAsyncExampleRequested: false,
    basicAsyncExampleRequested: false,
    markupAsyncExampleRequested: false,
    transformationAsyncExampleRequested: false,
    preChildrenAsyncExampleRequested: false,
    ajaxAsyncExampleRequested: false,
    errorAsyncExampleRequested: false,
  };

  codeBoxIsOpen = (identifier: string):boolean => {
    return this.state[`${identifier}CodeOpen`];
  }

  codeBoxProps = (identifier: string):any => {
    const result = this.codeBoxIsOpen(identifier)?
      {
        className: 'language-jsx code-box',
      } : {
        className: 'language-jsx collapsed-vertical',
      };

    return result;
  }

  codeLinkClickHandler = (identifier: string) => {
    this.setState({
      [`${identifier}CodeOpen`]: !this.codeBoxIsOpen(identifier),
    });
  }

  checkAsyncExampleRequested = (identifier: string):boolean => {
    return this.state[`${identifier}AsyncExampleRequested`];
  }

  asyncExampleLoadClickHandler = (identifier: string) => {
    this.setState({
      [`${identifier}AsyncExampleRequested`]: false,
    }, () => setTimeout(() => this.setState({
      [`${identifier}AsyncExampleRequested`]: true,
    }), 500));
  }

  render () {
    const {
      codeBoxProps,
      codeLinkClickHandler,
      codeBoxIsOpen,
      checkAsyncExampleRequested,
    } = this;

    return (
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2">
          <Heading level={2}>
            Table of Contents
          </Heading>
          <ul>
            <li>
              <Link href="#color-palette">
                Color palette
              </Link>
            </li>
            <li>
              <Link href="#components">
                Components
              </Link>
              <ul>
                <li>
                  <Link href="#heading">
                    Typography
                  </Link>
                  <ul>
                    <li>
                      <Link href="#heading">
                        Heading
                      </Link>
                    </li>
                    <li>
                      <Link href="#paragraph">
                        Paragraph
                      </Link>
                    </li>
                    <li>
                      <Link href="#link">
                        Link
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#loading-content-asynchronously">
                Loading content asynchronously
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-9 col-lg-10">
          <Heading>
            Documentation
          </Heading>
          <div>
            <Heading level={2}>
              Color palette
            </Heading>
            <div>
              <Heading level={3}>
                Text classes
              </Heading>
              <Paragraph>
                There's 6 available color level classes:
              </Paragraph>
              <div>
                <Heading level={4} className="highlight">
                  .highlight
                </Heading>
                <Paragraph className="highlight-text">
                  <span className="highlight-background">&nbsp;</span> Highlights are used to bring attention to features.
                </Paragraph>
                <PrismCode component="pre" {...codeBoxProps('highlight')}>
{`<Heading level={4} className="highlight">.highlight</Heading>
<Paragraph className="highlight-text">
  <span className="highlight-background">&nbsp;</span> Highlights are used to bring attention to features.
</Paragraph>`}
                </PrismCode>
                <Link onClick={(e) => {e.preventDefault(); codeLinkClickHandler('highlight')}}>{(codeBoxIsOpen('highlight'))? 'Hide Code' : 'Show Code'}</Link>
              </div>
              <div>
                <Heading level={4} className="info">
                  .info
                </Heading>
                <Paragraph className="info-text">
                  <span className="info-background">&nbsp;</span> Info shows relevant answers to questions a user may have.
                </Paragraph>
                <PrismCode component="pre" {...codeBoxProps('info')}>
{`<Heading level={4} className="info">.info</Heading>
<Paragraph className="info-text">
  <span className="info-background">&nbsp;</span> Info shows relevant answers to questions a user may have.
</Paragraph>`}
                </PrismCode>
                <Link onClick={(e) => {e.preventDefault(); codeLinkClickHandler('info')}}>{(codeBoxIsOpen('info'))? 'Hide Code' : 'Show Code'}</Link>
              </div>
              <div>
                <Heading level={4} className="warning">
                  .warning
                </Heading>
                <Paragraph className="warning-text">
                  <span className="warning-background">&nbsp;</span> Warning tells a user that something might go wrong if they continue without verifying.
                </Paragraph>
                <PrismCode component="pre" {...codeBoxProps('warning')}>
{`<Heading level={4} className="warning">.warning</Heading>
<Paragraph className="warning-text">
  <span className="warning-background">&nbsp;</span> Warning tells a user that something might go wrong if they continue without verifying.
</Paragraph>`}
                </PrismCode>
                <Link onClick={(e) => {e.preventDefault(); codeLinkClickHandler('warning')}}>{(codeBoxIsOpen('warning'))? 'Hide Code' : 'Show Code'}</Link>
              </div>
              <div>
                <Heading level={4} className="alert">.alert</Heading>
                <Paragraph className="alert-text">
                  <span className="alert-background">&nbsp;</span> Alert tells the user to take action before something goes wrong.
                </Paragraph>
                <PrismCode component="pre" {...codeBoxProps('alert')}>
{`<Heading level={4} className="alert">.alert</Heading>
<Paragraph className="alert-text">
  <span className="alert-background">&nbsp;</span> Alert tells the user to take action before something goes wrong.
</Paragraph>`}
                </PrismCode>
                <Link onClick={(e) => {e.preventDefault(); codeLinkClickHandler('alert')}}>{(codeBoxIsOpen('alert'))? 'Hide Code' : 'Show Code'}</Link>
              </div>
              <div>
                <Heading level={4} className="error">.error</Heading>
                <Paragraph className="error-text">
                  <span className="error-background">&nbsp;</span> Error lets the user know that something has gone wrong.
                </Paragraph>
                <PrismCode component="pre" {...codeBoxProps('error')}>
{`<Heading level={4} className="error">.error</Heading>
<Paragraph className="error-text">
  <span className="error-background">&nbsp;</span> Error lets the user know that something has gone wrong.
</Paragraph>`}
                </PrismCode>
                <Link onClick={(e) => {e.preventDefault(); codeLinkClickHandler('error')}}>{(codeBoxIsOpen('error'))? 'Hide Code' : 'Show Code'}</Link>
              </div>
              <div>
                <Heading level={4} className="success">.success</Heading>
                <Paragraph className="success-text">
                  <span className="success-background">&nbsp;</span> Success lets the user know that something has succeeded.
                </Paragraph>
                <PrismCode component="pre" {...codeBoxProps('success')}>
{`<Heading level={4} className="success">.success</Heading>
<Paragraph className="success-text">
  <span className="success-background">&nbsp;</span> Success lets the user know that something has succeeded.
</Paragraph>`}
                </PrismCode>
                <Link onClick={(e) => {e.preventDefault(); codeLinkClickHandler('success')}}>{(codeBoxIsOpen('success'))? 'Hide Code' : 'Show Code'}</Link>
              </div>
            </div>
          </div>
          <div>
            <Heading level={2}>Components</Heading>
            <Paragraph>
              Kune UI leverages JSX to provide common-use components with useful out-of-the-box functionalities.
            </Paragraph>
            <Paragraph>
              As such, you might notice that most Kune UI components replace common HTML tags. You can still use every-day HTML markup along with Kune UI, but we strongly encourage you to check out the simple yet powerful functionalities we have implemented so that you can focus on building cool and useful apps.
            </Paragraph>
            <div>
              <Heading level={2}>Typography</Heading>
              <Paragraph>A UI kit is only as strong as its ability to render content in a satisfactory manner. Kune UI is no exception to this rule.</Paragraph>
              <Paragraph>Here's a list of the typography components the Kune UI team has implemented along with the common HTML tags they're meant to replace:</Paragraph>
              <ul>
                <li>Heading (h1, h2, h3, h4, h5, h6)</li>
                <li>Paragraph (p)</li>
                <li>Separator (hr)</li>
                <li>Link (a)</li>
                <li>Accent (b, strong, i, em, mark, small, del, ins, sub, sup)</li>
                <li>List (ul, ol, dl)</li>
                <li>Citation (abbr, address, bdo, blockquote, cite, q)</li>
                <li>Image (img)</li>
              </ul>
              <div>
                <Heading level={3}>Heading</Heading>
                <Paragraph>
                  The <PrismCode className="language-jsx">{'<Heading/>'}</PrismCode> component provides a very handy feature out of the box: <strong>automatic named anchors</strong>.
                </Paragraph>
                <Paragraph>
                  Named anchors are useful to be able to link directly to content using url fragment identifiers (the hashtag portion of a link, i.e. "#my-title").
                </Paragraph>
                <Paragraph>
                  For example, let's say that you own the site <PrismCode>example.com</PrismCode> and in it you place the following code:
                </Paragraph>
                <PrismCode component="pre" className="language-jsx">
{`<Heading>My Title</Heading>`}
                </PrismCode>
                <Paragraph>The previous JSX syntax generates the following markup:</Paragraph>
                <PrismCode component="pre" className="language-jsx">
{`<h1 class="heading-1">
  <a name="my-title"></a>
  My Title
</h1>`}
                </PrismCode>
                <Paragraph>
                  This means that you can link to that header directly from the url like this: <PrismCode>https://example.com#my-title</PrismCode>
                </Paragraph>
                <Paragraph>
                  You may wonder what happens with headings that contain special characters. Kune UI's <PrismCode className="language-jsx">{'<Heading/>'}</PrismCode> component takes care of normalizing special characters so that the generated named anchor conforms to URL standards.
                </Paragraph>
                <Paragraph>
                  Let's say that you have a title with the hungarian phrase <PrismCode>{'Árvíztűrő tükörfúrógép!'}</PrismCode>, as such:
                </Paragraph>
                <PrismCode component="pre" className="language-jsx">
{`<Heading>Árvíztűrő tükörfúrógép!</Heading>`}
                </PrismCode>
                <Paragraph>The previous JSX syntax generates the following markup:</Paragraph>
                <PrismCode component="pre" className="language-jsx">
{`<h1 class="heading-1">
  <a name="arvizturo-tukorfurogep"></a>
  Árvíztűrő tükörfúrógép!
</h1>`}
                </PrismCode>
                <Paragraph>
                  This is not only highly convenient, but extremely valuable for SEO purposes.
                </Paragraph>
              </div>
              <div>
                <Heading level={3}>Paragraph</Heading>
                <Paragraph>Description of this once it is implemented</Paragraph>
              </div>
              <div>
                <Heading level={3}>List</Heading>
                <Paragraph>Description of this once it is implemented</Paragraph>
                <List>
                  <ListItem>Unordered</ListItem>
                  <ListItem>Test</ListItem>
                </List>
                <List type="unordered">
                  <ListItem>Unordered</ListItem>
                  <ListItem>Test</ListItem>
                </List>
                <List type="ul">
                  <ListItem>Unordered</ListItem>
                  <ListItem>Test</ListItem>
                </List>
                <List type="ordered">
                  <ListItem>Ordered</ListItem>
                  <ListItem>Test</ListItem>
                </List>
                <List type="ol">
                  <ListItem>Ordered</ListItem>
                  <ListItem>Test</ListItem>
                </List>
                <List type="description">
                  <ListItem type="term">Description</ListItem>
                  <ListItem type="description">Test</ListItem>
                </List>
                <List type="dl">
                  <ListItem type="dt">Description</ListItem>
                  <ListItem type="dd">Test</ListItem>
                </List>
                <Heading level={4}>Nested Lists</Heading>
                <List>
                  <ListItem>Nested Test</ListItem>
                  <ListItem>
                    <List type="ordered">
                      <ListItem>Ordered</ListItem>
                      <ListItem>
                        <List type="description">
                          <ListItem type="term">Description</ListItem>
                          <ListItem type="description">Test</ListItem>
                        </List>
                      </ListItem>
                    </List>
                  </ListItem>
                </List>
                <Heading level={4}>Async Lists</Heading>
                <button onClick={() => this.asyncExampleLoadClickHandler('list')}>Click here to run example</button>
                {
                  checkAsyncExampleRequested('list')?
                  (<List
                    contentPromise={
                      axios.get('https://jsonplaceholder.typicode.com/users')
                    }
                    onContentLoaded={
                      (res: any) => {
                        const nameListItems: string[] = res.data.map(
                          (p: any, index: number) => {
                            return (
                              <ListItem key={`asyncNameListItem-${index}`}>
                                {p.name}
                              </ListItem>
                            );
                          }
                        );
                        return nameListItems;
                      }
                    }
                  >
                    <ListItem>Loading...</ListItem>
                  </List>)
                  :
                  null
                }
                <Heading level={4}>Async List Items</Heading>
                <button onClick={() => this.asyncExampleLoadClickHandler('listItem')}>Click here to run example</button>
                <List type="ordered">
                  {
                    [
                      (<ListItem key="asyncListItem-0">This item is not asynchronous</ListItem>),
                      checkAsyncExampleRequested('listItem')?
                      (<ListItem
                        key="asyncListItem-1"
                        contentPromise={
                          new Promise((r: any) => setTimeout(() => {
                            r(
                              <span><strong>This item</strong> took 3 seconds to load its content.</span>
                            )
                          }, 3000))
                        }
                      />)
                      :
                      <ListItem key="asyncListItem-1">Waiting for example to be run...</ListItem>
                    ]
                  }
                </List>
              </div>
              <div>
                <Heading level={3}>Link</Heading>
                <Paragraph>Description of this once it is implemented</Paragraph>
              </div>
              <div>
                <Heading level={3}>Loading content asynchronously</Heading>
                <Paragraph>You can use the <PrismCode>contentPromise</PrismCode> prop to load content asynchronously as per the following example:</Paragraph>
                <Heading level={4}>Basic async content</Heading>
                <Paragraph>The only requirement to turn a Kune UI component into an async component is to pass a <PrismCode>Promise</PrismCode> object to the <PrismCode>contentPromise</PrismCode> prop:</Paragraph>
                <button onClick={() => this.asyncExampleLoadClickHandler('basic')}>Click here to run example</button>
                {
                  checkAsyncExampleRequested('basic')?
                  (<Paragraph
                    contentPromise={
                      new Promise((r: any) => setTimeout(() => r('This content took 3 seconds to show up.'), 3000))
                    }
                  />)
                  :
                  null
                }
                <PrismCode component="pre" className="language-jsx">
{`<Paragraph
  contentPromise={
    new Promise((r: any) => setTimeout(() => r('This content took 3 seconds to show up.'), 3000))
  }
/>`}
                </PrismCode>
                <Heading level={4}>Async content with markup</Heading>
                <Paragraph>You can return more than just strings from a content promise, such as HTML or even JSX markup. Basically any content compatible with React's <PrismCode>children</PrismCode> prop will work just fine:</Paragraph>
                <button onClick={() => this.asyncExampleLoadClickHandler('markup')}>Click here to run example</button>
                {
                  checkAsyncExampleRequested('markup')?
                  (<Paragraph
                    contentPromise={
                      new Promise((r: any) => setTimeout(() => {
                        r(
                          <span><strong>This content</strong> took 3 seconds to show up.</span>
                        )
                      }, 3000))
                    }
                  />)
                  :
                  null
                }
                <PrismCode component="pre" className="language-jsx">
{`<Paragraph
  contentPromise={
    new Promise((r: any) => setTimeout(() => {
      r(
        <span><strong>This content</strong> took 3 seconds to show up.</span>
      )
    }, 3000))
  }
/>`}
                </PrismCode>
                <Heading level={4}>Async content transformation</Heading>
                <Paragraph>Sometimes the content returned by a promise may not be in the desired format for your view. In such cases you can take leverage of the <PrismCode>onContentLoaded</PrismCode> prop to simply pass a function which transforms the data returned by the content promise:</Paragraph>
                <button onClick={() => this.asyncExampleLoadClickHandler('transformation')}>Click here to run example</button>
                {
                  checkAsyncExampleRequested('transformation')?
                  (<Paragraph
                    contentPromise={
                      new Promise((r: any) => setTimeout(() => r('This content'), 3000))
                    }
                    onContentLoaded={
                      (content: string) => `${content.split(' ').join(' other ')} took 3 seconds to show up.`
                    }
                  />)
                  :
                  null
                }
                <PrismCode component="pre" className="language-jsx">
{`<Paragraph
  contentPromise={
    new Promise((r: any) => setTimeout(() => r('This content'), 3000))
  }
  onContentLoaded={
    (content: string) => \`\${content.split(' ').join(' other ')} took 3 seconds to show up.\`
  }
/>`}
                </PrismCode>
                <Heading level={4}>Loading content message</Heading>
                <Paragraph>While content is being loaded a "Loading..." string is displayed. You can override this message by simply putting static content as child of the asynchronous component. The content placed as children of the asynchronous component will be replaced by the asynchronous content once loaded:</Paragraph>
                <button onClick={() => this.asyncExampleLoadClickHandler('preChildren')}>Click here to run example</button>
                {
                  checkAsyncExampleRequested('preChildren')?
                  (<Paragraph
                    contentPromise={
                      new Promise((r: any) => setTimeout(() => r('This content took 3 seconds to show up.'), 3000))
                    }
                  >
                    Content will show up here in 3 seconds ⏲...
                  </Paragraph>)
                  :
                  null
                }
                <PrismCode component="pre" className="language-jsx">
{`<Paragraph
  contentPromise={
    new Promise((r: any) => setTimeout(() => r('This content took 3 seconds to show up.'), 3000))
  }
>
  Content will show up here in 3 seconds ⏲...
</Paragraph>`}
                </PrismCode>
                <Heading level={4}>Ajax content</Heading>
                <Paragraph>Most use cases of asynchronous contents will involve ajax. Here's an example of loading and transforming JSON data using axios:</Paragraph>
                <button onClick={() => this.asyncExampleLoadClickHandler('ajax')}>Click here to run example</button>
                {
                  checkAsyncExampleRequested('ajax')?
                  (<Paragraph
                    contentPromise={
                      axios.get('https://jsonplaceholder.typicode.com/users')
                    }
                    onContentLoaded={
                      (res: any) => {
                        const names: string = res.data.map((p: any) => p.name).join(', ');
                        return (
                          <span>
                            The following content was loaded from <Link href="https://jsonplaceholder.typicode.com/users" target="_blank">https://jsonplaceholder.typicode.com/users</Link> and concatenated into the following string:
                            <br/>
                            <br/>
                            {names}
                          </span>
                        );
                      }
                    }
                  />)
                  :
                  null
                }
                <PrismCode component="pre" className="language-jsx">
{`<Paragraph
  contentPromise={
    axios.get('https://jsonplaceholder.typicode.com/users')
  }
  onContentLoaded={
    (res: any) => {
      const names: string = res.data.map((p: any) => p.name).join(', ');
      return (
        <span>
          The following content was loaded from <Link href="https://jsonplaceholder.typicode.com/users" target="_blank">https://jsonplaceholder.typicode.com/users</Link> and concatenated into the following string:
          <br/>
          <br/>
          {names}
        </span>
      );
    }
  }
/>`}
                </PrismCode>
                <Heading level={4}>Handling async content errors</Heading>
                <Paragraph>Things don't always go as planned. For such instances a default "There was an error loading the async content." message is displayed which can be overriden by the <PrismCode>onContentLoadError</PrismCode> prop:</Paragraph>
                <button onClick={() => this.asyncExampleLoadClickHandler('error')}>Click here to run example</button>
                {
                  checkAsyncExampleRequested('error')?
                  (<Paragraph
                    contentPromise={
                      new Promise((r: any) => setTimeout(() => r(0), 3000))
                    }
                    onContentLoaded={
                      (data: any) => data.n()
                    }
                    onContentLoadError={
                      (error: Error) => error.message
                    }
                  />)
                  :
                  null
                }
                <PrismCode component="pre" className="language-jsx">
{`<Paragraph
  contentPromise={
    new Promise((r: any) => setTimeout(() => r(0), 3000))
  }
  onContentLoaded={
    (data: any) => data.n()
  }
  onContentLoadError={
    (error: Error) => error.message
  }
/>`}
                </PrismCode>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default () => (
  <ComponentsPage></ComponentsPage>
);
