beforeEach(function () {
  jasmine.addMatchers({
    vectorEqual: function () {
      return {
        compare: function (actual, x, y) {
          return {
            pass: actual.isEqual(new Vec2(x, y)),
            message: `Expected ${actual.toString()} to be equal to (${x},${y}).`
          };
        }
      };
    }
  });
});
