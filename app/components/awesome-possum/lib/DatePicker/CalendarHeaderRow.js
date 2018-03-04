'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /** @jsx createElement */


var _luxon = require('luxon');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createElementWithOverride = require('../Utilities/createElementWithOverride');

var _createElementWithOverride2 = _interopRequireDefault(_createElementWithOverride);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A component which is the day labels at the top of the calendar e.g. S, M, T,
 * W, Th, F, S. Note that we create these letter labels in a slightly complex way
 * using Luxon, because while we don't currently support different start-of-week
 * days (we always use Sunday), we might in the future. This setup allows us to
 * do that by passing a different .firstDay prop.
 */
var CalendarHeaderRow = function CalendarHeaderRow(props) {
  var createElement = _createElementWithOverride2.default.bind(undefined, props.overrides);

  return createElement(
    'thead',
    null,
    createElement(
      'tr',
      null,
      [0, 1, 2, 3, 4, 5, 6].map(function (i) {
        return createElement(
          'th',
          _extends({}, props.headerDay, {
            className: 'rev-Calendar-body-headerCell',
            key: props.firstDay.toISO() + ':' + i
          }),
          props.firstDay.plus(_luxon.Duration.fromObject({ days: i })).toLocaleString({ weekday: 'narrow' })
        );
      })
    )
  );
};

exports.default = CalendarHeaderRow;
//# sourceMappingURL=CalendarHeaderRow.js.map