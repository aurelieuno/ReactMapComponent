'use strict';

var _AuthenticityToken = require('./AuthenticityToken');

var _AuthenticityToken2 = _interopRequireDefault(_AuthenticityToken);

var _AuthenticityTokenProvider = require('./AuthenticityTokenProvider');

var _AuthenticityTokenProvider2 = _interopRequireDefault(_AuthenticityTokenProvider);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('AuthenticityToken', function () {
  it('can render with token provide context', function () {
    var provider = mount(React.createElement(
      _AuthenticityTokenProvider2.default,
      { name: 'csrf', value: 'plz no hackerz' },
      React.createElement(_AuthenticityToken2.default, null)
    ));
    var token = provider.find('input');

    expect(token.prop('value')).to.eq('plz no hackerz');
  });

  it('can render without a token provider with no error', function () {
    var token = mount(React.createElement(_AuthenticityToken2.default, null));
  });
});
//# sourceMappingURL=AuthenticityToken.test.js.map