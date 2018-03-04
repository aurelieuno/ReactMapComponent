'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

var _createElementWithOverride = require('../Utilities/createElementWithOverride');

var _createElementWithOverride2 = _interopRequireDefault(_createElementWithOverride);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /** @jsx createElement */

/**
 * A component which contains the input(s) for a DatePicker. If the DatePicker
 * is a true type="date" input, and we aren't overriding the default format,
 * there will be one input here-- the input[type="date"]. If the browser has bad
 * type="date" support, or we chosen a custom date format, there will be two
 * inputs. One is a visible text input where the user types / calendar sets
 * local formatted date values (e.g. 03/12/2018). The other will be a hidden
 * input which carries the iso date value that a true date field would output.
 * Only the hidden field in this case has a name= attribute, and so it is the
 * only value submitted. This allows the server to expect the same format from
 * the client, whether date inputs are well supported on the client or not.
 * @param {object} props - the props of the DateInputBlock
 */
var DateInputBlock = function DateInputBlock(_ref) {
  var error = _ref.error,
      className = _ref.className,
      goodDateInput = _ref.goodDateInput,
      generation = _ref.generation,
      overrides = _ref.overrides,
      dateFormat = _ref.dateFormat,
      isoValue = _ref.isoValue,
      formattedValue = _ref.formattedValue,
      name = _ref.name,
      props = _objectWithoutProperties(_ref, ['error', 'className', 'goodDateInput', 'generation', 'overrides', 'dateFormat', 'isoValue', 'formattedValue', 'name']);

  var createElement = _createElementWithOverride2.default.bind(undefined, overrides);
  var inputClassName = (0, _classnames2.default)(className, 'rev-DatePicker-input', {
    'is-invalid-input': !!error,
    'is-invalid': !!error
  });

  return createElement(
    'div',
    null,
    createElement(_Input2.default, _extends({}, props, {
      className: inputClassName,
      type: goodDateInput ? 'date' : 'text',
      name: goodDateInput ? name : null,
      defaultValue: formattedValue
    })),
    goodDateInput ? null : createElement(_Input2.default, {
      type: 'hidden',
      name: name,
      key: generation + ':trueInput',
      value: isoValue || '',
      readOnly: true
    })
  );
};

exports.default = DateInputBlock;
//# sourceMappingURL=DateInputBlock.js.map