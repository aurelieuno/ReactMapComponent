'use strict';

var _FileInput = require('./FileInput');

var _FileInput2 = _interopRequireDefault(_FileInput);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('FileInput', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_FileInput2.default, null));
  });

  it('should add className to child', function () {
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(_FileInput2.default, { className: testClassName })).first().prop('className');

    expect(childClassName).to.contain(testClassName);
  });

  it('can handle changes with onChange handler', function () {
    var spy = _sinon2.default.spy();
    var input = mount(React.createElement(_FileInput2.default, { onChange: spy }));

    input.find('input').simulate('change', { currentTarget: { value: 'C:\\fakepath\\snack-falcon.jpg' } });

    expect(spy.called).to.eq(true);
  });

  it('can handle changes with onChange handler', function () {
    var input = mount(React.createElement(_FileInput2.default, null));

    input.find('input').simulate('change', { currentTarget: { value: 'C:\\fakepath\\snack-falcon.jpg' } });
  });
});

describe('FileInput.Stack', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_FileInput2.default.Stack, null));
  });

  it('should add className to child', function () {
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(_FileInput2.default.Stack, { className: testClassName })).first().prop('className');

    expect(childClassName).to.contain(testClassName);
  });
});
//# sourceMappingURL=FileInput.test.js.map