'use strict';

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Icon', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_Icon2.default, null));
  });

  it('should add className to child', function () {
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(_Icon2.default, { className: testClassName })).first().prop('className');

    expect(childClassName).to.contain(testClassName);
  });

  it('should warn if the icon prop is used', function () {
    var mock = _sinon2.default.mock(console).expects('warn').atLeast(1);
    shallow(React.createElement(_Icon2.default, { icon: 'home' }));
    mock.verify();
  });
});
//# sourceMappingURL=Icon.test.js.map