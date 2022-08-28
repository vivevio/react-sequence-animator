"use strict";

exports.__esModule = true;
exports.SequenceAnimator = void 0;

var _react = _interopRequireDefault(require("react"));

var _common = require("../common");

var _jsxFileName = "/Users/vive/Documents/Playground/react-sequence-animator/dist/cjs/SequenceAnimator/SequenceAnimator.tsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class SequenceAnimator extends _react.default.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_animationFrame", void 0);

    _defineProperty(this, "_animationStart", void 0);

    _defineProperty(this, "state", {
      frame: 0
    });

    _defineProperty(this, "_getFrame", () => {
      const frame = this.state.frame;

      const childrenArr = this._getChildrenArray();

      return childrenArr.length >= frame ? childrenArr[frame] : null;
    });

    _defineProperty(this, "_playAnimation", () => {
      this._animationFrame = requestAnimationFrame(this._onAnimate);
    });

    _defineProperty(this, "_onAnimate", timestamp => {
      const _this$props = this.props,
            onSequenceEnd = _this$props.onSequenceEnd,
            onAnimationStop = _this$props.onAnimationStop,
            loop = _this$props.loop,
            easing = _this$props.easing,
            duration = _this$props.duration;

      const childrenArr = this._getChildrenArray();

      if (!this._animationStart) {
        this._animationStart = timestamp;
      }

      let nextFrame = Math.floor((0, _common.ease)(easing)(timestamp - this._animationStart, 0, childrenArr.length, duration));

      if (nextFrame > childrenArr.length - 1) {
        if (onSequenceEnd) {
          onSequenceEnd();
        }

        if (loop) {
          nextFrame %= childrenArr.length;
          this._animationStart = timestamp;
        } else {
          nextFrame = -1;
        }
      }

      if (nextFrame > -1) {
        this.setState({
          frame: nextFrame
        }, () => {
          this._playAnimation();
        });
      } else if (onAnimationStop) {
        onAnimationStop();
      }
    });
  }

  componentDidMount() {
    const autoplay = this.props.autoplay;

    if (autoplay) {
      this.start();
    }
  }

  componentWillUnmount() {
    cancelAnimationFrame(this._animationFrame);
  }

  start() {
    this._playAnimation();
  }

  stop() {
    cancelAnimationFrame(this._animationFrame);
  }

  reset() {
    this.setState({
      frame: 0
    });
  }

  render() {
    const frame = this._getFrame();

    return /*#__PURE__*/_react.default.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 12
      }
    }, frame);
  }

  _getChildrenArray() {
    const children = this.props.children;
    return _react.default.Children.toArray(children || []);
  }

}

exports.SequenceAnimator = SequenceAnimator;

_defineProperty(SequenceAnimator, "displayName", 'SequenceAnimator');

_defineProperty(SequenceAnimator, "defaultProps", {
  duration: 1000,
  autoplay: true,
  easing: 'linear',
  loop: true
});
//# sourceMappingURL=SequenceAnimator.js.map