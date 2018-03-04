'use strict';

var _TopBar = require('./TopBar');

var _TopBar2 = _interopRequireDefault(_TopBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TopBar', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_TopBar2.default, null));
  });

  it('should add className to child', function () {
    var inherentClassName = 'rev-TopBar';
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(_TopBar2.default, { className: testClassName })).first().prop('className');

    expect(childClassName).to.contain(inherentClassName);
    expect(childClassName).to.contain(testClassName);
  });

  it('handles boolean styling props', function () {
    var topBar = shallow(React.createElement(_TopBar2.default, { breakpointMedium: true }));
    console.log(topBar.debug());
    expect(topBar.prop('className')).to.contain('rev-TopBar-breakpoint--mediumDown');
  });
});

describe('Topbar.Item', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_TopBar2.default.Item, null));
  });
});
//# sourceMappingURL=TopBar.test.js.map