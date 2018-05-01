// @flow
import React from 'react';

// TODO: Solve building of `kune-ui` package
import Heading from '../lib/kune-ui/Heading';
import Paragraph from '../lib/kune-ui/Paragraph';

export default () => (
  <div>
    <img src="/assets/logo-kune-ui-wide.png" alt="Kune UI"/>

    <Heading>What is it?</Heading>

    <Paragraph>Kune UI is a highly opinionated themeable UI framework made for React.js</Paragraph>

    <Heading>Why should I use it?</Heading>

    <Paragraph>As opposed to most other large-scale UI frameworks such as Material UI or React-Bootstrap, Kune UI was conceived and developed as a React-first UI framework.</Paragraph>

    <Paragraph>Simply put, we made it from scratch thinking about using it with nothing other than React.js. No copying or implementing holistic concepts, or worse, porting code.</Paragraph>

    <Paragraph>Moreover, features such as theming were thought of and implemented early in the development process of Kune UI, and not as an after-thought.</Paragraph>

    <Paragraph>This means, in comparison to other contemporary React UI Frameworks, Kune UI is very stable, easy to implement, and makes React apps that use it better maintainable in the long-run.</Paragraph>

    <Paragraph>For more info take a look at <a href="https://github.com/KunePay/kune-ui">Kune UI on Github</a></Paragraph>
  </div>
);
