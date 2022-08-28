"use strict";

exports.__esModule = true;

var _SpriteAnimator = require("./SpriteAnimator");

Object.keys(_SpriteAnimator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SpriteAnimator[key]) return;
  exports[key] = _SpriteAnimator[key];
});

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _types[key]) return;
  exports[key] = _types[key];
});
//# sourceMappingURL=index.js.map