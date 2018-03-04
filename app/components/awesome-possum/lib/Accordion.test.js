'use strict';

var _Accordion = require('./Accordion');

var _Accordion2 = _interopRequireDefault(_Accordion);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Accordion', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(
      _Accordion2.default,
      null,
      React.createElement(_Accordion2.default.Item, { contentKey: 1, title: 'One' })
    ));
  });

  it('should add className to child', function () {
    var inherentClassName = 'rev-Accordion';
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(
      _Accordion2.default,
      { className: testClassName },
      React.createElement(_Accordion2.default.Item, { contentKey: 1, title: 'One' })
    )).first().prop('className');

    expect(childClassName).to.contain(inherentClassName);
    expect(childClassName).to.contain(testClassName);
  });

  it('should handle single active items', function () {
    var childProp = shallow(React.createElement(
      _Accordion2.default,
      { active: 1 },
      React.createElement(_Accordion2.default.Item, { contentKey: 1, title: 'One' })
    )).children().first().prop('active');

    expect(childProp).to.eq(true);
  });

  it('should handle multiple active items (with array)', function () {
    shallow(React.createElement(
      _Accordion2.default,
      { active: [1, 2] },
      React.createElement(_Accordion2.default.Item, { contentKey: 1, title: 'One' }),
      React.createElement(_Accordion2.default.Item, { contentKey: 2, title: 'Two' })
    )).children().forEach(function (item) {
      var childProp = item.prop('active');

      expect(childProp).to.eq(true);
    });
  });

  it('should handle multiple active items (with an object)', function () {
    var component = mount(React.createElement(
      _Accordion2.default,
      { active: { 1: true, 2: true } },
      React.createElement(
        _Accordion2.default.Item,
        { contentKey: 1, title: 'One' },
        'first'
      ),
      React.createElement(
        _Accordion2.default.Item,
        { contentKey: 2, title: 'Two' },
        'second'
      )
    ));

    expect(component.text()).to.include('first');
    expect(component.text()).to.include('second');
  });
});

describe('Accordion.Stateful', function () {
  it('should render without throwing', function () {
    var component = mount(React.createElement(
      _Accordion2.default.Stateful,
      null,
      React.createElement(_Accordion2.default.Item, { contentKey: 1, title: 'One' })
    ));
    var instance = component.instance();
    instance.toggleActiveStatus(1);
    instance.setExclusivelyActive(1);
    instance.toggleActiveStatus(1);
    instance.toggleActiveStatus(1);
    instance.toggleActiveStatus(1);
    instance.setExclusivelyActive(1);
    instance.setExclusivelyActive(1);
  });

  it('can handle clicks', function () {
    var spy = _sinon2.default.spy();
    var component = mount(React.createElement(
      _Accordion2.default.Stateful,
      null,
      React.createElement(_Accordion2.default.Item, { contentKey: 1, title: 'One', onClick: spy })
    ));
    var child = component.find(_Accordion2.default.Item).instance();
    var fakeEvent = { preventDefault: function preventDefault() {
        return null;
      } };
    child.props.onClick(fakeEvent);

    expect(component.update().state('active')['1']).to.eq(true);
    expect(spy.called).to.eq(true);
  });
});
//# sourceMappingURL=Accordion.test.js.map