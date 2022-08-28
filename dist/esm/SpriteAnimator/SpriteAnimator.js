import { __extends } from "tslib";
import React from 'react';
import { ease } from '../common';
var DEFAULT_POSITION = {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
};
var SpriteAnimator = /** @class */ (function (_super) {
    __extends(SpriteAnimator, _super);
    function SpriteAnimator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            frame: 0,
        };
        _this._playAnimation = function () {
            _this._animationFrame = requestAnimationFrame(_this._onAnimate);
        };
        _this._onAnimate = function (timestamp) {
            var _a = _this.props, numOfFrames = _a.numOfFrames, loop = _a.loop, easing = _a.easing, duration = _a.duration, onSequenceEnd = _a.onSequenceEnd, onAnimationStop = _a.onAnimationStop;
            if (!_this._animationStart) {
                _this._animationStart = timestamp;
            }
            var nextFrame = Math.floor(ease(easing)(timestamp - _this._animationStart, 0, numOfFrames, duration));
            if (nextFrame > numOfFrames - 1) {
                if (onSequenceEnd) {
                    onSequenceEnd();
                }
                if (loop) {
                    nextFrame %= numOfFrames;
                    _this._animationStart = timestamp;
                }
                else {
                    nextFrame = -1;
                }
            }
            if (nextFrame > -1) {
                _this.setState({ frame: nextFrame }, function () {
                    _this._playAnimation();
                });
            }
            else if (onAnimationStop) {
                onAnimationStop();
            }
        };
        return _this;
    }
    SpriteAnimator.prototype.componentDidMount = function () {
        var autoplay = this.props.autoplay;
        if (autoplay) {
            this.start();
        }
    };
    SpriteAnimator.prototype.componentDidUpdate = function (nextProps) {
        if (nextProps.numOfFrames !== this.props.numOfFrames) {
            this.start();
        }
    };
    SpriteAnimator.prototype.componentWillUnmount = function () {
        cancelAnimationFrame(this._animationFrame);
    };
    SpriteAnimator.prototype.start = function () {
        this._animationStart = null;
        this._playAnimation();
    };
    SpriteAnimator.prototype.stop = function () {
        var onAnimationStop = this.props.onAnimationStop;
        cancelAnimationFrame(this._animationFrame);
        if (onAnimationStop) {
            onAnimationStop();
        }
    };
    SpriteAnimator.prototype.reset = function () {
        this.setState({ frame: 0 });
    };
    SpriteAnimator.prototype.render = function () {
        var frame = this.state.frame;
        var _a = this.props, getPosition = _a.getPosition, children = _a.children;
        var _b = getPosition(frame), width = _b.width, height = _b.height, top = _b.top, left = _b.left;
        return (React.createElement("div", { className: "wrapper", style: { width: width, height: height } },
            React.createElement("div", { className: "innerWrapper", style: { top: -top, left: -left } }, React.Children.only(children))));
    };
    SpriteAnimator.displayName = 'SpriteAnimator';
    SpriteAnimator.defaultProps = {
        autoplay: true,
        easing: 'linear',
        loop: true,
        numOfFrames: 0,
        getPosition: function () { return DEFAULT_POSITION; },
    };
    return SpriteAnimator;
}(React.Component));
export { SpriteAnimator };
