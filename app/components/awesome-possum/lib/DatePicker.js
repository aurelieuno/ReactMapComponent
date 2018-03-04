'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateInputBlock = exports.Calendar = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Calendar = require('./DatePicker/Calendar');

var _Calendar2 = _interopRequireDefault(_Calendar);

var _DateInputBlock = require('./DatePicker/DateInputBlock');

var _DateInputBlock2 = _interopRequireDefault(_DateInputBlock);

var _InputHelpText = require('./InputHelpText');

var _InputHelpText2 = _interopRequireDefault(_InputHelpText);

var _InputErrors = require('./InputErrors');

var _InputErrors2 = _interopRequireDefault(_InputErrors);

var _createElementWithOverride = require('./Utilities/createElementWithOverride');

var _createElementWithOverride2 = _interopRequireDefault(_createElementWithOverride);

var _luxon = require('luxon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** @jsx createElement */

/**
 * Return true if date type inputs are well supported on this platform
 * @return {boolean} true is date type inputs are well supported, false otherwise
 */
function goodDateInput() {
  if (typeof window === 'undefined') {
    return true;
  } else {
    var el = document.createElement('input');
    el.type = 'date';
    el.value = '!)';
    return el.value == '';
  }
}

/** A DatePicker component containing inputs and a calendar. */

var UncontrolledDatePicker = function (_React$Component) {
  _inherits(UncontrolledDatePicker, _React$Component);

  _createClass(UncontrolledDatePicker, null, [{
    key: 'defaultProps',

    /**
     * The default values for props of this component
     * @return {object} the default value object
     */
    get: function get() {
      var createElement = _react2.default.createElement;

      return {
        isSelectable: function isSelectable() {
          return true;
        }
      };
    }

    /**
     * Create a datepicker. Determines if we can use browser native date type input
     * or if we need to fall back to a text type input (based on support and if a
     * non-standard format is specified.)
     * @param {object} props
     */

  }]);

  function UncontrolledDatePicker(props) {
    _classCallCheck(this, UncontrolledDatePicker);

    // On platforms with poor date input support, or when non-standard format is
    // specified, we have to fall back to a text type input
    var _this = _possibleConstructorReturn(this, (UncontrolledDatePicker.__proto__ || Object.getPrototypeOf(UncontrolledDatePicker)).call(this, props));

    _this.goodDateInput = goodDateInput() && !_this.props.dateFormat;
    _this.state = _extends({
      isOpen: _this.props.isOpen || false,
      focused: false
    }, _this.valuesFromProps(props), {
      // Generation exists to force the inputs in the component to accept the
      // new value when we click the calendar
      generation: 0,
      mousedIn: false
    });
    return _this;
  }

  /**
   * Handle updated props from up the chain. In particular, if we receive a new
   * date from up the hierarchy, we want to reset the inputs and the calendar to
   * that value.
   * @param {object} nextProps
   */


  _createClass(UncontrolledDatePicker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState(this.valuesFromProps(nextProps));
    }

    /**
     * Find the date value from the props, and convert it to two values-- an iso
     * date and a 'local' format date version (so we can deal with poorly formatted
     * text inputs intelligently).
     * @param {object} props
     * @return {object} an object with two keys: isoValue & formattedValue
     */

  }, {
    key: 'valuesFromProps',
    value: function valuesFromProps(props) {
      return this.valuesFromIso(props.defaultValue || props.value);
    }

    /**
     * Take an ISO formatted date and turn it into an object with iso and local
     * format date.
     * @param {string} iso - an iso format date
     * @return {object} an object with two keys: isoValue & formattedValue
     */

  }, {
    key: 'valuesFromIso',
    value: function valuesFromIso(iso) {
      return {
        isoValue: iso,
        formattedValue: this.isoToFormatted(iso)
      };
    }

    /**
     * Take an iso formatted date and put it into this picker's format
     * @param {string} iso - an iso format date
     * @return {string} a date formatted according to the format of this date picker
     */

  }, {
    key: 'isoToFormatted',
    value: function isoToFormatted(iso) {
      if (!iso) {
        return '';
      }
      return _luxon.DateTime.fromISO(iso).toFormat(this.dateFormat);
    }

    /**
     * Process change events from the input by updating the isoValue & formattedValue
     * of this component. Will call down to an onChange handler passed in.
     * @param {Event} event - the change event fired from the input
     */

  }, {
    key: 'onChange',
    value: function onChange(event) {
      // Take whatever format the input gave us, and turn it into an ISO date string
      var asISO = _luxon.DateTime.fromFormat(event.target.value, this.dateFormat).toISODate();

      if (this.props.onChange) {
        // Call into an onChange we got as props
        this.props.onChange(event);
      }

      // Update isoValue & formattedValue from the ISO we built
      this.setState(this.valuesFromIso(asISO));
    }

    /**
     * Return the date format the component is using. Will be yyyy-MM-dd if we are
     * using a well supported date input (without custom format). If we have fallen
     * back to text field due to custom format or bad support, this will be the
     * custom format (defaulting to 'MM/dd/yyyy').
     * @return {string} the date format in use by the component
     */

  }, {
    key: 'dateChanger',


    /**
     * Invoked by the calendar to tell the date picker to update the inputs (onClick
     * of the calendar buttons).
     * @param {string} date - the new date, in the format yyyy-MM-dd
     */
    value: function dateChanger(date) {
      // Update isoValue & formattedValue based on the date value (which is an iso
      // date)
      this.setState(this.valuesFromIso(date));
      // Update the native input value with the formatted version of the new date
      // (this prevents the native input value from sticking with a hand-typed
      // input value after the button is clicked in certain situations)
      // It also sets us up to fire off a synthetic change event that looks just
      // like change event from a typed input (so external change handlers are
      // properly) invoked
      this.nativeInput.value = this.isoToFormatted(date);

      this.fireChangeHandler();

      // Force the input to be focused again (so that we don't immediately close
      // the calendar because the button click makes us not focused on the input)
      this.refocus();
    }

    /**
     * Create a synthetic change event and send it into the change handlers as if
     * the user had typed the new value. This makes typed input and calendar button
     * clicks fire off the same handlers.
     */

  }, {
    key: 'fireChangeHandler',
    value: function fireChangeHandler() {
      var event = new Event('change');
      this.nativeInput.dispatchEvent(event);
      this.onChange(event);
    }

    /**
     * Test whether we're on android or iphone. In that case, we hide the calendar
     * (unless we specify the useCalendarOnMobile prop to force it). This is because
     * those platforms have native inputs for dates which are much better for touch
     * than what we can do with a calendar.
     * @return {boolean} - true if on iOS or Android
     */

  }, {
    key: 'useNativePicker',
    value: function useNativePicker() {
      return typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    }

    /**
     * Track when the mouse cursor is over the component, so that we can not
     * immediately close the calendar when we lose focus-- which happens if you
     * click the calendar buttons.
     */

  }, {
    key: 'mouseIn',
    value: function mouseIn() {
      this.setState({ mousedIn: true });
    }

    /**
     * Track when the mouse is no longer over the component, which means that it
     * is safe to close the calendar if we lose focus, for example, because the
     * focus has moved to the next element.
     */

  }, {
    key: 'mouseOut',
    value: function mouseOut() {
      this.setState({ mousedIn: false, isOpen: this.state.focused });
    }

    /**
     * Mark the input as in focus. Used to determine whether the calendar should
     * be open or not.
     * @param {Event} event - the focus event
     */

  }, {
    key: 'focus',
    value: function focus(event) {
      if (this.props.onFocus) {
        this.props.onFocus(event);
      }
      this.setState({ focused: true, isOpen: true });
    }

    /**
     * Mark the input as out of focus. Used to determine whether the calendar should
     * be open or not.
     * @param {Event} event - the focus event
     */

  }, {
    key: 'blur',
    value: function blur(event) {
      if (this.props.onBlur) {
        this.props.onBlur(event);
      }
      this.setState({ focused: false, isOpen: this.state.mousedIn });
    }

    /**
     * Force the input back into focus. Used when calendar buttons are clicked, so
     * that the input stays in focus and we don't close the calendar.
     */

  }, {
    key: 'refocus',
    value: function refocus() {
      if (this.nativeInput) {
        this.nativeInput.focus();
      }
      this.focus();
    }

    /**
     * Returns true if the calendar should be opened, which is if:
     * - isOpen prop or state is set to true (state is true if the input is in
     *   focus or moused over)
     * - AND the input is not disabled
     * - AND we're not using the iOS / Android native picker (i.e. we're not on
     *   those platform OR we used props.useCalendarOnMobile to force non-native
     *   input)
     * @returns {boolean} - true if the calendar should be open
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          error = _props.error,
          help = _props.help,
          label = _props.label,
          highlights = _props.highlights,
          isOpen = _props.isOpen,
          overrides = _props.overrides,
          isSelectable = _props.isSelectable,
          calendar = _props.calendar,
          week = _props.week,
          day = _props.day,
          headerDay = _props.headerDay,
          overlay = _props.overlay,
          props = _objectWithoutProperties(_props, ['error', 'help', 'label', 'highlights', 'isOpen', 'overrides', 'isSelectable', 'calendar', 'week', 'day', 'headerDay', 'overlay']);

      var createElement = _createElementWithOverride2.default.bind(this, overrides);

      var nativeClass = this.useNativePicker() ? 'rev-DatePicker--native' : 'rev-DatePicker--custom';

      return createElement(
        'label',
        {
          className: 'rev-DatePicker rev-InputLabel ' + nativeClass,
          onMouseOver: this.mouseIn.bind(this),
          onMouseOut: this.mouseOut.bind(this)
        },
        label,
        createElement(_DateInputBlock2.default, _extends({}, props, {
          error: error,
          isoValue: this.state.isoValue,
          formattedValue: this.state.formattedValue,
          goodDateInput: this.goodDateInput,
          onFocus: this.focus.bind(this),
          onBlur: this.blur.bind(this),
          onChange: this.onChange.bind(this),
          generation: this.state.generation,
          inputRef: function inputRef(input) {
            return _this2.nativeInput = input;
          },
          overrides: overrides
        })),
        createElement(
          _InputHelpText2.default,
          null,
          help
        ),
        createElement(
          _InputErrors2.default,
          null,
          error
        ),
        createElement(_Calendar2.default, _extends({
          selectedDate: this.state.isoValue,
          dateChanger: this.dateChanger.bind(this),
          focuser: this.refocus.bind(this),
          overrides: overrides,
          isSelectable: isSelectable,
          week: week,
          highlights: highlights,
          overlay: overlay
        }, calendar, {
          day: day,
          headerDay: headerDay,
          className: this.calendarOpened ? 'rev-Calendar--open' : 'rev-Calendar--closed'
        }))
      );
    }
  }, {
    key: 'dateFormat',
    get: function get() {
      // TODO: detect locale default format string and use that instead of
      //   hardcoded 'MM/dd/yyyy'
      return this.goodDateInput ? 'yyyy-MM-dd' : this.props.dateFormat || 'MM/dd/yyyy';
    }
  }, {
    key: 'calendarOpened',
    get: function get() {
      return (this.state.isOpen || this.props.isOpen) && !this.props.disabled && (!this.useNativePicker() || this.props.useCalendarOnMobile);
    }
  }]);

  return UncontrolledDatePicker;
}(_react2.default.Component);

UncontrolledDatePicker.propTypes = {
  error: _propTypes2.default.node,
  help: _propTypes2.default.node,
  label: _propTypes2.default.node,
  highlights: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.objectOf(_propTypes2.default.string), _propTypes2.default.func]),
  isOpen: _propTypes2.default.bool,
  overrides: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.instanceOf(_react2.default.Component)])),
  isSelectable: _propTypes2.default.func,
  calendar: _propTypes2.default.object,
  week: _propTypes2.default.object,
  day: _propTypes2.default.object,
  headerDay: _propTypes2.default.object,
  useCalendarOnMobile: _propTypes2.default.bool
};

UncontrolledDatePicker.DateInputBlock = _DateInputBlock2.default;
UncontrolledDatePicker.Calendar = _Calendar2.default;
exports.Calendar = _Calendar2.default;
exports.DateInputBlock = _DateInputBlock2.default;
exports.default = UncontrolledDatePicker;
//# sourceMappingURL=DatePicker.js.map