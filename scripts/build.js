// https://github.com/MSFTserver/rvn2addr
// Copyright (c) 2018 MSFTserver
// Copyright (c) 2017 Emilio Almansi
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.

const version = require('../package.json').version;

const shell = require('shelljs');
shell.config.fatal = true;

shell.exec('mkdir -p dist');

shell.exec('npx browserify src/rvn2addr.js --s rvn2addr', { silent:true })
  .to(`dist/rvn2addrjs-${version}.js`);
shell.echo(`Generated file: dist/rvn2addrjs-${version}.js.`);

shell.exec(`cp LICENSE.js dist/rvn2addrjs-${version}.min.js`);
shell.exec(`cat dist/rvn2addrjs-${version}.js`, { silent:true })
  .exec('npx uglifyjs -c', { silent:true })
  .toEnd(`dist/rvn2addrjs-${version}.min.js`);
shell.echo(`Generated file: dist/rvn2addrjs-${version}.min.js.`);
