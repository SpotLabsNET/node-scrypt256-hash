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
    //<SlowBuffer 0b de 16 ef 2d 92 e4 35 65 c6 6c d8 92 d9 66 b4 3d 65 ..... >

Credits
-------
Uses scrypt.c written by Colin Percival