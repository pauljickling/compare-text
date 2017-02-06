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
        var num;
        var count = 0;
        var err1 = [];
        var err2 = [];
        var err_loc = [];
        if (file1.length < file2.length) {
          num = file2.length;
        } else {
          num = file1.length;
        }
        for (var i=0; i < num; i++) {
          if (file1.charAt(i) !== file2.charAt(i)) {
            count++;
            err1.push(file1.charAt(i));
            err2.push(file2.charAt(i));
            err_loc.push(i);
          }
        }
        console.log("Files failed test.");
        console.log("Number of discrepencies: " + count);

      }
    });
  });
}

test_files();
