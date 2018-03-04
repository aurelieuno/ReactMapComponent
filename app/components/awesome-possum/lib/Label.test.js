'use strict';

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Label', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_Label2.default, null));
  });

  it('should add className to child', function () {
    var inherentClassName = 'label';
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(_Label2.default, { className: testClassName })).first().prop('className');

    expect(childClassName).to.contain(inherentClassName);
    expect(childClassName).to.contain(testClassName);
  });

  it('it handles boolean type props', function () {
    var label = shallow(React.createElement(_Label2.default, { secondary: true }));

    expect(label.prop('className')).to.contain('secondary');
  });
});
//# sourceMappingURL=Label.test.js.map