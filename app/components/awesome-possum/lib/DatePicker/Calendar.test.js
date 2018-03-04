'use strict';

var _Calendar = require('./Calendar');

var _Calendar2 = _interopRequireDefault(_Calendar);

var _luxon = require('luxon');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Calendar', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_Calendar2.default, null));
  });

  it('defaults to today', function () {
    var calendar = shallow(React.createElement(_Calendar2.default, null));
    var monthString = _luxon.DateTime.local().toLocaleString({
      month: 'short',
      year: 'numeric'
    });

    expect(calendar.find('.rev-Calendar-header-label').text()).to.contain(monthString);
  });

  it('treats invalid dates as today', function () {
    var calendar = shallow(React.createElement(_Calendar2.default, { selectedDate: '-05-17' }));
    var monthString = _luxon.DateTime.local().toLocaleString({
      month: 'short',
      year: 'numeric'
    });

    expect(calendar.find('.rev-Calendar-header-label').text()).to.contain(monthString);
  });

  it('can advance a month backward', function () {
    var calendar = shallow(React.createElement(_Calendar2.default, null));
    calendar.find('.rev-Calendar-header-button--previous').simulate('click', { preventDefault: function preventDefault() {
        return null;
      } });
    var monthString = _luxon.DateTime.local().minus(_luxon.Duration.fromObject({ month: 1 })).toLocaleString({ month: 'short', year: 'numeric' });

    expect(calendar.find('.rev-Calendar-header-label').text()).to.contain(monthString);
  });

  it('can advance a month forward', function () {
    var calendar = shallow(React.createElement(_Calendar2.default, null));
    calendar.find('.rev-Calendar-header-button--next').simulate('click', { preventDefault: function preventDefault() {
        return null;
      } });
    var monthString = _luxon.DateTime.local().startOf('month').plus(_luxon.Duration.fromObject({ month: 1 })).toLocaleString({ month: 'short', year: 'numeric' });

    expect(calendar.find('.rev-Calendar-header-label').text()).to.contain(monthString);
  });
});
//# sourceMappingURL=Calendar.test.js.map