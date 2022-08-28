"use strict";

exports.__esModule = true;
exports.SpriteAnimator = void 0;

var _react = _interopRequireDefault(require("react"));

var _common = require("../common");

var _jsxFileName = "/Users/vive/Documents/Playground/react-sequence-animator/dist/cjs/SpriteAnimator/SpriteAnimator.tsx";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const DEFAULT_POSITION = {
  top: 0,
  left: 0,
  width: '100%',
  height: '100%'
};

class SpriteAnimator extends _react.default.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      frame: 0
    });

    _defineProperty(this, "_animationFrame", void 0);

    _defineProperty(this, "_animationStart", void 0);

    _defineProperty(this, "_playAnimation", () => {
      this._animationFrame = requestAnimationFrame(this._onAnimate);
    });

    _defineProperty(this, "_onAnimate", timestamp => {
      const _this$props = this.props,
            numOfFrames = _this$props.numOfFrames,
            loop = _this$props.loop,
            easing = _this$props.easing,
            duration = _this$props.duration,
            onSequenceEnd = _this$props.onSequenceEnd,
            onAnimationStop = _this$props.onAnimationStop;

      if (!this._animationStart) {
        this._animationStart = timestamp;
      }

      let nextFrame = Math.floor((0, _common.ease)(easing)(timestamp - this._animationStart, 0, numOfFrames, duration));

      if (nextFrame > numOfFrames - 1) {
        if (onSequenceEnd) {
          onSequenceEnd();
        }

        if (loop) {
          nextFrame %= numOfFrames;
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

  componentDidUpdate(nextProps) {
    if (nextProps.numOfFrames !== this.props.numOfFrames) {
      this.start();
    }
  }

  componentWillUnmount() {
    cancelAnimationFrame(this._animationFrame);
  }

  start() {
    this._animationStart = null;

    this._playAnimation();
  }

  stop() {
    const onAnimationStop = this.props.onAnimationStop;
    cancelAnimationFrame(this._animationFrame);

    if (onAnimationStop) {
      onAnimationStop();
    }
  }

  reset() {
    this.setState({
      frame: 0
    });
  }

  render() {
    const frame = this.state.frame;
    const _this$props2 = this.props,
          getPosition = _this$props2.getPosition,
          children = _this$props2.children;

    const _getPosition = getPosition(frame),
          width = _getPosition.width,
          height = _getPosition.height,
          top = _getPosition.top,
          left = _getPosition.left;

    return /*#__PURE__*/_react.default.createElement("div", {
      className: "wrapper",
      style: {
        width,
        height
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 7
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "innerWrapper",
      style: {
        top: -top,
        left: -left
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }
    }, _react.default.Children.only(children)));
  }

}

exports.SpriteAnimator = SpriteAnimator;

_defineProperty(SpriteAnimator, "displayName", 'SpriteAnimator');

_defineProperty(SpriteAnimator, "defaultProps", {
  autoplay: true,
  easing: 'linear',
  loop: true,
  numOfFrames: 0,
  getPosition: () => DEFAULT_POSITION
});
//# sourceMappingURL=SpriteAnimator.js.map