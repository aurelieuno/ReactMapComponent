'use strict';

var _Textarea = require('./Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Textarea', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_Textarea2.default, null));
  });

  it('should add className to child', function () {
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(_Textarea2.default, { className: testClassName })).first().prop('className');

    expect(childClassName).to.contain(testClassName);
  });
});

describe('Textarea.Stack', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_Textarea2.default.Stack, null));
  });

  it('should add className to child', function () {
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(_Textarea2.default.Stack, { className: testClassName })).first().prop('className');

    expect(childClassName).to.contain(testClassName);
  });
});
//# sourceMappingURL=Textarea.test.js.map