// @flow
import React from 'react';

import Heading from 'kune-ui-components/element-components/Heading';
import Paragraph from 'kune-ui-components/element-components/Paragraph';
import Link from 'kune-ui-components/element-components/Link';

export default () => (
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
        <Paragraph>Description of this once it is implemented</Paragraph>
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
