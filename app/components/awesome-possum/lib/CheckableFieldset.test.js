'use strict';

var _CheckableFieldset = require('./CheckableFieldset');

var _CheckableFieldset2 = _interopRequireDefault(_CheckableFieldset);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CheckableFieldset', function () {
  it('it can render without render', function () {
    shallow(React.createElement(
      _CheckableFieldset2.default,
      { label: 'Poll' },
      React.createElement(_Checkbox2.default, { name: 'poll', defaultValue: '1', label: 'One' }),
      React.createElement(_Checkbox2.default, { name: 'poll', defaultValue: '2', label: 'Two' }),
      React.createElement(_Checkbox2.default, { name: 'poll', defaultValue: '3', label: 'Three' })
    ));
  });
});
//# sourceMappingURL=CheckableFieldset.test.js.map