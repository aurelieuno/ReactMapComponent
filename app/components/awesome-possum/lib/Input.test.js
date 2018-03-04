'use strict';

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Input', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_Input2.default, null));
  });

  it('should add className to child', function () {
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(_Input2.default, { className: testClassName })).first().prop('className');

    expect(childClassName).to.contain(testClassName);
  });
});

describe('Input.Stack', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_Input2.default.Stack, null));
  });

  it('should add className to child', function () {
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(_Input2.default.Stack, { className: testClassName })).first().prop('className');

    expect(childClassName).to.contain(testClassName);
  });
});
//# sourceMappingURL=Input.test.js.map