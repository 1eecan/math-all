"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var math_all_exports = {};
__export(math_all_exports, {
  MathAll: () => MathAll
});
module.exports = __toCommonJS(math_all_exports);
var MathAll = {
  round: function(target, digit) {
    const copiedTarget = target < 0 ? -1 * target : target;
    const isNegative = target < 0 ? true : false;
    if (digit >= copiedTarget.toString().length) {
      throw new Error("digit can't be over the target's digit");
    } else if (digit > 100 || digit < -100) {
      throw new Error("digits argument must be between -100 and 100 ");
    } else if (digit > -100 && digit < 0) {
      const result = Number(
        Math.round(copiedTarget + "e" + -1 * digit) + "e-" + -1 * digit
      );
      return isNegative ? -1 * result : result;
    } else {
      const result = Number(
        Math.round(copiedTarget / 10 ** digit) * 10 ** digit
      );
      return isNegative ? -1 * result : result;
    }
  }
};
//# sourceMappingURL=index.cjs.map
