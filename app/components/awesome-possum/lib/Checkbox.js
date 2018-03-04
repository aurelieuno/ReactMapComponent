'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _InputLabel = require('./InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _InputHelpText = require('./InputHelpText');

var _InputHelpText2 = _interopRequireDefault(_InputHelpText);

var _InputErrors = require('./InputErrors');

var _InputErrors2 = _interopRequireDefault(_InputErrors);

var _CheckableFieldset = require('./CheckableFieldset');

var _CheckableFieldset2 = _interopRequireDefault(_CheckableFieldset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BOOL_PROPS_TO_CLASS_NAMES = {
  stacked: ['rev-Checkbox--stacked'],
  stackedForSmall: ['rev-Checkbox--stackedForSmall'],
  stackedForMedium: ['rev-Checkbox--stackedForMedium']
};
var BOOL_PROPS = Object.keys(BOOL_PROPS_TO_CLASS_NAMES);

var Checkbox = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
  }

  _createClass(Checkbox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          error = _props.error,
          className = _props.className,
          label = _props.label,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['error', 'className', 'label', 'children']);

      // Start building the className


      var boolClassNames = [];
      BOOL_PROPS.forEach(function (name) {
        if (props[name]) {
          boolClassNames.push(BOOL_PROPS_TO_CLASS_NAMES[name]);
        }
        delete props[name];
      });

      var labelClassName = (0, _classnames2.default)(className, 'rev-Checkbox', boolClassNames, {
        'is-invalid': !!error
      });

      var inputClassName = (0, _classnames2.default)('rev-Checkbox-input', {
        'is-invalid-input': !!error,
        'is-invalid': !!error
      });

      return _react2.default.createElement(
        _InputLabel2.default,
        { className: labelClassName, error: error },
        _react2.default.createElement('input', _extends({}, props, { className: inputClassName, type: 'checkbox' })),
        _react2.default.createElement(
          'span',
          { className: 'rev-Checkbox-label' },
          label
        )
      );
    }
  }]);

  return Checkbox;
}(_react.Component);

exports.default = Checkbox;

var CheckboxFieldset = function (_Component2) {
  _inherits(CheckboxFieldset, _Component2);

  function CheckboxFieldset() {
    _classCallCheck(this, CheckboxFieldset);

    return _possibleConstructorReturn(this, (CheckboxFieldset.__proto__ || Object.getPrototypeOf(CheckboxFieldset)).apply(this, arguments));
  }

  _createClass(CheckboxFieldset, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          options = _props2.options,
          name = _props2.name,
          value = _props2.value,
          defaultValue = _props2.defaultValue,
          label = _props2.label,
          help = _props2.help,
          error = _props2.error,
          onChange = _props2.onChange,
          readOnly = _props2.readOnly,
          rest = _objectWithoutProperties(_props2, ['className', 'options', 'name', 'value', 'defaultValue', 'label', 'help', 'error', 'onChange', 'readOnly']);

      var isControlled = value != null;
      var hasDefault = defaultValue != null;

      var valueArray = value || [];
      var defaultValueArray = defaultValue || [];

      var valueLookup = {};
      var defaultValueLookup = {};

      valueArray.forEach(function (val) {
        return valueLookup[val] = true;
      });
      defaultValueArray.forEach(function (val) {
        return defaultValueLookup[val] = true;
      });

      var checkboxes = options.map(function (option) {
        var props = {
          name: name,
          error: error,
          onChange: onChange,
          readOnly: readOnly,
          label: option.label,
          key: option.key || option.value,
          disabled: option.disabled
        };
        if (isControlled) {
          props.value = option.value;
          props.checked = !!valueLookup[option.value];
        }
        if (hasDefault) {
          props.defaultValue = option.value;
          props.defaultChecked = !!defaultValueLookup[option.value];
        }
        return _react2.default.createElement(Checkbox, _extends({ className: 'rev-CheckboxFieldset-checkbox' }, props));
      });

      var fieldsetClassName = (0, _classnames2.default)(className, 'rev-CheckboxFieldset');

      return _react2.default.createElement(
        _CheckableFieldset2.default,
        _extends({}, rest, {
          className: fieldsetClassName,
          help: help,
          error: error,
          label: label
        }),
        checkboxes
      );
    }
  }]);

  return CheckboxFieldset;
}(_react.Component);

Checkbox.Fieldset = CheckboxFieldset;
//# sourceMappingURL=Checkbox.js.map