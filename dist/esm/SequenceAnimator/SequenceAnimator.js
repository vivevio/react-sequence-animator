import { __extends } from "tslib";
import React from 'react';
import { ease } from '../common';
var SequenceAnimator = /** @class */ (function (_super) {
    __extends(SequenceAnimator, _super);
    function SequenceAnimator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            frame: 0,
        };
        _this._getFrame = function () {
            var frame = _this.state.frame;
            var childrenArr = _this._getChildrenArray();
            return childrenArr.length >= frame ? childrenArr[frame] : null;
        };
        _this._playAnimation = function () {
            _this._animationFrame = requestAnimationFrame(_this._onAnimate);
        };
        _this._onAnimate = function (timestamp) {
            var _a = _this.props, onSequenceEnd = _a.onSequenceEnd, onAnimationStop = _a.onAnimationStop, loop = _a.loop, easing = _a.easing, duration = _a.duration;
            var childrenArr = _this._getChildrenArray();
            if (!_this._animationStart) {
                _this._animationStart = timestamp;
            }
            var nextFrame = Math.floor(ease(easing)(timestamp - _this._animationStart, 0, childrenArr.length, duration));
            if (nextFrame > childrenArr.length - 1) {
                if (onSequenceEnd) {
                    onSequenceEnd();
                }
                if (loop) {
                    nextFrame %= childrenArr.length;
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
    SequenceAnimator.prototype.componentDidMount = function () {
        var autoplay = this.props.autoplay;
        if (autoplay) {
            this.start();
        }
    };
    SequenceAnimator.prototype.componentWillUnmount = function () {
        cancelAnimationFrame(this._animationFrame);
    };
    SequenceAnimator.prototype.start = function () {
        this._playAnimation();
    };
    SequenceAnimator.prototype.stop = function () {
        cancelAnimationFrame(this._animationFrame);
    };
    SequenceAnimator.prototype.reset = function () {
        this.setState({ frame: 0 });
    };
    SequenceAnimator.prototype.render = function () {
        var frame = this._getFrame();
        return React.createElement("div", null, frame);
    };
    SequenceAnimator.prototype._getChildrenArray = function () {
        var children = this.props.children;
        return React.Children.toArray(children || []);
    };
    SequenceAnimator.displayName = 'SequenceAnimator';
    SequenceAnimator.defaultProps = {
        duration: 1000,
        autoplay: true,
        easing: 'linear',
        loop: true,
    };
    return SequenceAnimator;
}(React.Component));
export { SequenceAnimator };
