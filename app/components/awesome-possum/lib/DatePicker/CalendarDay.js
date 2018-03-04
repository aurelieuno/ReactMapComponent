'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _configMapping = require('../Utilities/configMapping');

var _configMapping2 = _interopRequireDefault(_configMapping);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A className depending on whether the date is in the focused month or not.
 * @private
 * @param {DateTime} date - the date in question as a Luxon DateTime
 * @param {string} currentMonth the current month as a string formatted yyyy-MM
 * @returns {string} the className
 */
function calculateMonthClass(date, currentMonth) {
  var modifier = date.toFormat('yyyy-MM') == currentMonth ? 'thisMonth' : 'otherMonth';
  return 'rev-Calendar-body-bodyCell--' + modifier;
}

/**
 * A className depending on whether the date is selectable or not.
 * @private
 * @param {Function} isSelectable - a function which returns true id the date is
 *   selectable
 * @param {DateTime} date - a Luxon DateTime for the date in question
 * @param {string} selectedDate - an iso string of the selected date
 */
function calculateSelectionClass(isSelectable, date, selectedDate) {
  var selectable = isSelectable(date);
  if (!selectable) {
    return 'rev-Calendar-body-bodyCell--unselectable';
  } else if (selectedDate && date.toISODate() == selectedDate) {
    return 'rev-Calendar-body-bodyCell--selected';
  }
  return '';
}

/**
 * A className for a date depending on whether or not it is 'highlighted.'
 * @private
 * @param {DateTime} date - the date in question as a Luxon DateTime
 * @param {object|Array|Function} highlights a mapping between dates and
 *   highlight classes. If an array, gives a standard --highlighted modifier to
 *   a found date cell.
 */
function calculateHighlightClass(date, highlights) {
  return (0, _configMapping2.default)(highlights || {}, date, function (date) {
    return date.toISODate();
  }, 'rev-Calendar-body-bodyCell--highlighted') || '';
}

/**
 * Handles clicks onto the cell. If the cell is selectable, invoke the
 * dateChanger that was passed in. If not, do nothing.
 * @private
 * @param {Function} isSelectable returns true if the date is selectable
 * @param {DateTime} date the date in question
 * @param {Function} dateChanger the handler to invoke if the cell is selectable
 */
function dayClickHandler(isSelectable, date, dateChanger) {
  var selectable = isSelectable(date);
  if (selectable) {
    return function (_e) {
      return dateChanger(date.toISODate());
    };
  }
  return null;
}

/**
 * A single day of the calendar. It is a button which takes up the entire table
 * cell. It handles click events, and date dependent formatting (e.g. selected
 * date format, unselectable date format, highlighted date format, etc).
 * @param {object} props the props of the day component
 */
var CalendarDay = function CalendarDay(_ref) {
  var currentMonth = _ref.currentMonth,
      date = _ref.date,
      dateChanger = _ref.dateChanger,
      highlights = _ref.highlights,
      isSelectable = _ref.isSelectable,
      overrides = _ref.overrides,
      selectedDate = _ref.selectedDate,
      props = _objectWithoutProperties(_ref, ['currentMonth', 'date', 'dateChanger', 'highlights', 'isSelectable', 'overrides', 'selectedDate']);

  var monthClass = calculateMonthClass(date, currentMonth);
  var selectionClass = calculateSelectionClass(isSelectable, date, selectedDate);
  var highlightClass = calculateHighlightClass(date, highlights);
  var selectable = isSelectable(date);
  return _react2.default.createElement(
    'td',
    { className: 'rev-Calendar-body-bodyCell ' + monthClass + ' ' + selectionClass + ' ' + highlightClass },
    _react2.default.createElement(
      'button',
      _extends({}, props, {
        onClick: dayClickHandler(isSelectable, date, dateChanger),
        'aria-label': date.toLocaleString({
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        disabled: !selectable
      }),
      date.toLocaleString({ day: 'numeric' })
    )
  );
};

exports.default = CalendarDay;
//# sourceMappingURL=CalendarDay.js.map