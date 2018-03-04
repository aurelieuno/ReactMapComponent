'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Expander = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BOOL_PROPS_TO_CLASS_NAMES = {
  left: 'rev-Drawer--left',
  right: 'rev-Drawer--right',
  top: 'rev-Drawer--top',
  scroll: 'rev-Drawer--scroll',
  fixed: 'rev-Drawer--fixed',
  overlay: 'rev-Drawer--overlay',
  collapsible: 'rev-Drawer--collapsible'
};

var BOOL_PROPS = Object.keys(BOOL_PROPS_TO_CLASS_NAMES);

var Drawer = function (_React$Component) {
  _inherits(Drawer, _React$Component);

  _createClass(Drawer, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        children: _propTypes2.default.node,
        className: _propTypes2.default.string,
        closerChildren: _propTypes2.default.node,
        expanderChildren: _propTypes2.default.node,
        expanderComponentClass: _propTypes2.default.string
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        expanderComponentClass: 'a',
        expanderClassName: '',
        expanderChildren: 'Expand this',
        closerChildren: 'Close This'
      };
    }
  }]);

  function Drawer(props) {
    _classCallCheck(this, Drawer);

    var _this = _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call(this, props));

    _this.expandPane = function () {
      _this.setState({ open: true });
    };

    _this.closePane = function () {
      _this.setState({ open: false });
    };

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(Drawer, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var propClassNames = BOOL_PROPS.reduce(function (acc, key) {
        var value = BOOL_PROPS_TO_CLASS_NAMES[key];
        acc[value] = _this2.props[key];
        return acc;
      }, {});
      var newClassName = (0, _classnames2.default)(this.props.className, propClassNames);

      return _react2.default.createElement(
        Expander,
        {
          open: this.state.open,
          className: newClassName,
          closer: _react2.default.createElement(
            'a',
            { className: 'rev-Drawer-closer', onClick: this.closePane },
            this.props.closerChildren
          )
        },
        _react2.default.createElement(this.props.expanderComponentClass, {
          className: 'rev-Drawer-expander',
          onClick: this.expandPane
        }, this.props.expanderChildren),
        this.props.children
      );
    }
  }]);

  return Drawer;
}(_react2.default.Component);

exports.default = Drawer;
var Expander = exports.Expander = function Expander(props) {
  return _react2.default.createElement(
    'div',
    { className: 'rev-Drawer ' + (props.open ? 'rev-Drawer--open' : '') + ' ' + props.className },
    props.closer,
    _react2.default.createElement(
      'div',
      { className: 'rev-Drawer-contents' },
      props.children
    )
  );
};

Expander.defaultProps = {
  className: ''
};

Expander.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  closer: _propTypes2.default.node,
  open: _propTypes2.default.bool
};
//# sourceMappingURL=Drawer.js.map