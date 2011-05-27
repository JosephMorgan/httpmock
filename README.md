# httpmock - Stubbing out third party web services

httpmock is a library for stubbing out web services without changing the system under test.  It's designed for functional testing, where you want to test your code full-stack, but you don't want your tests to fail because of instability in services being developed by other teams.  It can also be used when adding tests to a codebase that wasn't factored well for unit testing.

## Prerequisites

httpmock is composed of two parts: a server that sits in for the third party web service, and client bindings.  The server is written using [node.js](http://nodejs.org/).  The client bindings are written in whatever language you are using (Java is the only supported one at the moment).

Node.js is the only dependency to get the server up and running.  Node.js will work on any unix-like platform (including cygwin).  The easiest way to install it is probably you're package manager (e.g. `brew install node`).  [nvm](https://github.com/creationix/nvm) allows you to install multiple versions of node and quickly switch versions.  httpmock has been tested on v0.4.2 and v0.4.7.

## Installation and Setup

Download httpmock to the server, and run the following:
`cd server`
`bin/httpmock start`

That will run the control server (see below) on port 3000.  You can optionally pass a `--port` argument command line argument to change the port.  If you run the server in a background job, `bin/httpmock stop` will kill it.

The client bindings will simply be a library.  For Java, add httpmock.jar to your classpath.

## API

The Java API is a work in progress.  For examples, look under clients/java/functional-test/org/httpmock/WasCalledAtFunctionalTest.java to see example verifications and clients/java/functional-test/org/httpmock/StubbingFunctionalTest.java for stubbing examples.

## Building

To build everything, run `make` from a bash-like shell.  The server can be tested with the `make test`.  The Java code can be build and tested with `make java`.  Alternatively, within the clients/java directory, you can run `ant`.

## Contributing

Contributions are welcome (see TODO for my own open loops, although I welcome other ideas).  You can reach me at brandon.byars@gmail.com.
