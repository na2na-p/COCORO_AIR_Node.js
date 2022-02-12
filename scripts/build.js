const fse = require('fs-extra');
const path = require('path');

// .envとstate.jsonを./builtへコピー
fse.copySync('.env', './built/.env');
fse.copySync('state.json', './built/state.json');