'use strict';

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Modal', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(
      _Modal2.default,
      null,
      React.createElement(
        'h2',
        null,
        'Some Content'
      )
    ));
  });

  it('handles background clicks without onBackgroundClick prop', function () {
    var modal = shallow(React.createElement(
      _Modal2.default,
      { isOpen: true },
      React.createElement(
        'h2',
        null,
        'Some Content'
      )
    ));

    modal.prop('onBackgroundClick')();
    expect(modal.state('isOpen')).to.eq(false);
  });

  it('handles background clicks with onBackgroundClick prop', function () {
    var spy = _sinon2.default.spy();
    var modal = shallow(React.createElement(
      _Modal2.default,
      { isOpen: true, onBackgroundClick: spy },
      React.createElement(
        'h2',
        null,
        'Some Content'
      )
    ));

    modal.prop('onBackgroundClick')();

    expect(modal.state('isOpen')).to.eq(false);
    expect(spy.called).to.eq(true);
  });
});
//# sourceMappingURL=Modal.test.js.map