'use strict';

var context = require('../context');

context.createAction('auth:signin', function (params) {
  return this.papercraft.signin({
    email: params.email,
    password: params.password
  });
});

context.createAction('auth:signout', function (params) {
  return this.papercraft.signout();
});
