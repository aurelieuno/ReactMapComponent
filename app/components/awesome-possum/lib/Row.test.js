'use strict';

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('Row', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_Row2.default, null));
  });

  it('should add className to child', function () {
    var inherentClassName = 'rev-Row';
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(_Row2.default, { className: testClassName })).first().prop('className');

    expect(childClassName).to.contain(inherentClassName);
    expect(childClassName).to.contain(testClassName);
  });

  it('handles numerical props', function () {
    var cases = {
      /* prop: classPattern */
      smallUp: 'rev-Row--smallUp1',
      mediumUp: 'rev-Row--mediumUp1',
      largeUp: 'rev-Row--largeUp1'
    };

    for (var propName in cases) {
      var classPattern = cases[propName];
      var component = shallow(React.createElement(_Row2.default, _defineProperty({}, propName, 1)));

      expect(component.prop('className')).to.contain(classPattern);
    }
  });

  it('handles boolean props', function () {
    var component = shallow(React.createElement(_Row2.default, { collapse: true }));

    expect(component.prop('className')).to.contain('collapse');
  });
});
//# sourceMappingURL=Row.test.js.map