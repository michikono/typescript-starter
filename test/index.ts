/// <reference path="../typings/tsd.d.ts" />
import HelloWorld = require('../src/lib/HelloWorld')
import assert = require("assert");
require('sinomocha')();

describe('HelloWorld', function () {
    describe('Statement', function () {
        var instance;

        beforeEach(function () {
            // runs before each test in this block
            instance = new HelloWorld.Statement();
        });

        describe('words()', function () {
            it('should return "Hello World!"', function () {
                assert.equal('Hello World!', instance.words());
            })
        });
        describe('say()', function () {
            it('should call console.log once', function () {
                // erasing the default behavior on console.log
                var logSpy = this.stub(console, 'log');
                instance.say('my text');
                assert(logSpy.calledOnce);
            });

            it('should call console.log with the argument passed in', function () {
                // erasing the default behavior on console.log
                var logSpy = this.stub(console, 'log');
                instance.say('my text');
                assert(logSpy.calledWith('my text'));
            });
        });
    });
});
