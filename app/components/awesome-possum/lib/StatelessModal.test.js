'use strict';

var _StatelessModal = require('./StatelessModal');

var _StatelessModal2 = _interopRequireDefault(_StatelessModal);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('StatelessModal', function () {
  it('can render without error when closed', function () {
    shallow(React.createElement(
      _StatelessModal2.default,
      null,
      React.createElement(
        'div',
        null,
        'Hello'
      )
    ));
  });

  it('can render without error when open', function () {
    shallow(React.createElement(
      _StatelessModal2.default,
      { isOpen: true },
      React.createElement(
        'div',
        null,
        'Hello'
      )
    ));
  });

  it('handles background clicks', function () {
    var spy = _sinon2.default.spy();
    var modal = shallow(React.createElement(
      _StatelessModal2.default,
      { isOpen: true, onBackgroundClick: spy },
      React.createElement(
        'div',
        null,
        'Hello'
      )
    ));

    modal.find('.rev-Modal-background').simulate('click');

    expect(spy.called).to.eq(true);
  });
});
//# sourceMappingURL=StatelessModal.test.js.map