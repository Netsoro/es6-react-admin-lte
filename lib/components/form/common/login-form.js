'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _loadStatus = require('../../utilities/load-status.js');

var _loadStatus2 = _interopRequireDefault(_loadStatus);

var _errorMessage = require('../../utilities/error-message.js');

var _errorMessage2 = _interopRequireDefault(_errorMessage);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  function LoginForm(props) {
    _classCallCheck(this, LoginForm);

    var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

    _this.state = {
      username: '',
      password: '',
      rememberMe: false
    };
    _this.fillForm = _this.fillForm.bind(_this);
    _this.submitForm = _this.submitForm.bind(_this);
    return _this;
  }

  _createClass(LoginForm, [{
    key: 'submitForm',
    value: function submitForm(e) {
      e.preventDefault();
      e.stopPropagation();
      this.props.onSubmit(this.state.username, this.state.password, this.state.rememberMe);
    }
  }, {
    key: 'fillForm',
    value: function fillForm(e) {
      switch (e.currentTarget.id) {
        case 'username':
          this.setState({ username: e.currentTarget.value });
          break;
        case 'password':
          this.setState({ password: e.currentTarget.value });
          break;
        case 'remember-me':
          this.setState({ rememberMe: e.currentTarget.checked });
          break;
        default:
          break;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var error = this.props.error.message === null ? '' : _react2.default.createElement(_errorMessage2.default, { error: this.props.error, theme: this.props.errorTheme });
      return _react2.default.createElement(
        'div',
        { className: 'login-box' },
        _react2.default.createElement(
          'div',
          { className: 'login-logo' },
          _react2.default.createElement(
            'a',
            {
              href: this.props.logoLink,
              onClick: this.props.onLogoClick ? function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this2.props.onLogoClick();
              } : function () {}
            },
            this.props.clientLogo ? _react2.default.createElement('img', { src: this.props.clientLogo, alt: typeof this.props.clientName === 'string' ? this.props.clientName : 'Brand Logo', style: { width: '60%', height: 'auto' } }) : this.props.clientName
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'login-box-body', style: { position: 'relative' } },
          _react2.default.createElement(
            'div',
            { className: 'login-box-body-head' },
            error,
            _react2.default.createElement(
              'p',
              { className: 'login-box-msg' },
              this.props.headline,
              this.props.subheadline ? _react2.default.createElement(
                'small',
                null,
                _react2.default.createElement('br', null),
                this.props.subheadline
              ) : ''
            )
          ),
          _react2.default.createElement(
            'form',
            { noValidate: true, onSubmit: this.submitForm },
            _react2.default.createElement(
              'div',
              { className: 'form-group has-feedback' },
              _react2.default.createElement('input', {
                id: 'username',
                type: 'text',
                className: 'form-control',
                placeholder: this.props.userPlaceholder,
                onChange: this.fillForm
              }),
              _react2.default.createElement('span', { className: 'glyphicon glyphicon-envelope form-control-feedback' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group has-feedback' },
              _react2.default.createElement('input', {
                id: 'password',
                type: 'password',
                className: 'form-control',
                placeholder: this.props.passPlaceholder,
                onChange: this.fillForm
              }),
              _react2.default.createElement('span', { className: 'glyphicon glyphicon-lock form-control-feedback' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              this.props.remembers ? _react2.default.createElement(
                'div',
                { className: 'col-xs-8' },
                _react2.default.createElement(
                  'div',
                  { className: 'checkbox icheck' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'remember-me' },
                    _react2.default.createElement('input', {
                      type: 'checkbox',
                      id: 'remember-me',
                      defaultChecked: false,
                      onChange: this.fillForm
                    }),
                    this.props.rememberMeText
                  )
                )
              ) : '',
              _react2.default.createElement(
                'div',
                { className: 'col-xs-offset-8 col-xs-4' },
                _react2.default.createElement(
                  'button',
                  {
                    type: 'submit',
                    className: 'btn btn-block btn-flat ' + this.props.submitTheme,
                    onClick: this.submitForm,
                    id: 'login-btn'
                  },
                  this.props.submitText
                )
              )
            )
          ),
          this.props.forgets ? _react2.default.createElement(
            'a',
            {
              href: this.props.forgetLink,
              onClick: this.props.onForget ? function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this2.props.onForget();
              } : function () {}
            },
            'I forgot my password'
          ) : '',
          this.props.forgets && this.props.registers ? _react2.default.createElement('br', null) : '',
          this.props.registers ? _react2.default.createElement(
            'a',
            {
              href: this.props.registerLink,
              className: 'text-center',
              onClick: this.props.onRegister ? function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this2.props.onRegister();
              } : function () {}
            },
            'Register an account'
          ) : '',
          _react2.default.createElement(
            'div',
            { className: 'row' },
            this.props.children
          ),
          !this.props.loading ? '' : _react2.default.createElement(
            'div',
            {
              className: 'text-center align-middle overlay over-load',
              style: {
                position: 'absolute',
                backgroundColor: 'rgba(236, 240, 245, 0.25)',
                top: '0', right: '0', bottom: '0', left: '0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }
            },
            _react2.default.createElement(_loadStatus2.default, { size: '5em', color: 'rgba(51, 51, 51, 0.3)', spins: true })
          )
        )
      );
    }
  }]);

  return LoginForm;
}(_react2.default.Component);

LoginForm.propTypes = {
  loading: _propTypes2.default.bool,
  errorTheme: _propTypes2.default.string,
  error: _propTypes2.default.object,
  clientName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  clientLogo: _propTypes2.default.string,
  onLogoClick: _propTypes2.default.func,
  logoLink: _propTypes2.default.string,
  headline: _propTypes2.default.string,
  subheadline: _propTypes2.default.string,
  remembers: _propTypes2.default.bool,
  rememberMeText: _propTypes2.default.string,
  submitText: _propTypes2.default.string,
  submitTheme: _propTypes2.default.string,
  onSubmit: _propTypes2.default.func,
  userPlaceholder: _propTypes2.default.string,
  passPlaceholder: _propTypes2.default.string,
  forgets: _propTypes2.default.bool,
  registers: _propTypes2.default.bool,
  forgetLink: _propTypes2.default.string,
  onForget: _propTypes2.default.func,
  registerLink: _propTypes2.default.string,
  onRegister: _propTypes2.default.func
};

LoginForm.defaultProps = {
  loading: false,
  errorTheme: 'alert-danger',
  error: {
    message: null,
    code: null,
    origin: null
  },
  clientName: _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(
      'b',
      null,
      'Admin'
    ),
    'LTE'
  ),
  clientLogo: '',
  headline: 'Sign in to start your session',
  subheadline: '',
  remembers: false,
  rememberMeText: 'Remember Me',
  submitText: 'Sign In',
  submitTheme: 'btn-primary',
  userPlaceholder: 'Email',
  passPlaceholder: 'Password',
  forgets: false,
  registers: false,
  onSubmit: function onSubmit() {}
};

exports.default = LoginForm;
module.exports = exports['default'];
//# sourceMappingURL=login-form.js.map
