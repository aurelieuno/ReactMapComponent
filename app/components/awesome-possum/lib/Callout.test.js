'use strict';

var _Callout = require('./Callout');

var _Callout2 = _interopRequireDefault(_Callout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Callout', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_Callout2.default, null));
  });

  it('should add className to child', function () {
    var inherentClassName = 'rev-Callout';
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(_Callout2.default, { className: testClassName })).first().prop('className');

    expect(childClassName).to.contain(inherentClassName);
    expect(childClassName).to.contain(testClassName);
  });

  it('handles type props', function () {
    var callout = shallow(React.createElement(_Callout2.default, { alert: true }));

    expect(callout.prop('className')).to.contain('alert');
  });
});
//# sourceMappingURL=Callout.test.js.map