'use strict';

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Form', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_Form2.default, null));
  });

  it('should add className to child', function () {
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(_Form2.default, { className: testClassName })).first().prop('className');

    expect(childClassName).to.contain(testClassName);
  });
});
//# sourceMappingURL=Form.test.js.map