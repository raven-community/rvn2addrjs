# Rvn2Addr.js: The new Ravencoin address format for Node.js and web browsers.

# NOT IMPLEMENTED YET!!

## Installation

### Using NPM

```bsh
$ npm install --save rvn2addrjs
```

### Using Bower

```bsh
$ bower install --save rvn2addrjs
```

### Manually

You may also download the distribution file manually and place it within your third-party scripts directory: [dist/rvn2addrjs-{{ version }}.min.js](https://cdn.rawgit.com/MSFTserver/rvn2addrjs/master/dist/rvn2addrjs-{{ version }}.min.js).

## Usage

### In Node.js

```javascript
const rvn2addr = require('rvn2addrjs');
const address = 'ravencoin:rEgfYH2ed8a3Age6qLuhXeLvSUJU4Q3sBE';
const { prefix, type, hash } = rvn2addr.decode(address);
console.log(prefix); // 'ravencoin'
console.log(type); // 'P2PKH'
console.log(hash); // Uint8Array [ 118, 160, ..., 115 ]
console.log(rvn2addr.encode(prefix, type, hash)); // 'ravencoin:rEgfYH2ed8a3Age6qLuhXeLvSUJU4Q3sBE'
```

*Note:* This is a JavaScript implementation of the Rvn2Addr format specification. If you are looking for an easy-to-use and well-tested library to translate between different formats, check out [RvnAddr.js](https://github.com/MSFTserver/rvnaddrjs).

### Browser

#### Script Tag

You may include a script tag in your HTML and the `rvn2addr` module will be defined globally on subsequent scripts.

```html
<html>
  <head>
    ...
    <script src="https://cdn.rawgit.com/MSFTserver/rvn2addrjs/master/dist/rvn2addrjs-{{ version }}.min.js"></script>
  </head>
  ...
</html>
```

## Documentation

### Generate and Browse Locally

```bsh
$ npm run docs
```

### Online

Browse automatically generated jsdocs [online](https://cdn.rawgit.com/MSFTserver/rvn2addrjs/master/docs/index.html).
