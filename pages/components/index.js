// @flow
import React from 'react';

import Heading from 'kune-ui/Heading';
import Paragraph from 'kune-ui/Paragraph';
import Link from 'kune-ui/Link';

export default () => (
  <div>
    <div>
      <Heading level={2}>Table of Contents</Heading>
      <ul>
        <li><Link href="#text-classes">Text classes</Link></li>
        <li><Link href="#heading">Heading</Link></li>
        <li><Link href="#paragraph">Paragraph</Link></li>
        <li><Link href="#link">Link</Link></li>
      </ul>
    </div>
    <div>
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
