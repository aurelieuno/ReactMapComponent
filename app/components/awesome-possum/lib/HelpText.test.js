'use strict';

var _HelpText = require('./HelpText');

var _HelpText2 = _interopRequireDefault(_HelpText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('HelpText', function () {
  it('can shallow render', function () {
    expect(function () {
      return shallow(React.createElement(
        _HelpText2.default,
        null,
        'test'
      ));
    }).not.to.throw();
  });

  it('returns children when present', function () {
    var component = shallow(React.createElement(
      _HelpText2.default,
      null,
      React.createElement(
        'span',
        null,
        'test'
      )
    ));

    expect(component.find('span')).to.have.length(1);
  });

  it('returns text when present', function () {
    var component = shallow(React.createElement(
      _HelpText2.default,
      null,
      'test'
    ));

    expect(component.find('small')).to.have.length(1);
    expect(component.find('small').text()).to.contain('test');
  });
});
//# sourceMappingURL=HelpText.test.js.map