"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNative = require("react-native");

var _button = _interopRequireDefault(require("./button"));

var _consts = require("./consts");

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard (obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof (obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof (obj) { return typeof obj; }; } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass (Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn (self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized (self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf (o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf (o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf (o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf (o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var style = _reactNative.StyleSheet.create({
  bar: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    backgroundColor: 'black',
  }
});

var Bar =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(Bar, _PureComponent);

    function Bar () {
      _classCallCheck(this, Bar);

      return _possibleConstructorReturn(this, _getPrototypeOf(Bar).apply(this, arguments));
    }

    _createClass(Bar, [{
      key: "render",
      value: function render () {
        var _this$props = this.props,
          index = _this$props.index,
          onPress = _this$props.onPress;
        return _react.default.createElement(_reactNative.View, {
          style: style.bar
        }, _react.default.createElement(_button.default, {
          onPress: onPress,
          id: _consts.NAVIGATOR,
          active: index === _consts.NAVIGATOR
        }, "NAVIGATOR"), _react.default.createElement(_button.default, {
          onPress: onPress,
          id: _consts.PREVIEW,
          active: index === _consts.PREVIEW
        }, "PREVIEW"), _react.default.createElement(_button.default, {
          onPress: onPress,
          id: _consts.ADDONS,
          active: index === _consts.ADDONS
        }, "ADDONS"));
      }
    }]);

    return Bar;
  }(_react.PureComponent);

exports.default = Bar;
Bar.propTypes = {
  onPress: _propTypes.default.func.isRequired,
  index: _propTypes.default.number.isRequired
};