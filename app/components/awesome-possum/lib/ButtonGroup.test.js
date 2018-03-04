'use strict';

var _ButtonGroup = require('./ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ButtonGroup', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_ButtonGroup2.default, null));
  });

  it('should add className to child', function () {
    var inherentClassName = 'rev-ButtonGroup';
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(_ButtonGroup2.default, { className: testClassName })).first().prop('className');

    expect(childClassName).to.contain(inherentClassName);
    expect(childClassName).to.contain(testClassName);
  });

  it('should handle a props for different types of button groups', function () {
    var buttonGroup = shallow(React.createElement(_ButtonGroup2.default, { secondary: true }));

    expect(buttonGroup.prop('className')).to.contain('secondary');
  });
});
//# sourceMappingURL=ButtonGroup.test.js.map