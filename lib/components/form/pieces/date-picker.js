'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _bootstrapDatepicker = require('bootstrap-datepicker');

var _bootstrapDatepicker2 = _interopRequireDefault(_bootstrapDatepicker);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePickerator = function (_React$Component) {
  _inherits(DatePickerator, _React$Component);

  function DatePickerator() {
    _classCallCheck(this, DatePickerator);

    return _possibleConstructorReturn(this, (DatePickerator.__proto__ || Object.getPrototypeOf(DatePickerator)).apply(this, arguments));
  }

  _createClass(DatePickerator, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      (0, _jquery2.default)('#datepickerator-' + this.props.id).datepicker({
        autoclose: true,
        format: this.props.format,
        orientation: 'bottom right',
        todayHighlight: true,
        defaultDate: this.props.value || Date.now(),
        forceParse: true
      }).on('changeDate', function (e) {
        _this2.props.onChange(e);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'date datepicker-input-group' },
        _react2.default.createElement('input', {
          'data-provide': 'datepicker',
          ref: 'date',
          type: 'text',
          className: 'form-control datepicker',
          id: 'datepickerator-' + this.props.id,
          name: 'datepickerator-' + this.props.id,
          onChange: !this.props.disabled && this.props.onChange ? this.props.onChange : function () {},
          placeholder: this.props.placeholder,
          value: this.props.value,
          required: this.props.required,
          style: !this.props.disabled ? { backgroundColor: '#FFFFFF' } : {},
          readOnly: true,
          disabled: this.props.disabled
        })
      );
    }
  }]);

  return DatePickerator;
}(_react2.default.Component);

DatePickerator.propTypes = {
  id: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  required: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  format: _propTypes2.default.string,
  placeholder: _propTypes2.default.string
};
DatePickerator.defaultProps = {
  required: false,
  format: 'MM, dd, yyyy',
  placeholder: 'Month, Day, Year'
};

exports.default = DatePickerator;
module.exports = exports['default'];
//# sourceMappingURL=date-picker.js.map
