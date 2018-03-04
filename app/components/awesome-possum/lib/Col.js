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

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BOOL_PROPS_TO_CLASS_NAMES = {
  smallCentered: ['small-centered', 'rev-Col--smallCentered'],
  mediumCentered: ['medium-centered', 'rev-Col--mediumCentered'],
  largeCentered: ['large-centered', 'rev-Col--largeCentered'],

  smallUncentered: ['small-uncentered', 'rev-Col--smallUncentered'],
  mediumUncentered: ['medium-uncentered', 'rev-Col--mediumUncentered'],
  largeUncentered: ['large-uncentered', 'rev-Col--largeUncentered'],

  mediumExpand: ['medium-expand', 'rev-Col--mediumExpand'],
  largeExpand: ['large-expand', 'rev-Col--largeExpand'],

  end: ['end', 'rev-Col--end'],

  expanded: ['expanded', 'rev-Col--expanded'],

  shrink: ['shrink', 'rev-Col--shrink'],

  left: ['align-self-left', 'rev-Col--left'],
  right: ['align-self-right', 'rev-Col--right'],
  center: ['align-self-center', 'rev-Col--center'],
  justify: ['align-self-justify', 'rev-Col--justify'],
  spaced: ['align-self-spaced', 'rev-Col--spaced'],
  top: ['align-self-top', 'rev-Col--top'],
  middle: ['align-self-middle', 'rev-Col--middle'],
  bottom: ['align-self-bottom', 'rev-Col--bottom'],
  stretch: ['align-self-stretch', 'rev-Col--stretch']
};

var BOOL_PROPS = Object.keys(BOOL_PROPS_TO_CLASS_NAMES);

var NUMBER_PROPS_TO_CLASS_NAMES = {
  small: function small(x) {
    return ['small-' + x, 'rev-Col--small' + x];
  },
  medium: function medium(x) {
    return ['medium-' + x, 'rev-Col--medium' + x];
  },
  large: function large(x) {
    return ['large-' + x, 'rev-Col--large' + x];
  },
  xlarge: function xlarge(x) {
    return ['xlarge-' + x, 'rev-Col--xlarge' + x];
  },
  xxlarge: function xxlarge(x) {
    return ['xxlarge-' + x, 'rev-Col--xxlarge' + x];
  },

  smallOffset: function smallOffset(x) {
    return ['small-offset-' + x, 'rev-Col--smallOffset' + x];
  },
  mediumOffset: function mediumOffset(x) {
    return ['medium-offset-' + x, 'rev-Col--mediumOffset' + x];
  },
  largeOffset: function largeOffset(x) {
    return ['large-offset-' + x, 'rev-Col--largeOffset' + x];
  },

  smallPush: function smallPush(x) {
    return ['small-push-' + x, 'rev-Col--smallPush' + x];
  },
  mediumPush: function mediumPush(x) {
    return ['medium-push-' + x, 'rev-Col--mediumPush' + x];
  },
  largePush: function largePush(x) {
    return ['large-push-' + x, 'rev-Col--largePush' + x];
  },

  smallPull: function smallPull(x) {
    return ['small-pull-' + x, 'rev-Col--smallPull' + x];
  },
  mediumPull: function mediumPull(x) {
    return ['medium-pull-' + x, 'rev-Col--mediumPull' + x];
  },
  largePull: function largePull(x) {
    return ['large-pull-' + x, 'rev-Col--largePull' + x];
  },

  smallOrder: function smallOrder(x) {
    return ['small-order-' + x, 'rev-Col--smallOrder' + x];
  },
  mediumOrder: function mediumOrder(x) {
    return ['medium-order-' + x, 'rev-Col--mediumOrder' + x];
  },
  largeOrder: function largeOrder(x) {
    return ['large-order-' + x, 'rev-Col--largeOrder' + x];
  }
};

var NUMBER_PROPS = Object.keys(NUMBER_PROPS_TO_CLASS_NAMES);

var Col = function (_Component) {
  _inherits(Col, _Component);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
  }

  _createClass(Col, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          props = _objectWithoutProperties(_props, ['children', 'className']);

      var boolClassNames = [];
      BOOL_PROPS.forEach(function (name) {
        if (props[name]) {
          boolClassNames.push(BOOL_PROPS_TO_CLASS_NAMES[name]);
        }
        delete props[name];
      });

      var numberClassNames = [];
      NUMBER_PROPS.forEach(function (name) {
        var value = props[name];
        var fn = NUMBER_PROPS_TO_CLASS_NAMES[name];
        if (value != null) {
          numberClassNames.push(fn(value));
        }
        delete props[name];
      });

      var divClassName = (0, _classnames2.default)(className, 'columns', 'rev-Col', boolClassNames, numberClassNames);

      return _react2.default.createElement(
        'div',
        _extends({}, props, { className: divClassName }),
        children
      );
    }
  }]);

  return Col;
}(_react.Component);

exports.default = Col;
//# sourceMappingURL=Col.js.map