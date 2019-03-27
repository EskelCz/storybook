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

require("core-js/modules/es6.function.bind");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _coreEvents = _interopRequireDefault(require("@storybook/core-events"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var StoryView =
/*#__PURE__*/
function (_Component) {
  _inherits(StoryView, _Component);

  function StoryView(props) {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StoryView);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StoryView)).call.apply(_getPrototypeOf2, [this, props].concat(args)));

    _this.selectStory = function (selection) {
      _this.setState({
        storyFn: selection.storyFn,
        selection: selection
      });
    };

    _this.renderHelp = function () {
      var url = _this.props.url;
      return _react.default.createElement(_reactNative.View, {
        style: _style.default.help
      }, url && url.length ? _react.default.createElement(_reactNative.Text, null, "Please open the Storybook UI (", url, ") with a web browser and select a story for preview.") : _react.default.createElement(_reactNative.Text, null, "Please open the Storybook UI with a web browser and select a story for preview."));
    };

    _this.renderOnDeviceUIHelp = function () {
      return _react.default.createElement(_reactNative.View, {
        style: _style.default.help
      }, _react.default.createElement(_reactNative.Text, null, "Please open navigator and select a story to preview."));
    };

    _this.state = {
      storyFn: null,
      selection: {}
    };

    if (props.listenToEvents) {
      _this.storyHandler = _this.selectStory.bind(_assertThisInitialized(_this));
      _this.forceRender = _this.forceUpdate.bind(_assertThisInitialized(_this));
      props.events.on(_coreEvents.default.SELECT_STORY, _this.storyHandler);
      props.events.on(_coreEvents.default.FORCE_RE_RENDER, _this.forceRender);
    }

    return _this;
  }

  _createClass(StoryView, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props = this.props,
          listenToEvents = _this$props.listenToEvents,
          events = _this$props.events;

      if (listenToEvents) {
        events.removeListener(_coreEvents.default.SELECT_STORY, this.storyHandler);
        events.removeListener(_coreEvents.default.FORCE_RE_RENDER, this.forceRender);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var listenToEvents = this.props.listenToEvents;

      if (listenToEvents) {
        var _this$state = this.state,
            _storyFn = _this$state.storyFn,
            _selection = _this$state.selection;
        var _kind = _selection.kind,
            _story = _selection.story;
        return _storyFn ? _react.default.createElement(_reactNative.View, {
          key: "".concat(_kind, ":::").concat(_story),
          style: _style.default.main
        }, _storyFn()) : this.renderHelp();
      }

      var _this$props2 = this.props,
          storyFn = _this$props2.storyFn,
          selection = _this$props2.selection;
      var kind = selection.kind,
          story = selection.story;
      return storyFn ? _react.default.createElement(_reactNative.View, {
        key: "".concat(kind, ":::").concat(story),
        style: _style.default.main
      }, storyFn()) : this.renderOnDeviceUIHelp();
    }
  }]);

  return StoryView;
}(_react.Component);

exports.default = StoryView;
StoryView.propTypes = {
  listenToEvents: _propTypes.default.bool,
  storyFn: _propTypes.default.func,
  selection: _propTypes.default.shape({
    kind: _propTypes.default.string,
    story: _propTypes.default.string
  }),
  events: _propTypes.default.shape({
    on: _propTypes.default.func.isRequired,
    removeListener: _propTypes.default.func.isRequired
  }).isRequired,
  url: _propTypes.default.string
};
StoryView.defaultProps = {
  url: '',
  listenToEvents: false,
  selection: {},
  storyFn: null
};