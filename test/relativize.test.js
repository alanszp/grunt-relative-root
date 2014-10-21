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

exports.relativize = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },

  simple: function(test) {
    test.expect(1);

    test.equal(
      grunt.file.read('tmp/simple/stylish.css'),
      grunt.file.read('test/expected/simple/stylish.css'),
      'relativizes absolute paths in CSS'
    );
    test.done();
  },

  fancy: function(test) {
    test.expect(4);

    test.equal(
      grunt.file.read('tmp/fancy/stylish.css'),
      grunt.file.read('test/expected/fancy/stylish.css'),
      'relativizes absolute paths in CSS'
    );

    test.equal(
      grunt.file.read('tmp/fancy/double_quotes.css'),
      grunt.file.read('test/expected/fancy/double_quotes.css'),
      'transforms double quoted paths in CSS'
    );

    test.equal(
      grunt.file.read('tmp/fancy/no_quotes.css'),
      grunt.file.read('test/expected/fancy/no_quotes.css'),
      'transforms unquoted paths in CSS'
    );

    test.equal(
      grunt.file.read('tmp/fancy/prudent.html'),
      grunt.file.read('test/expected/fancy/prudent.html'),
      'relativizes absolute paths in HTML'
    );

    test.done();
  },

  forced: function(test) {
    test.expect(4);

    test.equal(
      grunt.file.read('tmp/forced/stylish.css'),
      grunt.file.read('test/expected/forced/stylish.css'),
      'relativizes absolute paths in CSS'
    );

    test.equal(
      grunt.file.read('tmp/forced/double_quotes.css'),
      grunt.file.read('test/expected/forced/double_quotes.css'),
      'transforms double quoted paths in CSS'
    );

    test.equal(
      grunt.file.read('tmp/forced/no_quotes.css'),
      grunt.file.read('test/expected/forced/no_quotes.css'),
      'transforms unquoted paths in CSS'
    );

    test.equal(
      grunt.file.read('tmp/forced/prudent.html'),
      grunt.file.read('test/expected/forced/prudent.html'),
      'relativizes absolute paths in HTML'
    );

    test.done();
  },

  forcedWithoutFinalSlash: function(test) {
    test.expect(4);

    test.equal(
      grunt.file.read('tmp/forcedWithoutFinalSlash/stylish.css'),
      grunt.file.read('test/expected/forced/stylish.css'),
      'relativizes absolute paths in CSS'
    );

    test.equal(
      grunt.file.read('tmp/forcedWithoutFinalSlash/double_quotes.css'),
      grunt.file.read('test/expected/forced/double_quotes.css'),
      'transforms double quoted paths in CSS'
    );

    test.equal(
      grunt.file.read('tmp/forcedWithoutFinalSlash/no_quotes.css'),
      grunt.file.read('test/expected/forced/no_quotes.css'),
      'transforms unquoted paths in CSS'
    );

    test.equal(
      grunt.file.read('tmp/forcedWithoutFinalSlash/prudent.html'),
      grunt.file.read('test/expected/forced/prudent.html'),
      'relativizes absolute paths in HTML'
    );

    test.done();
  }
};
