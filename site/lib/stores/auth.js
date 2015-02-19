'use strict';

var context = require('../context');

context.createStore('auth')
  .define('user')
  .handle('auth:signin:succeeded', function (user) {
    this.user = user;
  })
  .handle('auth:signout:succeeded', function (user) {
    this.user = null;
  });
