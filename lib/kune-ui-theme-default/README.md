# Kune UI Default Theme

This is Kune UI's default theme. It can be used as a base for the creation of other themes.

## Basic Concepts

In regards to theming, when building and customizing a user interface using Kune UI we want to make sure that:

- An app can have multiple themes which can be built into the final distribution package
- The packaged themes can be easily switched at run-time at the click of a button
- A theme has multiple shades (`light` and `dark` by default) to aid in Ease of Access implementation
- A shade can also be easily switched at run-time at the click of a button
- There's an easy way to change the text-direction so that developers using eastern language content which reads right-to-left can also use Kune UI to build their interfaces
- The base look and feel can be easily tweaked through re-usable variables
- There's global styles which can easily be edited in a single place
- There's also the ability to fine-tune the styles of specific Kune UI components

All of the previous is managed through sass files which get transpiled to css files and to a single JSON object which is used to feed Kune UI's implementation of `styled-jsx`

## Development

To begin development simply clone this repository, navigate to the directory's root, and run the following commands in your terminal:

```
$ npm install -g yarn
$ yarn
$ yarn setup:dev
$ yarn dev
```

## TODO: write in-depth description of this package
