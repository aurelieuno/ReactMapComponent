'use strict';

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Button', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_Button2.default, null));
  });

  it('should add className to child', function () {
    var inherentClassName = 'rev-Button';
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(_Button2.default, { className: testClassName })).first().prop('className');

    expect(childClassName).to.contain(inherentClassName);
    expect(childClassName).to.contain(testClassName);
  });

  it('should handle props for different button types', function () {
    var button = shallow(React.createElement(_Button2.default, { secondary: true }));

    expect(button.first().prop('className')).to.contain('secondary');
  });
});
//# sourceMappingURL=Button.test.js.map