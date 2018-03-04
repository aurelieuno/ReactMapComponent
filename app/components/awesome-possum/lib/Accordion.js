'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Converts string or array of strings to string-to-bool object mapping
// "one" -> {one: true}
// ["one", "two"] -> {one: true, two: true}
function activeToObject(active) {
  var obj = {};
  if (active == null) {
    return obj;
  }
  if (active instanceof Array) {
    active.forEach(function (name) {
      return obj[name] = true;
    });
  } else if ((typeof active === 'undefined' ? 'undefined' : _typeof(active)) === 'object') {
    obj = active;
  } else {
    obj[active] = true;
  }
  return obj;
}

var AccordionItem = function (_Component) {
  _inherits(AccordionItem, _Component);

  function AccordionItem() {
    _classCallCheck(this, AccordionItem);

    return _possibleConstructorReturn(this, (AccordionItem.__proto__ || Object.getPrototypeOf(AccordionItem)).apply(this, arguments));
  }

  _createClass(AccordionItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          onClick = _props.onClick,
          href = _props.href,
          title = _props.title,
          active = _props.active,
          renderHiddenPanes = _props.renderHiddenPanes,
          contentKey = _props.contentKey,
          props = _objectWithoutProperties(_props, ['children', 'className', 'onClick', 'href', 'title', 'active', 'renderHiddenPanes', 'contentKey']);

      var liClassName = (0, _classnames2.default)(className, 'rev-AccordionItem', {
        'rev-AccordionItem--selected': active
      });

      var aClassName = (0, _classnames2.default)('rev-AccordionItem-title', {
        'rev-AccordionItem-title--selected': active
      });

      var divClassName = (0, _classnames2.default)('rev-AccordionItem-content', {
        'rev-AccordionItem-content--selected': active
      });

      if (!active && !renderHiddenPanes) return _react2.default.createElement(
        'li',
        _extends({}, props, { className: liClassName }),
        _react2.default.createElement(
          'a',
          { className: aClassName, href: href || '#', onClick: onClick },
          title
        )
      );

      var div = _react2.default.createElement(
        'div',
        {
          className: divClassName
        },
        children
      );

      return _react2.default.createElement(
        'li',
        _extends({}, props, { className: liClassName }),
        _react2.default.createElement(
          'a',
          { className: aClassName, href: href || '#', onClick: onClick },
          title
        ),
        div
      );
    }
  }]);

  return AccordionItem;
}(_react.Component);

var Accordion = function (_Component2) {
  _inherits(Accordion, _Component2);

  function Accordion() {
    _classCallCheck(this, Accordion);

    return _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).apply(this, arguments));
  }

  _createClass(Accordion, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          active = _props2.active,
          renderHiddenPanes = _props2.renderHiddenPanes,
          props = _objectWithoutProperties(_props2, ['children', 'className', 'active', 'renderHiddenPanes']);

      var activeMap = activeToObject(active);

      var rewriteChild = function rewriteChild(child) {
        var active = activeMap[child.props.contentKey] || false;
        return (0, _react.cloneElement)(child, { active: active, renderHiddenPanes: renderHiddenPanes });
      };

      var ulClassName = (0, _classnames2.default)(className, 'rev-Accordion');

      return _react2.default.createElement(
        'ul',
        _extends({}, props, { className: ulClassName }),
        _react.Children.map(children, rewriteChild)
      );
    }
  }]);

  return Accordion;
}(_react.Component);

Accordion.defaultProps = {
  active: null
};
exports.default = Accordion;


Accordion.Item = AccordionItem;

var StatefulAccordion = function (_Component3) {
  _inherits(StatefulAccordion, _Component3);

  function StatefulAccordion(props) {
    _classCallCheck(this, StatefulAccordion);

    var _this3 = _possibleConstructorReturn(this, (StatefulAccordion.__proto__ || Object.getPrototypeOf(StatefulAccordion)).call(this, props));

    _this3.setExclusivelyActive = function (contentKey) {
      if (_this3.state.active[contentKey]) {
        return;
      }
      var active = {};
      active[contentKey] = true;
      _this3.setState({ active: active });
    };

    _this3.toggleActiveStatus = function (contentKey) {
      var currentStatus = _this3.state.active[contentKey];
      var active = _extends({}, _this3.state.active);
      active[contentKey] = !_this3.state.active[contentKey];
      _this3.setState({ active: active });
    };

    _this3.rewriteChild = function (child) {
      var multi = _this3.props.multi;
      var _child$props = child.props,
          contentKey = _child$props.contentKey,
          onClick = _child$props.onClick;

      var newOnClick = function newOnClick(e) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        e.preventDefault();
        _this3[multi ? 'toggleActiveStatus' : 'setExclusivelyActive'](contentKey);
        if (onClick) {
          return onClick.apply(undefined, [e].concat(args));
        }
      };
      return (0, _react.cloneElement)(child, { onClick: newOnClick });
    };

    _this3.state = {
      active: activeToObject(props.defaultActive)
    };
    return _this3;
  }

  _createClass(StatefulAccordion, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          children = _props3.children,
          defaultActive = _props3.defaultActive,
          multi = _props3.multi,
          props = _objectWithoutProperties(_props3, ['children', 'defaultActive', 'multi']);

      return _react2.default.createElement(
        Accordion,
        _extends({}, props, { active: this.state.active }),
        _react.Children.map(children, this.rewriteChild)
      );
    }
  }]);

  return StatefulAccordion;
}(_react.Component);

Accordion.Stateful = StatefulAccordion;
//# sourceMappingURL=Accordion.js.map