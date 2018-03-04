'use strict';

var _Tabs = require('./Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Tabs', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(
      _Tabs2.default,
      null,
      React.createElement(_Tabs2.default.Item, { contentKey: 1, title: 'One' })
    ));
  });

  it('should add className to child', function () {
    var inherentClassName = 'rev-Tabs';
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(
      _Tabs2.default,
      { className: testClassName },
      React.createElement(_Tabs2.default.Item, { contentKey: 1, title: 'One' })
    )).first().prop('className');

    expect(childClassName).to.contain(inherentClassName);
    expect(childClassName).to.contain(testClassName);
  });
});

describe('StatefulTabs', function () {
  it('should render without throwing (default active case)', function () {
    mount(React.createElement(
      _Tabs2.default.Stateful,
      { defaultActive: 1 },
      React.createElement(_Tabs2.default.Item, { contentKey: 1, title: 'One', renderTitle: true })
    ));
  });

  it('should render without throwing (wihtout default active case)', function () {
    mount(React.createElement(
      _Tabs2.default.Stateful,
      null,
      React.createElement(_Tabs2.default.Item, { contentKey: 1, title: 'One', renderTitle: true })
    ));
  });

  it('should handle clicks on child components', function () {
    var spy = _sinon2.default.spy();
    var stateful = shallow(React.createElement(
      _Tabs2.default.Stateful,
      { defaultActive: 1 },
      React.createElement('div', { className: 'StatefulTabExample', onClick: spy })
    ));

    stateful.find('.StatefulTabExample').simulate('click', { preventDefault: function preventDefault() {} });

    expect(spy.called).to.eq(true);
  });
});

describe('Tabs.Item', function () {
  it('can render without error (title case)', function () {
    mount(React.createElement(_Tabs2.default.Item, { contentKey: 1, title: 'One', renderTitle: true }));
  });
});

describe('Tabs.Panel', function () {
  it('can render without error (panel case, active)', function () {
    mount(React.createElement(_Tabs2.default.Item, { contentKey: 1, title: 'One', active: true }));
  });

  it('can render without error (panel case, inactive)', function () {
    mount(React.createElement(_Tabs2.default.Item, { contentKey: 1, title: 'One' }));
  });
});
//# sourceMappingURL=Tabs.test.js.map