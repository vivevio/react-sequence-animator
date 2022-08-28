"use strict";

exports.__esModule = true;
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Counter {
  constructor() {
    _defineProperty(this, "_count", 0);
  }

  increment(n = 1) {
    this._count += n;
  }

  getCount() {
    return this._count;
  }

}

exports.default = Counter;
//# sourceMappingURL=counter.js.map