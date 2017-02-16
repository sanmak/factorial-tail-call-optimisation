var Mocha = require('mocha');

// Instantiate a Mocha instance.
var mocha = new Mocha();
mocha.addFile("test.js");

// Run the tests.
mocha.run(function(failures){
  process.on('exit', function () {
    process.exit(failures);  // exit with non-zero status if there were failures
  });
});