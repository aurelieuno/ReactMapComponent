'use strict';

var _Badge = require('./Badge');

var _Badge2 = _interopRequireDefault(_Badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Badge', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_Badge2.default, null));
  });

  it('should add className to child', function () {
    var inherentClassName = 'rev-Badge';
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(_Badge2.default, { className: testClassName })).first().prop('className');

    expect(childClassName).to.contain(inherentClassName);
    expect(childClassName).to.contain(testClassName);
  });

  it('should accept a badge type prop', function () {
    var secondaryBadge = shallow(React.createElement(_Badge2.default, { secondary: true }));

    expect(secondaryBadge.prop('className')).to.contain('secondary');
  });
});
//# sourceMappingURL=Badge.test.js.map