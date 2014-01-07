node-scrypthash
===============

Scrypt hashing function for node.js

Usage
-----

Install

    npm install scrypthash


Hash your data

    var scrypthash = require('scrypthash');

    var data = new Buffer("hash me good bro");
    var hashed = scrypthash.digest(data); //returns a 32 byte buffer

    console.log(hashed);
    //<SlowBuffer 0b de 16 ef 2d 92 e4 35 65 c6 6c d8 92 d9 66 b4 3d 65 e6 f8 87 72 28 50 18 f3 02 cc c7 f0 16 02>

