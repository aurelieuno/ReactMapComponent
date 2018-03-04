'use strict';

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Select', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_Select2.default, null));
  });

  it('should add className to child', function () {
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(_Select2.default, { className: testClassName })).first().prop('className');

    expect(childClassName).to.contain(testClassName);
  });

  it('handles options', function () {
    var OPTIONS = [{ label: 'North', value: 'N' }, { label: 'South', value: 'S' }, { label: 'East', value: 'E' }, { label: 'West', value: 'W' }];

    var select = shallow(React.createElement(_Select2.default, { options: OPTIONS }));

    expect(select.children()).to.have.length(OPTIONS.length);
  });
});

describe('Select.Stack', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_Select2.default.Stack, null));
  });

  it('should add className to child', function () {
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(_Select2.default.Stack, { className: testClassName })).first().prop('className');

    expect(childClassName).to.contain(testClassName);
  });
});
//# sourceMappingURL=Select.test.js.map