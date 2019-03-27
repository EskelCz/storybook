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

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.object.keys");

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _addons = _interopRequireDefault(require("@storybook/addons"));

var _list = _interopRequireDefault(require("./list"));

var _wrapper = _interopRequireDefault(require("./wrapper"));

var _style = _interopRequireDefault(require("../style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Addons =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Addons, _PureComponent);

  function Addons() {
    var _this;

    _classCallCheck(this, Addons);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Addons).call(this));

    _this.onPressAddon = function (addonSelected) {
      _this.setState({
        addonSelected: addonSelected
      });
    };

    _addons.default.loadAddons({});

    _this.panels = _addons.default.getElements('panel');
    _this.state = {
      addonSelected: Object.keys(_this.panels)[0] || null
    };
    return _this;
  }

  _createClass(Addons, [{
    key: "render",
    value: function render() {
      var addonSelected = this.state.addonSelected;

      if (Object.keys(this.panels).length === 0) {
        return _react.default.createElement(_reactNative.View, {
          style: [_style.default.flex, _style.default.center]
        }, _react.default.createElement(_reactNative.Text, {
          style: _style.default.text
        }, "No onDevice addons loaded."));
      }

      return _react.default.createElement(_reactNative.View, {
        style: _style.default.flex
      }, _react.default.createElement(_list.default, {
        onPressAddon: this.onPressAddon,
        panels: this.panels,
        addonSelected: addonSelected
      }), _react.default.createElement(_wrapper.default, {
        addonSelected: addonSelected,
        panels: this.panels
      }));
    }
  }]);

  return Addons;
}(_react.PureComponent);

exports.default = Addons;