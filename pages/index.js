// @flow
import React from 'react';

// TODO: Solve building of `kune-ui` package
import Heading from '../lib/kune-ui/Heading';

export default () => (
  <div>
    <Heading>Title</Heading>
    <Heading level={2}>Sub Title</Heading>
    <img src="/assets/logo-kune-ui-wide.png" alt="Kune UI"/>
  </div>
);
