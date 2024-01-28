// index.ts
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
export {
  MathAll
};
//# sourceMappingURL=index.js.map
