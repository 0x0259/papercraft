/**
 * TODO: Description.
 */
var util = require('util');
var ProxyClient = require('proxy-client');

/**
 * Creates a new instance of PapercraftClient with the provided `options`.
 *
 * @param {Object} options
 */
function PapercraftClient(options) {
  if (!(this instanceof PapercraftClient)) {
    return new PapercraftClient(options);
  }

  options = options || {};

  this.rootUrl = this.rootUrl || options.rootUrl || 'https://api.papercraft.com';

  ProxyClient.call(this, options);
}
ProxyClient.inherit(PapercraftClient);

/**
 * Returns an Array of "interesting" Photo objects for today.
 * Pagination is supported via `page` and `count`.
 */
PapercraftClient.prototype.signin = function signin(params) {
  var self = this;

  params = params || {};

  return self
    .post('/v1/users/signin')
    .send({
      email: params.email,
      password: params.password
    })
    .end()
    .then(function (response) {
      if (response.status !== 200) {
        return self.rejectResponse(response);
      }

      return {
        alias: response.body.alias,
        name: response.body.name,
        email: response.body.email
      };
    });
};

/*!
 * Export `PapercraftClient`.
 */
module.exports = PapercraftClient;
