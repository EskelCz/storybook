"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  main: {
    flex: 1,
  },
  headerText: {
    marginLeft: 10,
    fontSize: 20,
    color: '#EEE',
  },
  text: {
    fontSize: 18,
    color: '#EEE',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  hideButtonText: {
    fontSize: 14,
    color: '#999999',
  },
  hideButton: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 8,
    bottom: 12,
    zIndex: 100,
  },
  previewMinimized: {
    borderWidth: 1,
    borderColor: '#222222',
  },
  tab: {
    marginRight: 15,
  },
  addonList: {
    flexDirection: 'row',
  },
  invisible: {
    height: 0,
    width: 0,
    opacity: 0,
    position: 'absolute',
  },
  flex: {
    flex: 1,
  },
};
exports.default = _default;