'use strict';

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _InputGroup = require('./InputGroup');

var _InputGroup2 = _interopRequireDefault(_InputGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('InputGroup', function () {
  it('renders without error', function () {
    shallow(React.createElement(
      _InputGroup2.default.Stack,
      { label: 'InputGroupTest', help: 'The help text for it', error: 'The error message' },
      React.createElement(
        _InputGroup2.default.Label,
        null,
        '$USD'
      ),
      React.createElement(
        _InputGroup2.default.Field,
        null,
        React.createElement(_Input2.default, { type: 'number', defaultValue: 100.00, error: 'The error message' })
      )
    ));
  });
});
//# sourceMappingURL=InputGroup.test.js.map