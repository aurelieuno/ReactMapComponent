'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Card = require('../Card');

var _Card2 = _interopRequireDefault(_Card);

var _luxon = require('luxon');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CalendarHeaderRow = require('./CalendarHeaderRow');

var _CalendarHeaderRow2 = _interopRequireDefault(_CalendarHeaderRow);

var _CalendarWeekRow = require('./CalendarWeekRow');

var _CalendarWeekRow2 = _interopRequireDefault(_CalendarWeekRow);

var _createElementWithOverride = require('../Utilities/createElementWithOverride');

var _createElementWithOverride2 = _interopRequireDefault(_createElementWithOverride);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** @jsx createElement */

/**
 * A component representing a Calendar for a given focus month (& including the
 * leading days of the first week and trailing days of the last week).
 */
var Calendar = function (_React$Component) {
  _inherits(Calendar, _React$Component);

  _createClass(Calendar, null, [{
    key: 'defaultProps',

    /**
     * The default values for props of this component
     * @return {object} the default value object
     */
    get: function get() {
      var createElement = _react2.default.createElement;

      return {
        nextLabel: createElement(
          'span',
          null,
          '\u203A'
        ),
        previousLabel: createElement(
          'span',
          null,
          '\u2039'
        ),
        dateChanger: function dateChanger() {
          return null;
        },
        focuser: function focuser() {
          return null;
        },
        isSelectable: function isSelectable() {
          return true;
        }
      };
    }

    /**
     * Creates a Calendar. Sets state.date to a Luxon DateTime based on the
     * selectedDate prop.
     * @param {*} props
     */

  }]);

  function Calendar(props) {
    _classCallCheck(this, Calendar);

    var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

    _this.state = {
      date: _this.asLuxon(_this.props.selectedDate)
    };
    return _this;
  }

  /**
   * Update state when props change. In particular, if we receive a different
   * `selectedDate` prop from up the hierarchy, set state.date to a new Luxon
   * DateTime appropriately (in order to force the calendar to focus on the new
   * date).
   * @param {*} nextProps
   */


  _createClass(Calendar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.selectedDate != this.props.selectedDate) {
        this.setState({ date: this.asLuxon(nextProps.selectedDate) });
      }
    }

    /**
     * Convert an iso date string to a Luxon DateTime. If iso date is blank / null,
     * or invalid (e.g. 2018-06-66), return the local current date instead.
     * @param {string} date - the date to convert, as either an iso date, or a
     *   blank / null
     */

  }, {
    key: 'asLuxon',
    value: function asLuxon(date) {
      if (!date) {
        return _luxon.DateTime.local();
      }

      var luxon = _luxon.DateTime.fromISO(date);
      if (luxon.invalid) {
        return _luxon.DateTime.local();
      }
      return luxon;
    }

    /**
     * The start of the month of that the current focus date is in (e.g. if the
     * input is filled with 2018-08-05 then this value is 2018-08-1).
     * @returns {DateTime} - a Luxon DateTime represented the first day of the
     *   month in question.
     */

  }, {
    key: 'startOfMonth',
    value: function startOfMonth() {
      return this.state.date.startOf('month');
    }

    /**
     * Returns the nearest Sunday falling on or before the start of the month.
     * This is the first day of the first row of the calendar display. Note that
     * this date is either equal to startOfMonth (if the month starts on a Sunday)
     * or in the previous month (if the month starts on a different day of the
     * week).
     * @returns {DateTime} - a Luxon DateTime representing the Sunday when the first
     *   week of the focus month starts.
     */

  }, {
    key: 'startOfWeekOfStartOfMonth',
    value: function startOfWeekOfStartOfMonth() {
      var weekday = this.startOfMonth().weekday % 7;
      return this.startOfMonth().minus(_luxon.Duration.fromObject({ days: weekday }));
    }

    /**
     * Move the focus month up n months (or back |n| months if n is negative).
     * It moves it to n months from startOfMonth to handle advancing between
     * months with different numbers of days (2018-01-31 + 1 month in Luxon =
     * 2018-03-03). We actually want Jan -> Feb -> Mar which only works if we do
     * (2018-01-31).startOfMonth() + 1month = 2018-02-01.
     *
     * This function does not change the date in the input (only calendar display,
     * so we can get away with using the first of the month like this.
     * @param {int} n
     * @param {Event} event - the event that caused this handler to be invoked
     *   (e.g. the click event from the next or previous button on the calendar)
     */

  }, {
    key: 'addMonth',
    value: function addMonth(n, event) {
      event.preventDefault();
      this.setState({
        date: this.startOfMonth().plus(_luxon.Duration.fromObject({ month: n }))
      });
      if (this.props.focuser) {
        this.props.focuser();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          week = _props.week,
          overrides = _props.overrides,
          day = _props.day,
          focuser = _props.focuser,
          headerDay = _props.headerDay,
          isSelectable = _props.isSelectable,
          dateChanger = _props.dateChanger,
          selectedDate = _props.selectedDate,
          highlights = _props.highlights,
          nextLabel = _props.nextLabel,
          previousLabel = _props.previousLabel,
          overlay = _props.overlay,
          props = _objectWithoutProperties(_props, ['className', 'week', 'overrides', 'day', 'focuser', 'headerDay', 'isSelectable', 'dateChanger', 'selectedDate', 'highlights', 'nextLabel', 'previousLabel', 'overlay']);

      var createElement = _createElementWithOverride2.default.bind(this, overrides);

      return createElement(
        'div',
        _extends({}, props, { className: 'rev-Calendar ' + (overlay ? 'rev-Calendar--overlay' : '') + ' ' + className }),
        createElement(
          _Card2.default,
          null,
          createElement(
            _Card2.default.Header,
            { className: 'rev-Calendar-header' },
            createElement(
              'button',
              {
                onClick: this.addMonth.bind(this, -1),
                className: 'rev-Calendar-header-button rev-Calendar-header-button--previous',
                'aria-label': 'Previous Month'
              },
              previousLabel
            ),
            createElement(
              'span',
              { className: 'rev-Calendar-header-label' },
              this.state.date.toLocaleString({
                month: 'short',
                year: 'numeric'
              })
            ),
            createElement(
              'button',
              {
                onClick: this.addMonth.bind(this, 1),
                className: 'rev-Calendar-header-button rev-Calendar-header-button--next',
                'aria-label': 'Next Month'
              },
              nextLabel
            )
          ),
          createElement(
            'table',
            { className: 'rev-Calendar-body' },
            createElement(_CalendarHeaderRow2.default, {
              firstDay: this.startOfWeekOfStartOfMonth(),
              overrides: overrides,
              headerDay: headerDay
            }),
            createElement(
              'tbody',
              null,
              [0, 7, 14, 21, 28].map(function (i) {
                return createElement(_CalendarWeekRow2.default, _extends({}, week, {
                  day: day,
                  firstDay: _this2.startOfWeekOfStartOfMonth().plus({ days: i }),
                  currentMonth: _this2.state.date.toFormat('yyyy-MM'),
                  isSelectable: isSelectable,
                  dateChanger: dateChanger,
                  selectedDate: selectedDate,
                  highlights: highlights,
                  key: i
                }));
              })
            )
          )
        )
      );
    }
  }]);

  return Calendar;
}(_react2.default.Component);

exports.default = Calendar;
//# sourceMappingURL=Calendar.js.map