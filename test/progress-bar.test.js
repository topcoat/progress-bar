'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.styleguide = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  diffName: function(test) {
    test.expect(1);

    var actual = grunt.file.read('release/css/topcoat-progress-bar.css');
    var expected = grunt.file.read('test/expected/topcoat-progress-bar.css');

    test.equal(actual, expected, 'should generate correct css');

    test.done();
  }
};

exports.variableTest = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  stylus: function(test) {
    test.expect(1);

    var actual = grunt.file.read('release/css/topcoat-progress-bar.css');
    test.equal(actual.match(/var-[a-z-]*[a-z]+/g), null, 'should not have missing vars');

    test.done();
  }
};