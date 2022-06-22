var tape = require("tape");

var protobuf = require(".."),


console.log('-----hello-------------');

tape.test("test1", function(test) {
    protobuf.load("tests/data/repro/test1.proto", undefined, function(err, root) {
      if (err) {
        return test.fail(err.message);
      }
        test.end();
    });
});

tape.test("test2", function(test) {
  protobuf.load("tests/data/repro/test2.proto", undefined, function(err, root) {
    if (err) {
      return test.fail(err.message);
    }
      test.end();
  });
});