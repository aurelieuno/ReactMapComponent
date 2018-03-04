'use strict';

var _InputHelpText = require('./InputHelpText');

var _InputHelpText2 = _interopRequireDefault(_InputHelpText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('InputHelpText', function () {
  it('can render with a child without error', function () {
    shallow(React.createElement(
      _InputHelpText2.default,
      null,
      'Help!'
    ));
  });

  it('can render without a child without error', function () {
    shallow(React.createElement(_InputHelpText2.default, null));
  });
});
//# sourceMappingURL=InputHelpText.test.js.map