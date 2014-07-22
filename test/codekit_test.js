'use strict';

var grunt = require('grunt')
  , path = require('path')
  , fs = require('fs')
  //, assert = require('assert')
  , testDir = path.join(process.cwd(), 'test')
  //, opts = { gruntfile: path.join(testDir, 'Gruntfile.js') }
  , tasks = [ 'codekit:testfoo' ];
  //, gruntConfig = require('./Gruntfile.js');

// set up grunt with our test specific gruntfile


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

exports.codekit = {
    setUp: function(done) {
      done();
  },

  basic_parsing_works: function(test) {
    test.expect(1);

    var actual = grunt.file.read('.tmp/test01_result.html');
    var expected = grunt.file.read('test/expected/test01_expected.html');
    test.equal(actual, expected, 'did not parse file correctly.');
    //test.equal(1,1,'basic test');

    test.done();
  },

  variable_embedding: function(test) {
    test.expect(1);

    var actual = grunt.file.read('.tmp/test02_result.html');
    var expected = grunt.file.read('test/expected/test02_expected.html');
    test.equal(actual, expected, 'did not parse variables correctly.');

    test.done();
  }


};
