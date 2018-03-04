'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _luxon = require('luxon');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createElementWithOverride = require('../Utilities/createElementWithOverride');

var _createElementWithOverride2 = _interopRequireDefault(_createElementWithOverride);

var _CalendarDay = require('./CalendarDay');

var _CalendarDay2 = _interopRequireDefault(_CalendarDay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /** @jsx createElement */


/**
 * Component representing one week of the calendar. It starts at props.firstDay
 * and loops through the seven days of the week, creating seven `CalendarDay`s.
 */
var CalendarWeekRow = function CalendarWeekRow(props) {
  var currentMonth = props.currentMonth,
      dateChanger = props.dateChanger,
      day = props.day,
      highlights = props.highlights,
      isSelectable = props.isSelectable,
      overrides = props.overrides,
      selectedDate = props.selectedDate,
      week = props.week,
      firstDay = props.firstDay,
      rowProps = _objectWithoutProperties(props, ['currentMonth', 'dateChanger', 'day', 'highlights', 'isSelectable', 'overrides', 'selectedDate', 'week', 'firstDay']);

  var createElement = _createElementWithOverride2.default.bind(undefined, props.overrides);

  return createElement(
    'tr',
    rowProps,
    [0, 1, 2, 3, 4, 5, 6].map(function (i) {
      var date = props.firstDay.plus(_luxon.Duration.fromObject({ days: i }));

      return createElement(_CalendarDay2.default, _extends({
        currentMonth: currentMonth,
        dateChanger: dateChanger,
        highlights: highlights,
        isSelectable: isSelectable,
        overrides: overrides,
        selectedDate: selectedDate
      }, day, {
        date: date,
        key: date.toISO()
      }));
    })
  );
};

exports.default = CalendarWeekRow;
//# sourceMappingURL=CalendarWeekRow.js.map