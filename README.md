# Overview

This project will help you quickly get started with TypeScript. The setup is streamlined for use in WebStorm, but that is not
a requirement.

Note that this requires that you install `npm` (`node` comes with it: http://nodejs.org/download/). This is because TypeScript
compiles to JavaScript and without Node, you would need to run your code in a browser. Running sample snippets in a browser
adds unnecessary complexity as compared to running Node scripts.

# Installing and running

First install all dependencies:

    npm install

Then you have two options: Use WebStorm or run it yourself.

## Using WebStorm (RECOMMENDED)

1. Setup a Watcher by going to Preferences => Tools => File Watchers => + => TypeScript
2. Change arguments to read `--sourcemap --target ES5 --module commonjs $FilePath$` and Hit OK

![TypeScript File Watcher setup](./readme/images/typescript.png)

3. Select the top level folder of your project in the IDE project navigator to the left
4. Click on "Help" => "Find Action..." in the top menu (or CMD + SHIFT + A)
5. Type in "Run file watcher" and press enter

![Run dialog](./readme/images/run.png)

You should see all TypeScript files have collapsible arrows next to them indicating new generated files. For example:

![Arrow example](./readme/images/arrow.png)

To run tests:

1. In the top menu, select Run => Edit Configurations... => + => Mocha
2. Name it "Tests"
3. The node interpreter should be populated. If not, use your terminal and type in `which node`
4. The Mocha package should be `/usr/local/lib/node_modules/mocha`, but if it is not, check where yours is installed
via `which mocha`. Replace `bin/mocha` with `lib/node_modules/mocha`.
5. The User Interface is TDD
6. The test directory is the `test` folder in this project

![Mocha Runner setup](./readme/images/mocha-setup.png)

To run it, in the top menu, select Run => Run... => And select Tests.

When you run the tests, you will see output at the bottom. Click on the play button to re-run the tests. Click on the
Auto-Test icon below the play button (see image) to toggle auto-testing (WebStorm will re-run tests on any file change).

![Mocha Runner output](./readme/images/mocha.png)

## Or run it yourself (NOT RECOMMENDED, but necessary for WebStorm haters)

The reason this is not recommended is because this project setup is optimized for TDD. In TDD, you want immediate feedback
when a test fails. Any setup without auto-testing will not be ideal. That said, with some manual hacking, you can setup
your own file watchers to re-run Mocha on any changes. This tutorial does not cover that process.

To compile, run the command:

    npm run ts

To run tests (this also runs the `ts` command for you):

    npm test

You will need to run the above commands every time you make a change.

# Notes


* Testing is done using two libraries. One is Mocha, a framework for writing assertions. The other is Sinon, a
stubbing and mocking library.
* You can find the Mocha documentation here: [http://mochajs.org/](http://mochajs.org/#getting-started)
* You can find the Sinon documentation here: [http://sinonjs.org/docs/](http://sinonjs.org/docs/)
* TypeScript declarations are found in `tsd.d.ts`, but are managed using `tsd`. They are like `.h` files in other
languages. If you end up using external libraries such as Underscore.js, you may want to install the dependency
using `tsd install [name] --save` (more on this here: [https://github.com/DefinitelyTyped/tsd](https://github.com/DefinitelyTyped/tsd))