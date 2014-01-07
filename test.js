var scrypthash = require('./build/Release/scrypthash');

var buff = new Buffer('1dbd981fe6985776b644b173a4d0385ddc1aa2a829688d1e0000005645645645645645654645645645645456456456456456454564560000000000', 'hex');

console.log(scrypthash.digest(buff));