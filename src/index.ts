/// <reference path="../typings/tsd.d.ts" />
import HelloWorld = require('./lib/HelloWorld')

var instance = new HelloWorld.Statement();
instance.say(instance.words());