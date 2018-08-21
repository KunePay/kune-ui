const glob = require("glob");
const sass = require('node-sass');
const CleanCSS = require('clean-css');
const cleanCSS = new CleanCSS({});
const fse = require('fs-extra');
const dot = require('dot-object');
const chokidar = require('chokidar');

const cliArgs = process.argv.slice(2);

/* CONFIG */
// TODO: Load config from file
const config = {
  name: 'kune-ui-theme-default',
  title: 'Default',
  description: "Kune UI's default theme.",
  url: '',
  author: 'Jean M. Lescure'
};

const buildTheme = () => {
  // Find all sass files
  fileCollection = glob.sync(
    "**/*.scss",
    {
      nosort: true,
      cwd: 'src'
    }
  );

  let result = {};
  
  // For each sass file found
  fileCollection.forEach((file) => {
    if (!(/(variables|colors)/).test(file)){
      console.log(`Rendering file: ${file}`);

      // The `file` variable looks somehthing like: light/scss/element-components/Heading/styles.scss
      // reduce that path to a sensible `dot-object` notation such as: light.Heading
      const fileKey = file.replace(/\/[^\/]+?\.scss$/, '').replace(/(^[^\/]+?)\/.+\/(.+?$)/,'$1/$2').replace(/\//g, '.');

      // The `file` variable looks somehthing like: light/scss/element-components/Heading/styles.scss
      // reduce that path to a sensible distribution output path such as: dist/light/Heading.css
      const outputCSSFile = file.replace(/\/[^\/]+?\.scss$/, '.css').replace(/(^[^\/]+?)\/.+\/(.+?\.css$)/,'dist/$1/$2');

      // Render and minify the sass file into a string or buffer
      const renderedCSS = cleanCSS.minify(sass.renderSync({file: `src/${file}`}).css).styles;

      // Output the distribution css file under the `dist` directory
      fse.outputFileSync(outputCSSFile, renderedCSS, {encoding: 'utf8'});
      console.log(`Output written to: ${outputCSSFile}`);

      // Read back the generated file into the previously generated `dot-object` key.
      // Doing it this way is the easier way to get the encoded string from the
      // resulting `node-sass` buffer
      result[fileKey] = fse.readFileSync(outputCSSFile, 'utf8');
    }
  });

  // Normalize the `dot-object` notation into a regular object tree
  result = Object.assign({}, config, {shades: dot.object(result)});

  // Output the distribution 
  fse.outputFileSync('dist/index.js', `'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=${JSON.stringify(result)};`);

  console.log('📦  Packaged theme object');
  console.log(`🎊  Successfully processed ${fileCollection.length} files`);
};

const buildThemeAndCatchErrors = () => {
  try {
    buildTheme();
  } catch (error) {
    console.error(error);
  }
};

const logBuildAndCatch = (eventString, pathString) => {
  process.stdout.write('\x1B[2J\x1B[0f');
  console.log(`\nFile ${eventString}: ${pathString}`);
  console.log('Rebuilding theme...');
  buildThemeAndCatchErrors();
};

if (cliArgs.indexOf('-w') > -1){
  const watcher = chokidar.watch(
    'src', 
    {
      ignored: /(^|[\/\\])\../,
      persistent: true
    }
  );

  let initialAddSkipped = false;
  let initialChangeSkipped = false;
  let initialUnlinkSkipped = false;

  watcher.on('add', (path) => {
    if (initialAddSkipped){
      logBuildAndCatch('added', path);
    } else {
      initialAddSkipped = true;
    }
  });

  watcher.on('change', (path) => {
    if (initialChangeSkipped){
      logBuildAndCatch('changed', path);
    } else {
      initialChangeSkipped = true;
    }
  });

  watcher.on('unlink', (path) => {
    if (initialUnlinkSkipped){
      logBuildAndCatch('removed', path);
    } else {
      initialUnlinkSkipped = true;
    }
  });

  process.stdout.write('\x1B[2J\x1B[0f');
  console.log("\nInitial build started...");
  buildThemeAndCatchErrors();
} else {
  buildTheme();
}
