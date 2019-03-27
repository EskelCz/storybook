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

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.some");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.string.trim");

require("core-js/modules/es6.array.map");

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

var SectionHeader = function SectionHeader(_ref) {
  var title = _ref.title,
      selected = _ref.selected;
  return _react.default.createElement(_reactNative.View, {
    key: title,
    style: _style.default.header
  }, _react.default.createElement(_reactNative.Text, {
    style: [_style.default.headerText, selected && _style.default.headerTextSelected]
  }, title));
};

SectionHeader.propTypes = {
  title: _propTypes.default.string.isRequired,
  selected: _propTypes.default.bool.isRequired
};

var ListItem = function ListItem(_ref2) {
  var kind = _ref2.kind,
      title = _ref2.title,
      selected = _ref2.selected,
      onPress = _ref2.onPress;
  return _react.default.createElement(_reactNative.TouchableOpacity, {
    key: title,
    style: _style.default.item,
    onPress: onPress,
    testID: "Storybook.ListItem.".concat(kind, ".").concat(title),
    accessibilityLabel: "Storybook.ListItem.".concat(title)
  }, _react.default.createElement(_reactNative.Text, {
    style: [_style.default.itemText, selected && _style.default.itemTextSelected]
  }, title));
};

ListItem.propTypes = {
  title: _propTypes.default.string.isRequired,
  kind: _propTypes.default.string.isRequired,
  onPress: _propTypes.default.func.isRequired,
  selected: _propTypes.default.bool.isRequired
};

var StoryListView =
/*#__PURE__*/
function (_Component) {
  _inherits(StoryListView, _Component);

  function StoryListView(props) {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StoryListView);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StoryListView)).call.apply(_getPrototypeOf2, [this, props].concat(args)));

    _this.handleStoryAdded = function () {
      var stories = _this.props.stories;

      if (stories) {
        var data = stories.dumpStoryBook().map(function (section) {
          return {
            title: section.kind,
            data: section.stories.map(function (story) {
              return {
                key: story,
                name: story,
                kind: section.kind
              };
            })
          };
        }, {});

        _this.setState({
          data: data,
          originalData: data
        });
      }
    };

    _this.handleChangeSearchText = function (text) {
      var query = text.trim();
      var data = _this.state.originalData;

      if (!query) {
        _this.setState({
          data: data
        });

        return;
      }

      var checkValue = function checkValue(value) {
        return value.toLowerCase().includes(query.toLowerCase());
      };

      var filteredData = data.reduce(function (acc, story) {
        var hasTitle = checkValue(story.title);
        var hasKind = story.data.some(function (kind) {
          return checkValue(kind.name);
        });

        if (hasTitle || hasKind) {
          acc.push(Object.assign({}, story, {
            // in case the query matches component's title, all of its stories will be shown
            data: !hasTitle ? story.data.filter(function (kind) {
              return checkValue(kind.name);
            }) : story.data
          }));
        }

        return acc;
      }, []);

      _this.setState({
        data: filteredData
      });
    };

    _this.state = {
      data: [],
      originalData: []
    };
    _this.storyAddedHandler = _this.handleStoryAdded.bind(_assertThisInitialized(_this));
    props.stories.on(_coreEvents.default.STORY_ADDED, _this.storyAddedHandler);
    return _this;
  }

  _createClass(StoryListView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleStoryAdded();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var stories = this.props.stories;
      stories.removeListener(_coreEvents.default.STORY_ADDED, this.storyAddedHandler);
    }
  }, {
    key: "changeStory",
    value: function changeStory(kind, story) {
      var events = this.props.events;
      events.emit(_coreEvents.default.SET_CURRENT_STORY, {
        kind: kind,
        story: story
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          selectedKind = _this$props.selectedKind,
          selectedStory = _this$props.selectedStory;
      var data = this.state.data;
      return _react.default.createElement(_reactNative.SafeAreaView, {
        style: _style.default.flex
      }, _react.default.createElement(_reactNative.TextInput, {
        clearButtonMode: "while-editing",
        disableFullscreenUI: true,
        onChangeText: this.handleChangeSearchText,
        placeholder: "Filter",
        returnKeyType: "search",
        style: _style.default.searchBar
      }), _react.default.createElement(_reactNative.SectionList, {
        testID: "Storybook.ListView",
        style: _style.default.sectionList,
        renderItem: function renderItem(_ref3) {
          var item = _ref3.item;
          return _react.default.createElement(ListItem, {
            title: item.name,
            kind: item.kind,
            selected: item.kind === selectedKind && item.name === selectedStory,
            onPress: function onPress() {
              return _this2.changeStory(item.kind, item.name);
            }
          });
        },
        renderSectionHeader: function renderSectionHeader(_ref4) {
          var title = _ref4.section.title;
          return _react.default.createElement(SectionHeader, {
            title: title,
            selected: title === selectedKind
          });
        },
        keyExtractor: function keyExtractor(item, index) {
          return item + index;
        },
        sections: data,
        stickySectionHeadersEnabled: false
      }));
    }
  }]);

  return StoryListView;
}(_react.Component);

exports.default = StoryListView;
StoryListView.propTypes = {
  stories: _propTypes.default.shape({
    dumpStoryBook: _propTypes.default.func.isRequired,
    on: _propTypes.default.func.isRequired,
    emit: _propTypes.default.func.isRequired,
    removeListener: _propTypes.default.func.isRequired
  }).isRequired,
  events: _propTypes.default.shape({
    on: _propTypes.default.func.isRequired,
    emit: _propTypes.default.func.isRequired,
    removeListener: _propTypes.default.func.isRequired
  }).isRequired,
  selectedKind: _propTypes.default.string,
  selectedStory: _propTypes.default.string
};
StoryListView.defaultProps = {
  selectedKind: null,
  selectedStory: null
};