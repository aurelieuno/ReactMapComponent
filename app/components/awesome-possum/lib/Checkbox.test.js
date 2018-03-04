'use strict';

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Checkbox', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_Checkbox2.default, null));
  });

  it('should add className to child', function () {
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(_Checkbox2.default, { className: testClassName })).first().prop('className');

    expect(childClassName).to.contain(testClassName);
  });
});

describe('Checkbox.Fieldset', function () {
  var options = [{ label: 'Left', value: 'L' }, { label: 'Right', value: 'R' }];

  it('should render without throwing', function () {
    shallow(React.createElement(_Checkbox2.default.Fieldset, { options: options }));
  });

  it('should add className to child', function () {
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(_Checkbox2.default.Fieldset, { className: testClassName, options: options })).first().prop('className');

    expect(childClassName).to.contain(testClassName);
  });

  it('handles the controlled case', function () {
    var fieldset = shallow(React.createElement(_Checkbox2.default.Fieldset, { options: options, value: ["L"] }));

    expect(fieldset.children().first().prop('checked')).to.eq(true);
  });

  it('handles default values', function () {
    var fieldset = shallow(React.createElement(_Checkbox2.default.Fieldset, { options: options, defaultValue: ["L"] }));

    expect(fieldset.children().first().prop('defaultChecked')).to.eq(true);
  });
});
//# sourceMappingURL=Checkbox.test.js.map