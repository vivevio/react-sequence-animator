var Counter = /** @class */ (function () {
    function Counter() {
        this._count = 0;
    }
    Counter.prototype.increment = function (n) {
        if (n === void 0) { n = 1; }
        this._count += n;
    };
    Counter.prototype.getCount = function () {
        return this._count;
    };
    return Counter;
}());
export default Counter;
