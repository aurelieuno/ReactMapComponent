'use strict';

var _InputLabel = require('./InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('InputLabel', function () {
  it('can render when there is an error', function () {
    shallow(React.createElement(_InputLabel2.default, { error: 'my error' }));
  });

  it('can render when there is not an error', function () {
    shallow(React.createElement(_InputLabel2.default, null));
  });
});
//# sourceMappingURL=InputLabel.test.js.map