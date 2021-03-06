'use strict';

const Plugin = require('broccoli-persistent-filter');
const nomdown = require('nomdown');

module.exports = class Nomdown extends Plugin {
  constructor(node, config = {}) {
    config.persist = true;
    super(node, config);
    this.extensions = ['md', 'markdown']
    this.targetExtension = 'html';
  }

  processString(string, releativeFile) {
    return nomdown(string);
  }

  baseDir() {
    return __dirname;
  }
};
