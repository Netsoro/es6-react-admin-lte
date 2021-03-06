'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorMessage = function (_React$Component) {
  _inherits(ErrorMessage, _React$Component);

  function ErrorMessage() {
    _classCallCheck(this, ErrorMessage);

    return _possibleConstructorReturn(this, (ErrorMessage.__proto__ || Object.getPrototypeOf(ErrorMessage)).apply(this, arguments));
  }

  _createClass(ErrorMessage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'alert ' + this.props.theme + ' text-left' },
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'strong',
            null,
            'Error ',
            this.props.error.code,
            ':\xA0'
          ),
          _react2.default.createElement(
            'small',
            null,
            '(',
            this.props.error.origin,
            ')'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          this.props.error.message
        )
      );
    }
  }]);

  return ErrorMessage;
}(_react2.default.Component);

/**
  *  this.props.error expects { code, origin, message }
  *  Code is the error's status code
  *  Origin is the route or process that induced the error
  *  Message is the message for the user to read
*/


ErrorMessage.propTypes = {
  error: _propTypes2.default.object,
  theme: _propTypes2.default.string
};
ErrorMessage.defaultProps = {
  theme: 'alert-danger'
};

exports.default = ErrorMessage;
module.exports = exports['default'];
//# sourceMappingURL=error-message.js.map
