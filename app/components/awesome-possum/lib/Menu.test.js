'use strict';

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Menu', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_Menu2.default, null));
  });

  it('should add className to child', function () {
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(_Menu2.default, { className: testClassName })).first().prop('className');

    expect(childClassName).to.contain(testClassName);
  });
});

describe('Menu.Item', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_Menu2.default, null));
  });

  it('should add className to child', function () {
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(_Menu2.default.Item, { className: testClassName })).first().prop('className');

    expect(childClassName).to.contain(testClassName);
  });
});
//# sourceMappingURL=Menu.test.js.map