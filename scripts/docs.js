// https://github.com/MSFTserver/rvn2addr
// Copyright (c) 2018 MSFTserver
// Copyright (c) 2017 Emilio Almansi
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.

const shell = require('shelljs');

shell
  .exec('mkdir -p docs')
  .exec('npx jsdoc -d docs src/rvn2addr.js')
  .exec('npx http-server docs');
