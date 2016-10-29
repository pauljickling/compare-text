var fs = require("fs");

var source = process.argv.slice(2);

function test_files() {
  fs.readFile(source[0], "utf8", function(err, data) {
    if (err) throw err;
    var file1 = data;
    fs.readFile(source[1], "utf8", function(err, data) {
      if (err) throw err;
      var file2 = data;
      if (file1 === file2) {
        console.log("Files are equivalent!");
      } else {
        console.log("Files failed test.");
      }
    });
  });
}

test_files();
