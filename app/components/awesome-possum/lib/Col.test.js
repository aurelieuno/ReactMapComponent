'use strict';

var _Col = require('./Col');

var _Col2 = _interopRequireDefault(_Col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('Col', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_Col2.default, null));
  });

  it('should add className to child', function () {
    var inherentClassName = 'columns';
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(_Col2.default, { className: testClassName })).first().prop('className');

    expect(childClassName).to.contain(inherentClassName);
    expect(childClassName).to.contain(testClassName);
  });

  it('handles column number props', function () {
    var propToClass = {
      small: 'small',
      medium: 'medium',
      large: 'large',
      smallOffset: 'small-offset',
      mediumOffset: 'medium-offset',
      largeOffset: 'large-offset',
      smallPush: 'small-push',
      mediumPush: 'medium-push',
      largePush: 'large-push',
      smallPull: 'small-pull',
      mediumPull: 'medium-pull',
      largePull: 'large-pull',
      smallOrder: 'small-order',
      mediumOrder: 'medium-order',
      largeOrder: 'large-order'
    };

    for (var key in propToClass) {
      var value = propToClass[key];
      var props = _defineProperty({}, key, 1);
      var col = shallow(React.createElement(_Col2.default, props));
      expect(col.prop('className')).to.contain(value);
    }
  });

  it('handles boolean props', function () {
    var col = shallow(React.createElement(_Col2.default, { smallCentered: true }));
    expect(col.prop('className')).to.contain('small-centered');
  });
});
//# sourceMappingURL=Col.test.js.map