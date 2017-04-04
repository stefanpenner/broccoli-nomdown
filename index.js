'use strict';

const Plugin = require('broccoli-persistent-filter');
const nomdown = require('nomdown');

module.exports  = class extends Plugin {
  processString(string, releativeFile) {
    return nomdown(string);
  }
};
